export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <a href="#inicio" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="TecnoSoluciones SRL, inicio">
    <svg className="brand-symbol" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M22 3 39 13v19L22 42 5 32V13L22 3Z" stroke="currentColor" strokeWidth="3" />
      <path d="M12 16h20M22 16v17M12 25h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="16" r="3" fill="currentColor"/><circle cx="12" cy="25" r="3" fill="currentColor"/>
    </svg>
    <span className="brand-name">Tecno<span>Soluciones</span><small>SRL · TECNOLOGÍA QUE CONECTA</small></span>
  </a>;
}