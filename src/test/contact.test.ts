import { describe, expect, it } from "vitest";
import { validateContact } from "@/lib/contact";

const valid = { name: "Ana Pérez", email: "ana@example.com", subject: "Consulta sobre redes", message: "Necesito configurar una red para mi oficina." };
describe("Validación del formulario demostrativo", () => {
  it("acepta una consulta completa y válida", () => { expect(validateContact(valid).success).toBe(true); });
  it("rechaza un nombre vacío", () => { expect(validateContact({ ...valid, name: " " }).success).toBe(false); });
  it("rechaza un correo inválido", () => { expect(validateContact({ ...valid, email: "no-es-un-correo" }).success).toBe(false); });
  it("rechaza un asunto vacío", () => { expect(validateContact({ ...valid, subject: "" }).success).toBe(false); });
  it("rechaza un mensaje vacío", () => { expect(validateContact({ ...valid, message: "" }).success).toBe(false); });
  it("acepta y recorta un correo con espacios al principio y al final", () => {
    const result = validateContact({ ...valid, email: "   ana.personal@outlook.com   " });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.email).toBe("ana.personal@outlook.com");
  });
  it("acepta direcciones de distintos proveedores", () => {
    for (const email of ["ana@gmail.com", "ana.personal@outlook.com", "ana+consultas@yahoo.com.ar", "ANA@PROTONMAIL.CO.UK"]) {
      expect(validateContact({ ...valid, email }).success).toBe(true);
    }
  });
  it("rechaza un correo con sólo espacios", () => { expect(validateContact({ ...valid, email: "   " }).success).toBe(false); });
});