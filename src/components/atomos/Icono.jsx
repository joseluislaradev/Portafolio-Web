import sprite from "../../assets/iconos/sprite.svg";

export function Icono({
  nombre,
  tamaño = 24,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg width={tamaño} height={tamaño} fill={color} className={className}>
      <use xlinkHref={`${sprite}#${nombre}`} />
    </svg>
  );
}
