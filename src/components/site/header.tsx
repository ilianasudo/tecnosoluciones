import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./brand";
import { navigation } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navigation.map(item => <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} aria-current={active === item.id ? "location" : undefined}>{item.label}</a>)}
      </nav>
      <Button asChild className="header-contact"><a href="#contacto">Hablemos <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-nav">{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegación móvil">
      {[...navigation, { id: "contacto", label: "Contacto" }].map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16}/></a>)}
    </nav>}
  </header>;
}