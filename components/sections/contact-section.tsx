"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CONTACT_INFO } from "@/lib/constants";
import type { ContactInfo } from "@/types";
import axios from 'axios';

interface ContactSectionProps {
  className?: string;
  contactInfo?: ContactInfo[];
}

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM EAT" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM EAT" },
  { day: "Sunday", hours: "Closed" },
];

export function ContactSection({ className, contactInfo = CONTACT_INFO }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    errors?: string[];
  } | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Clear form
  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: ''
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      console.log('Submitting form data:', formData);

      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000,
        validateStatus: function (status) {
          return status < 500;
        }
      });

      console.log('Response received:', response.data);

      if (response.data.success) {
        setSubmitResult({
          success: true,
          message: response.data.message || "Message sent successfully! We'll get back to you soon.",
        });
        clearForm();
      } else {
        setSubmitResult({
          success: false,
          message: response.data.message || "Something went wrong. Please try again.",
          errors: response.data.errors,
        });
      }

    } catch (error) {
      console.error('Form submission error:', error);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log('Error response:', error.response.data);
          setSubmitResult({
            success: false,
            message: error.response.data?.message || "Server error occurred.",
            errors: error.response.data?.errors,
          });
        } else if (error.request) {
          console.log('No response received:', error.request);
          setSubmitResult({
            success: false,
            message: "No response from server. Please check your internet connection.",
          });
        } else {
          console.log('Request setup error:', error.message);
          setSubmitResult({
            success: false,
            message: "An unexpected error occurred. Please try again.",
          });
        }
      } else {
        console.log('Non-axios error:', error);
        setSubmitResult({
          success: false,
          message: "Network error. Please check your connection and try again.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today to discuss which SaaS solution is perfect for your business. Our team will help you get up
            and running with a free trial and full implementation support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your SaaS Solution Today</CardTitle>
                <CardDescription className="text-base">
                  Tell us about your business and we'll recommend the perfect SaaS solution for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {submitResult && (
                  <Alert className={submitResult.success ? "border-green-500" : "border-red-500"}>
                    {submitResult.success ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                    <AlertDescription className={submitResult.success ? "text-green-700" : "text-red-700"}>
                      {submitResult.message}
                      {submitResult.errors && (
                        <ul className="mt-2 list-disc list-inside">
                          {submitResult.errors.map((error, index) => (
                            <li key={index} className="text-sm">{error}</li>
                          ))}
                        </ul>
                      )}
                    </AlertDescription>
                  </Alert>
                )}

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="h-12"
                      required
                    />
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="h-12"
                      required
                    />
                  </div>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Business Email"
                    type="email"
                    className="h-12"
                    required
                  />
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="h-12"
                    required
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Which SaaS solution interests you most? (Sungura Master for rabbit farming, Cosmos Scents for cosmetics, Zao for agriculture, or RetailFlow for retail)"
                    className="min-h-[120px]"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Get My SaaS Solution"}{" "}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`p-4 bg-gradient-to-br ${info.gradient} rounded-2xl shadow-lg`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{info.label}</div>
                      <div className="text-muted-foreground whitespace-pre-line">
                        {info.label === "Email" ? (
                          <a
                            href={`mailto:${info.value}`}
                            className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors cursor-pointer"
                          >
                            {info.value}
                          </a>
                        ) :
                          info.label === "Phone" ? (
                            <div className="space-y-1">
                              {info.value.split(" | ").map((phoneNumber, phoneIndex) => (
                                <div key={phoneIndex}>
                                  <a
                                    href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                                    className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors cursor-pointer"
                                  >
                                    {phoneNumber.trim()}
                                  </a>
                                </div>
                              ))}
                            </div>
                          ) : (
                            info.value
                          )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Business Hours (East Africa Time)</h4>
              <div className="space-y-3 text-muted-foreground">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 rounded-lg p-6">
              <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Our SaaS Products:</h4>
              <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-1">
                <li>
                  🐰 <strong>Sungura Master</strong> - Rabbit breeding & farm management
                </li>
                <li>
                  🌸 <strong>Cosmos Scents</strong> - Cosmetics & beauty business management
                </li>
                <li>
                  🌾 <strong>Zao</strong> - Comprehensive agricultural management
                </li>
                <li>
                  🛍️ <strong>RetailFlow</strong> - Multi-location retail management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}