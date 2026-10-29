import { z } from "zod";

/** Indian mobile phone: exactly 10 digits starting with 6, 7, 8, or 9. */
const phoneRegex = /^[6-9]\d{9}$/;

export const enquirySchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(120, "Name is too long"),
  phone: z
    .string()
    .trim()
    .refine((val) => val.replace(/\D/g, "").length === 10, {
      message: "Mobile number must be exactly 10 digits",
    })
    .refine((val) => phoneRegex.test(val.replace(/\D/g, "")), {
      message: "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9",
    }),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(160, "Email is too long")
    .optional()
    .or(z.literal("")),
  company_name: z.string().trim().max(160).optional().or(z.literal("")),
  location: z.string().trim().max(160).optional().or(z.literal("")),
  property_type: z.string().trim().max(80).optional().or(z.literal("")),
  service_required: z
    .string()
    .trim()
    .min(1, "Please select a service")
    .max(120, "Service selection is too long"),
  message: z.string().trim().max(3000, "Message is too long").optional().or(z.literal("")),
  /** Honeypot field — must remain empty. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export function flattenZodErrors(err: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of err.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
