import { Boton } from "../atomos/Boton.jsx";
import { useState } from "react";
import toast from "react-hot-toast"; // 👈 1. Importa la función toast

export function CopiaPortapapeles({
  texto,
  variant = "primary",
  className = "",
  mensajeExito = "Texto copiado al portapapeles",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copied) return; // Evita múltiples copias si ya se ha copiado
    navigator.clipboard.writeText(texto);
    toast.success(mensajeExito, {
      duration: 4000, // Duración en milisegundos
      style: {
        background: "var(--color-accent-primary-light)",
        color: "var(--color-text-button-light)",
      },
      icon: "📬", // Puedes usar emojis como íconos
    });

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <div
        className="flex items-center justify-between  bg-background-secondary-light dark:bg-background-secondary-dark p-1 mt-2 rounded-2xl group hover:outline outline-accent-secondary-light dark:outline-accent-secondary-dark transition-all duration-200"
        onClick={handleCopy}
      >
        <p className="text-sm md:text-base lg:text-lg group-hover:text-accent-secondary-light  dark:group-hover:text-accent-secondary-dark transition-colors duration-200 px-4">
          {texto}
        </p>
        <Boton variant={variant} className={className}>
          COPIAR
        </Boton>
      </div>
    </>
  );
}
