import { Link } from "react-router-dom";
import {
  buttonBaseStyles,
  buttonVariantStyles,
} from "../../constantes/styles.js";
import clsx from "clsx";
import { Icono } from "../atomos/Icono.jsx";

export function LinkBoton({
  href,
  children,
  variant = "primary",
  className = "",
  iconName,
  sectionRefs,
  ...rest
}) {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && (href.startsWith("#") || href.startsWith("/#"));

  const combinedClassName = clsx(
    buttonBaseStyles,
    buttonVariantStyles[variant],
    className
  );

  if (isAnchorLink) {
    const handleAnchorClick = (event) => {
      event.preventDefault();
      const targetId = href.substring(1);

      const targetElement = sectionRefs[targetId]?.current;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={handleAnchorClick}
        {...rest}
      >
        {iconName && (
          <Icono nombre={iconName} tamaño={24} color="currentColor" />
        )}
        {children}
      </a>
    );
  }

  if (isInternalLink) {
    return (
      <Link to={href} className={combinedClassName} {...rest}>
        {iconName && (
          <Icono nombre={iconName} tamaño={24} color="currentColor" />
        )}
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={combinedClassName}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {iconName && <Icono nombre={iconName} tamaño={24} color="currentColor" />}
      {children}
    </a>
  );
}
