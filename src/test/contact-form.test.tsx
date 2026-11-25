import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Contact } from "@/components/site/contact";

const MESSAGE = "¡Gracias por contactarte con TecnoSoluciones SRL! Tu consulta fue registrada correctamente (demostración académica).";
const HEADLINE = "¡Gracias por contactarte con TecnoSoluciones SRL!";
const DETAIL = "Tu consulta fue registrada correctamente (demostración académica).";

function fill(page: ReturnType<typeof render>, values: Record<string, string>) {
  for (const [name, value] of Object.entries(values)) {
    fireEvent.change(page.getByLabelText(new RegExp(`^${name}`, "i")), { target: { value } });
  }
}

describe("Formulario demostrativo en pantalla", () => {
  it("muestra la confirmación exacta y limpia los campos al enviar una consulta válida", () => {
    const page = render(<Contact subject="" subjectTick={0} />);
    fill(page, {
      Nombre: "Ana Pérez",
      "Correo electrónico": "  ana.personal@outlook.com  ",
      Asunto: "Consulta sobre redes",
      Mensaje: "Necesito configurar una red para mi oficina.",
    });
    fireEvent.click(page.getByRole("button", { name: /Enviar consulta/i }));

    const status = screen.getByRole("status");
    expect(status.querySelector("strong")?.textContent).toBe(HEADLINE);
    expect(status.querySelector("p")?.textContent).toBe(DETAIL);
    expect(`${HEADLINE} ${DETAIL}`).toBe(MESSAGE);
    for (const name of ["Nombre", "Correo electrónico", "Asunto", "Mensaje"]) {
      expect(page.getByLabelText(new RegExp(`^${name}`, "i"))).toHaveValue("");
    }
  });

  it("no confirma ni borra los datos cuando falta un campo obligatorio", () => {
    const page = render(<Contact subject="" subjectTick={0} />);
    fill(page, {
      Nombre: "Ana Pérez",
      "Correo electrónico": "ana@gmail.com",
      Asunto: "",
      Mensaje: "Necesito configurar una red para mi oficina.",
    });
    fireEvent.click(page.getByRole("button", { name: /Enviar consulta/i }));

    expect(screen.queryByRole("status")).toBeNull();
    expect(page.getByLabelText(/^Asunto/i)).toHaveValue("");
    expect(page.getByLabelText(/^Nombre/i)).toHaveValue("Ana Pérez");
  });
});
