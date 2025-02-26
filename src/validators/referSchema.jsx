import { z } from "zod";

export const referSchema = z.object({
  referrerName: z.string().min(3, "Name must be at least 3 characters"),
  referrerEmail: z.string().email("Invalid email address"),
  referrerPhone: z.string().min(10, "Invalid phone number"),
  referralCode: z.string().optional(),

  refereeName: z.string().min(3, "Friend's name must be at least 3 characters"),
  refereeEmail: z.string().email("Invalid email address"),
  refereePhone: z.string().min(10, "Invalid phone number"),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().optional(),

  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms.",
  }),
});
