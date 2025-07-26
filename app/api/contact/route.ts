import EmailService from '@/lib/email-service';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, company, message } = body;
        const errors = [];
        if (!firstName?.trim()) errors.push('First name is required');
        if (!lastName?.trim()) errors.push('Last name is required');
        if (!email?.trim()) errors.push('Email is required');
        if (!company?.trim()) errors.push('Company is required');
        if (!message?.trim()) errors.push('Message is required');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
        }

        if (errors.length > 0) {
            return NextResponse.json({
                success: false,
                message: 'Validation failed',
                errors
            }, { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('Missing email configuration');
            return NextResponse.json(
                {
                    success: false,
                    message: 'Email service is not configured properly'
                },
                { status: 500 }
            );
        }

        const emailService = new EmailService();
        const emailContent = `
            New contact form submission:
            
            Name: ${firstName} ${lastName}
            Email: ${email}
            Company: ${company}
            Message: ${message}
            
            Submitted: ${new Date().toLocaleString()}
        `;

        const templateData = { firstName, lastName, email, company, message, timestamp: new Date().toLocaleString(), };
        const result = await emailService.sendEmail({
            to: process.env.CONTACT_EMAIL || 'your-contact-email@example.com',
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            text: emailContent,
            templatePath: 'templates/contact-email.html',
            templateData,
        });

        if (!result.success) {
            console.error('Email sending failed:', result.message);
            return NextResponse.json(
                {
                    success: false,
                    message: 'Failed to send email. Please try again later.'
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
        });

    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'An unexpected error occurred. Please try again later.'
            },
            { status: 500 }
        );
    }
}