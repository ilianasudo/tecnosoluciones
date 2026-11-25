import { z } from "zod";

const emailField = z
  .string()
  .trim()
  .min(1, "Ingresá tu correo electrónico.")
  .pipe(z.email("Ingresá un correo electrónico válido."));

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre (al menos 2 caracteres)."),
  email: emailField,
  subject: z.string().trim().min(3, "Ingresá un asunto (al menos 3 caracteres)."),
  message: z.string().trim().min(10, "Contanos tu consulta (al menos 10 caracteres)."),
});

export type ContactFields = z.infer<typeof contactSchema>;

export function validateContact(fields: ContactFields) {
  return contactSchema.safeParse(fields);
}
