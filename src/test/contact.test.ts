import { describe, expect, it } from "vitest";
import { validateContact } from "@/lib/contact";

const valid = { name: "Ana Pérez", email: "ana@example.com", subject: "Consulta sobre redes", message: "Necesito configurar una red para mi oficina." };
describe("Validación del formulario demostrativo", () => {
  it("acepta una consulta completa y válida", () => { expect(validateContact(valid).success).toBe(true); });
  it("rechaza un nombre vacío", () => { expect(validateContact({ ...valid, name: " " }).success).toBe(false); });
  it("rechaza un correo inválido", () => { expect(validateContact({ ...valid, email: "no-es-un-correo" }).success).toBe(false); });
  it("rechaza un asunto vacío", () => { expect(validateContact({ ...valid, subject: "" }).success).toBe(false); });
  it("rechaza un mensaje vacío", () => { expect(validateContact({ ...valid, message: "" }).success).toBe(false); });
});