"use server"

import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Save to database (e.g., Supabase, MongoDB, etc.)
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-response email

    // For now, we'll just log the data (in production, remove this)
    console.log("Contact form submission:", validatedData)

    // You can also save to a simple JSON file or database
    // Example with a hypothetical database save:
    /*
    await db.contacts.create({
      data: {
        ...validatedData,
        submittedAt: new Date(),
        status: 'new'
      }
    })
    */

    return {
      success: true,
      message: `Thank you ${validatedData.firstName}! We've received your message and will get back to you within 24 hours.`,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form data and try again.",
        errors: error.errors.map((err) => `${err.path.join(".")}: ${err.message}`),
      }
    }

    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
