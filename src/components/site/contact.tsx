import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Clock3, Phone, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { validateContact, type ContactFields } from "@/lib/contact";
import { SectionHeading } from "./sections";

export function Contact({ subject, subjectTick }: { subject: string; subjectTick: number }) {
  const [fields, setFields] = useState<ContactFields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFields, string>>>({});
  const [confirmed, setConfirmed] = useState(false);
  useEffect(() => { if (subject) { setFields(current => ({ ...current, subject })); setConfirmed(false); } }, [subject, subjectTick]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateContact(fields);
    if (!result.success) {
      const next: Partial<Record<keyof ContactFields, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (key === "name" || key === "email" || key === "subject" || key === "message") next[key] = issue.message;
      }
      setErrors(next);
      const first = result.error.issues[0]?.path[0];
      if (typeof first === "string") document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setErrors({});
    setFields({ name: "", email: "", subject: "", message: "" });
    setConfirmed(true);
  }
  function update(key: keyof ContactFields, value: string) {
    setFields(current => ({ ...current, [key]: value }));
    setErrors(current => ({ ...current, [key]: "" }));
    setConfirmed(false);
  }
  const inputs: { key: keyof ContactFields; label: string; placeholder: string; type?: string }[] = [
    { key: "name", label: "Nombre", placeholder: "Tu nombre", type: "text" },
    { key: "email", label: "Correo electrónico", placeholder: "vos@ejemplo.com", type: "email" },
    { key: "subject", label: "Asunto", placeholder: "¿En qué podemos ayudarte?", type: "text" },
    { key: "message", label: "Mensaje", placeholder: "Contanos un poco sobre lo que necesitás…" },
  ];
  return <section id="contacto" className="section contact-section"><div className="container contact-layout">
    <div><SectionHeading number="05" eyebrow="HABLEMOS" title="Tu próxima solución empieza con una conversación." description="Una consulta, un proyecto o una idea. Estamos para escucharte."/>
      <div className="contact-details">
        <div><MapPin/><span><strong>Estamos cerca</strong>Trujui, Moreno, Buenos Aires, Argentina</span></div>
        <div><Mail/><span><strong>Correo demostrativo</strong>contacto@tecnosoluciones.example</span></div>
        <div><Phone/><span><strong>Teléfono demostrativo</strong>+54 (11) XXXX-XXXX</span></div>
        <div><Clock3/><span><strong>Horario de atención propuesto</strong>Lunes a viernes, de 9:00 a 18:00 h</span></div>
      </div>
    </div>
    <div className="contact-form-wrap">
      <h3>Contanos qué necesitás</h3>
      <p className="form-note"><Info size={16}/> Formulario demostrativo · No se envían correos reales.</p>
      <form onSubmit={submit} noValidate className="contact-form">
        <div className="form-grid">{inputs.map(input => <div key={input.key} className={`form-field ${input.key === "subject" || input.key === "message" ? "form-wide" : ""}`}>
          <label htmlFor={`contact-${input.key}`}>{input.label} <span aria-hidden="true">*</span></label>
          {input.key === "message" ? <textarea id={`contact-${input.key}`} name={input.key} value={fields[input.key]} onChange={e => update(input.key, e.target.value)} rows={4} placeholder={input.placeholder} required aria-invalid={Boolean(errors[input.key])} aria-describedby={errors[input.key] ? `error-${input.key}` : undefined} maxLength={3000}/> : <input id={`contact-${input.key}`} name={input.key} type={input.type} autoComplete={input.key === "name" ? "name" : input.key === "email" ? "email" : "off"} value={fields[input.key]} onChange={e => update(input.key, e.target.value)} placeholder={input.placeholder} required aria-invalid={Boolean(errors[input.key])} aria-describedby={errors[input.key] ? `error-${input.key}` : undefined} maxLength={input.key === "subject" ? 150 : 200}/>}
          {errors[input.key] && <span id={`error-${input.key}`} className="field-error">{errors[input.key]}</span>}
        </div>)}</div>
        <Button type="submit" size="lg" className="submit-button">Enviar consulta <ArrowUpRight/></Button>
        <p className="form-privacy">Tus datos no se guardan ni se comparten. Todos los campos son obligatorios.</p>
        {confirmed && <div className="form-success" role="status"><CheckCircle2/><div><strong>¡Gracias por contactarte con TecnoSoluciones SRL!</strong><p>Tu consulta fue registrada correctamente (demostración académica).</p></div></div>}
      </form>
    </div>
  </div></section>;
}