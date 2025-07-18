// Objeto que define los estilos específicos para cada variante
const variantStyles = {
  primary:
    "flex items-center justify-center gap-4  bg-accent-primary-light dark:bg-accent-primary-dark hover:bg-hover-primary-light dark:hover:bg-hover-primary-dark text-text-button-light dark:text-text-button-dark",
};

export function Boton({
  children,
  variant = "primary", // 👈 Nueva prop 'variant', con 'primary' como valor por defecto
  className = "", // 👈 Nueva prop 'className' para añadir clases extra si es necesario
  ...rest
}) {
  // Estilos base que TODOS los botones comparten (padding, fuente, bordes, etc.)
  const baseStyles =
    "font-bold py-2 px-4 rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50";

  // Combina los estilos base, los de la variante, y cualquier clase extra que le pases
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClassName} {...rest}>
      {children}
    </button>
  );
}
