import { ArrowUpRight, ArrowRight, Target, Eye, HeartHandshake, ClipboardList, Wrench, Network, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "./data";

export function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="eyebrow"><span>{number}</span> {eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function Services({ onConsult }: { onConsult: (service: string) => void }) {
  return <section id="servicios" className="section services-section"><div className="container">
    <div className="heading-row"><SectionHeading number="01" eyebrow="LO QUE HACEMOS" title="Tecnología que trabaja para vos." description="De un equipo que necesita atención a una idea que necesita una web. Tenemos una solución para cada desafío."/><span className="section-side-note">CUATRO ESPECIALIDADES.<br/>UN MISMO COMPROMISO.</span></div>
    <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}>
      <div className="service-top"><span className="icon-tile"><service.icon size={25}/></span><span className="item-number">0{index + 1}</span></div>
      <span className="card-category">{service.category}</span><h3>{service.title}</h3><p>{service.description}</p>
      <Button variant="link" onClick={() => onConsult(service.title)} className="consult-button">Consultar servicio <ArrowUpRight/></Button>
    </article>)}</div>
  </div></section>;
}

export function About() {
  return <section id="nosotros" className="section about-section"><div className="container about-layout">
    <div><SectionHeading number="02" eyebrow="SOBRE NOSOTROS" title="Cerca tuyo. Un paso adelante."/>
      <p className="about-lead">Somos TecnoSoluciones SRL, una pequeña empresa con una gran convicción: la tecnología tiene que simplificarte la vida.</p>
      <p className="body-copy">Desde Trujui, Moreno, acompañamos a empresas y particulares con servicios informáticos integrales. Combinamos conocimiento técnico, escucha y compromiso para encontrar la solución que realmente necesitás.</p>
      <a className="text-link" href="#contacto">Conversemos sobre tu próxima idea <ArrowRight size={17}/></a>
    </div>
    <div className="purpose-list">
      <div className="purpose-item"><Target/><div><h3>Nuestra misión</h3><p>Brindar soluciones informáticas accesibles, eficientes y confiables que mejoren el trabajo y la vida cotidiana de nuestros clientes.</p></div></div>
      <div className="purpose-item"><Eye/><div><h3>Nuestra visión</h3><p>Ser un referente tecnológico de nuestra comunidad, creciendo junto a quienes confían en nosotros y adaptándonos a cada nuevo desafío.</p></div></div>
      <div className="purpose-item values-item"><HeartHandshake/><div><h3>Los valores que nos conectan</h3><div className="value-list">{["Confianza", "Innovación", "Compromiso", "Eficiencia"].map(label => <span key={label}>{label}</span>)}</div></div></div>
    </div>
  </div></section>;
}

const areas = [
  { icon: ClipboardList, name: "Administración", copy: "Organización, planificación y atención a cada consulta." },
  { icon: Wrench, name: "Soporte técnico", copy: "Diagnóstico y cuidado de tus equipos informáticos." },
  { icon: Network, name: "Redes y servidores", copy: "Infraestructura conectada, estable y segura." },
  { icon: Code2, name: "Desarrollo web", copy: "Diseño y código para tu presencia digital." },
];

export function Areas() {
  return <section id="areas" className="section areas-section"><div className="container">
    <SectionHeading number="03" eyebrow="ÁREAS DE TRABAJO" title="Diferentes áreas. Una misma dirección." description="Nos organizamos para acompañarte en cada etapa, de la primera consulta a la solución final."/>
    <div className="areas-grid">{areas.map(area => <div className="area-item" key={area.name}><area.icon size={29}/><h3>{area.name}</h3><p>{area.copy}</p></div>)}</div>
  </div></section>;
}

export function Projects({ onConsult }: { onConsult: (service: string) => void }) {
  return <section id="proyectos" className="section projects-section"><div className="container">
    <div className="heading-row"><SectionHeading number="04" eyebrow="IDEAS EN ACCIÓN" title="Así se ven nuestras soluciones." description="Una mirada a lo que podemos construir, conectar y mejorar."/><span className="demo-label"><span className="status-dot"/> Ejemplos demostrativos</span></div>
    <div className="projects-grid">{services.map(service => <article className="project-card" key={service.project}>
      <div className="project-image"><img src={service.image} alt={service.project} loading="lazy" width="656" height="600"/><span className="image-label">DEMOSTRATIVO</span></div>
      <div className="project-body"><span className="card-category">{service.category}</span><h3>{service.project}</h3><p>{service.detail}</p><Button variant="link" onClick={() => onConsult(service.title)}>Consultar una solución similar <ArrowUpRight/></Button></div>
    </article>)}</div>
    <p className="projects-disclaimer">Las imágenes y propuestas son ejemplos ilustrativos para este proyecto académico; no representan trabajos reales realizados por la empresa.</p>
  </div></section>;
}