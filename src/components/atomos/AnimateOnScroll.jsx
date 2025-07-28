import { useInView } from "react-intersection-observer";

const animationVariants = {
  "fade-in-up": {
    initial: "opacity-0 translate-y-8",
    final: "opacity-100 translate-y-0",
  },
  "fade-in-left": {
    initial: "opacity-0 -translate-x-8",
    final: "opacity-100 translate-x-0",
  },
  "fade-in-right": {
    initial: "opacity-0 translate-x-8",
    final: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-75",
    final: "opacity-100 scale-100",
  },
  "fade-in": {
    initial: "opacity-0",
    final: "opacity-100",
  },
};

export function AnimateOnScroll({
  children,
  className = "",
  threshold = 0.2,
  variant = "fade-in-up",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo ocurre una vez cuando el elemento entra
    threshold: threshold, // Se activa cuando el 20% del elemento es visible
  });

  const selectedVariant =
    animationVariants[variant] || animationVariants["fade-in-up"];

  return (
    <div
      ref={ref}
      // Clases de transición de Tailwind
      className={`
        transition-all duration-700 ease-in-out
        ${inView ? selectedVariant.final : selectedVariant.initial}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
