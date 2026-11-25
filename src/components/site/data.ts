import { Wrench, Network, Server, Code2 } from "lucide-react";
import maintenance from "@/assets/maintenance.webp.asset.json";
import networks from "@/assets/networks.webp.asset.json";
import servers from "@/assets/servers.webp.asset.json";
import web from "@/assets/web.webp.asset.json";

export const navigation = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "areas", label: "Áreas de trabajo" },
  { id: "proyectos", label: "Proyectos" },
];

export const services = [
  { icon: Wrench, title: "Reparación y mantenimiento", category: "SOPORTE INFORMÁTICO", description: "Diagnóstico preciso, reparación y mantenimiento preventivo y correctivo para que tus equipos sigan al ritmo de tu trabajo.", image: maintenance.url, project: "Puesta a punto de equipos", detail: "Diagnóstico, limpieza interna y optimización de una computadora de escritorio." },
  { icon: Network, title: "Instalación de redes", category: "CONECTIVIDAD", description: "Diseño e instalación de redes, cableado estructurado y configuración de dispositivos. Conectividad estable donde la necesitás.", image: networks.url, project: "Red para una oficina", detail: "Propuesta de cableado estructurado y configuración de una red de trabajo." },
  { icon: Server, title: "Administración de servidores", category: "INFRAESTRUCTURA", description: "Instalación, configuración y administración de servidores y servicios informáticos. Una base segura para tu información.", image: servers.url, project: "Entorno de servidores", detail: "Ejemplo de configuración de servicios, accesos y copias de seguridad." },
  { icon: Code2, title: "Diseño y desarrollo web", category: "SOLUCIONES DIGITALES", description: "Sitios web modernos, adaptables y funcionales para empresas y particulares. Transformamos tus ideas en presencia digital.", image: web.url, project: "Sitio web empresarial", detail: "Concepto de sitio institucional adaptable a computadoras y celulares." },
];