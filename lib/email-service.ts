import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';
import type { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

class EmailService {
    private transporter: Transporter;
    private config: {
        service?: string;
        user?: string;
        defaultSender?: string;
    };

    constructor() {
        this.config = {
            service: process.env.EMAIL_SERVICE || 'gmail',
            user: process.env.SMTP_USER,
            defaultSender: process.env.DEFAULT_SENDER_EMAIL || process.env.SMTP_USER,
        };
        const transportConfig: SMTPTransport.Options = {
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER || '',
                pass: process.env.SMTP_PASS || '',
            },
            tls: {
                rejectUnauthorized: false
            }
        };

        this.transporter = nodemailer.createTransport(transportConfig);
    }

    /**
     * Load template file from disk
     */
    async loadTemplate(templatePath: string): Promise<string> {
        try {
            const fullPath = path.isAbsolute(templatePath) ? templatePath : path.join(process.cwd(), templatePath);
            return await fs.readFile(fullPath, 'utf8');
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            console.error(`Error loading template ${templatePath}: ${errorMsg}`);
            return `
                <html>
                <body>
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> {{firstName}} {{lastName}}</p>
                    <p><strong>Email:</strong> {{email}}</p>
                    <p><strong>Company:</strong> {{company}}</p>
                    <p><strong>Message:</strong> {{message}}</p>
                    <p><strong>Submitted:</strong> {{timestamp}}</p>
                </body>
                </html>
            `;
        }
    }

    /**
     * Replace variables in the email template
     */
    updateTemplate(template: string, data: Record<string, string>): string {
        debugger;
        return template.replace(/{{(\w+)}}/g, (_, key) => data[key] || '');
    }

    /**
     * Verify email configuration
     */
    async verifyConnection(): Promise<boolean> {
        try {
            await this.transporter.verify();
            return true;
        } catch (error) {
            console.error('Email service verification failed:', error);
            return false;
        }
    }

    /**
     * Send an email
     */
    async sendEmail(options: { to: string; subject: string; text: string; from?: string; templatePath?: string; templateData?: Record<string, string>; }) {
        try {
            const { to, subject, text, from = this.config.defaultSender, templatePath, templateData } = options;
            const isConnected = await this.verifyConnection();
            if (!isConnected) {
                return {
                    success: false,
                    message: 'Email service connection failed. Please check your email configuration.'
                };
            }
            let html = text;
            if (templatePath && templateData) {
                try {
                    const templateContent = await this.loadTemplate(templatePath);
                    html = this.updateTemplate(templateContent, templateData);
                } catch (templateError) {
                    console.warn('Template loading failed, using fallback:', templateError);
                }
            }
            const message = { to, from, subject, text, html };
            const result = await this.transporter.sendMail(message);
            return {
                success: true,
                message: 'Email sent successfully',
                messageId: result.messageId
            };

        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            console.error(`Error sending email:`, error);

            // Provide more specific error messages
            if (errorMsg.includes('Invalid login')) {
                return {
                    success: false,
                    message: 'Email authentication failed. Please check your email credentials.'
                };
            } else if (errorMsg.includes('ENOTFOUND') || errorMsg.includes('ECONNREFUSED')) {
                return {
                    success: false,
                    message: 'Unable to connect to email server. Please check your network connection.'
                };
            } else {
                return {
                    success: false,
                    message: `Failed to send email: ${errorMsg}`
                };
            }
        }
    }
}

export default EmailService;