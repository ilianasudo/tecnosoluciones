import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Brand } from "./brand";
import { navigation, services } from "./data";

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main">
      <div className="footer-brand"><Brand inverse/><p>Tecnología cercana. Soluciones confiables.<br/>Ideas que se convierten en posibilidades.</p><span className="footer-location"><MapPin size={15}/> Trujui, Moreno, Buenos Aires</span></div>
      <div className="footer-column"><h3>Explorá</h3>{navigation.map(item => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</div>
      <div className="footer-column"><h3>Servicios</h3>{services.map(service => <a href="#servicios" key={service.title}>{service.title}</a>)}</div>
      <div className="footer-column"><h3>Conectemos</h3><p>¿Tenés una idea?<br/>Demos el próximo paso.</p><a className="footer-cta" href="#contacto">Contactanos <ArrowUpRight size={17}/></a><span className="academic-label">Empresa ficticia · Proyecto académico</span></div>
    </div>
    <div className="footer-bottom"><span>© 2026 TecnoSoluciones SRL. Todos los derechos reservados.</span>
      <Dialog><DialogTrigger asChild><Button variant="link" className="privacy-button">Política de privacidad</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Política de privacidad</DialogTitle><DialogDescription>TecnoSoluciones SRL · Sitio académico demostrativo</DialogDescription></DialogHeader><div className="privacy-copy"><p>Este sitio representa una empresa ficticia. Los proyectos, imágenes y datos de contacto se presentan con fines educativos.</p><p>El formulario valida los datos únicamente en tu navegador. No envía correos, no guarda consultas y no comparte información con terceros. Los datos se descartan al recargar la página.</p><p>No se utilizan cookies de seguimiento ni herramientas de análisis añadidas por este sitio. No ingreses información sensible en el formulario.</p></div></DialogContent></Dialog>
    </div>
  </div></footer>;
}