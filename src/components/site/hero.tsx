import { ArrowRight, ArrowUpRight, ChevronDown, MapPin, ShieldCheck, Sparkles, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/technology-hero.webp.asset.json";

export function Hero() {
  return <>
    <section id="inicio" className="hero">
      <img className="hero-image" src={hero.url} alt="Infraestructura tecnológica con servidores y conexiones de red organizadas" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-eyebrow"><span className="status-dot"/> TU PRÓXIMO PASO, CONECTADO.</span>
          <h1>Soluciones tecnológicas para <span>impulsar tus ideas.</span></h1>
          <p>En TecnoSoluciones SRL conectamos tecnología y personas. Acompañamos a empresas y particulares con soluciones informáticas que hacen la diferencia.</p>
          <div className="hero-actions">
            <Button asChild variant="hero" size="lg"><a href="#servicios">Conocé nuestros servicios <ArrowRight /></a></Button>
            <Button asChild variant="heroOutline" size="lg"><a href="#contacto">Contactanos <ArrowUpRight /></a></Button>
          </div>
          <div className="hero-location"><span className="location-place"><MapPin size={15}/> Trujui, Moreno, Buenos Aires</span><span className="location-line"/><span>Tecnología cercana. Soluciones reales.</span></div>
        </div>
      </div>
      <a className="hero-scroll" href="#servicios" aria-label="Explorar nuestros servicios"><ChevronDown size={20}/></a>
      <div className="hero-caption"><span className="status-dot"/> CONECTAMOS TU PRESENTE CON EL FUTURO</div>
    </section>
    <div className="trust-strip"><div className="container trust-inner">
      <div><ShieldCheck/><span>Compromiso y confianza</span></div>
      <div><Sparkles/><span>Soluciones a tu medida</span></div>
      <div><Headphones/><span>Atención personalizada</span></div>
      <span className="trust-note">Tu tecnología, en buenas manos.</span>
    </div></div>
  </>;
}