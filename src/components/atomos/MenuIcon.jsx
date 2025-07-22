export function MenuIcon({ isOpen }) {
  const baseLineClasses =
    "h-0.5 w-6 bg-current transition-all duration-300 ease-in-out";

  return (
    <div className="relative h-6 w-6">
      {/* Línea Superior */}
      <span
        className={`
          ${baseLineClasses}
          absolute top-1 left-0
          ${isOpen ? "rotate-45 translate-y-[9px]" : ""}
        `}
      />
      {/* Línea del Medio */}
      <span
        className={`
          ${baseLineClasses}
          absolute top-1/2 left-0 -translate-y-1/2
          ${isOpen ? "opacity-0" : "opacity-100"}
        `}
      />
      {/* Línea Inferior */}
      <span
        className={`
          ${baseLineClasses}
          absolute bottom-1 left-0
          ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}
        `}
      />
    </div>
  );
}
