import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Services, About, Areas, Projects } from "@/components/site/sections";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "TecnoSoluciones SRL | Soluciones informáticas en Moreno" },
    { name: "description", content: "Reparación de computadoras, redes, servidores y desarrollo web en Trujui, Moreno. Conocé TecnoSoluciones SRL, un proyecto empresarial académico." },
    { property: "og:title", content: "TecnoSoluciones SRL | Tecnología que conecta" },
    { property: "og:description", content: "Soluciones tecnológicas para impulsar tus ideas. Servicios informáticos para empresas y particulares en Moreno. Sitio académico demostrativo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [subject, setSubject] = useState("");
  const [subjectTick, setSubjectTick] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".section-heading, .service-card, .area-item, .project-card").forEach(el => { el.classList.add("reveal"); observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  function consult(service: string) {
    setSubject(`Consulta: ${service}`);
    setSubjectTick(tick => tick + 1);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  }
  return <><a className="skip-link" href="#contenido">Ir al contenido</a><Header/><main id="contenido"><Hero/><Services onConsult={consult}/><About/><Areas/><Projects onConsult={consult}/><Contact subject={subject} subjectTick={subjectTick}/></main><Footer/></>;
}
