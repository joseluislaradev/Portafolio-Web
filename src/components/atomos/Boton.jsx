import { buttonBaseStyles, buttonVariantStyles } from "../../constantes/styles";

export function Boton({
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const clasesCombinadas = `${buttonBaseStyles} ${buttonVariantStyles[variant]} ${className}`;

  return (
    <button className={clasesCombinadas} {...rest}>
      {children}
    </button>
  );
}
