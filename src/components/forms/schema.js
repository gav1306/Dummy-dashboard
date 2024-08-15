import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "min 2 characters required",
    })
    .max(50, {
      message: "max 50 characters allowed",
    }),
});

export const widgetSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "min 2 characters required",
    })
    .max(50, {
      message: "max 50 characters allowed",
    }),
  description: z
    .string()
    .min(2, {
      message: "min 2 characters required",
    })
    .max(50, {
      message: "max 50 characters allowed",
    }),
});
