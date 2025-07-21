import { Link } from "react-router-dom";
import { buttonBaseStyles, buttonVariantStyles } from "../../constantes/styles";

export function LinkBoton({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const isInternalLink = href && href.startsWith("/");
  const isSeccionPage = href && (href.startsWith("#") || href.startsWith("/#"));

  const combinedClassName = `${buttonBaseStyles} ${buttonVariantStyles[variant]} ${className}`;

  if (isSeccionPage) {
    return (
      <a href={href} className={combinedClassName} {...rest}>
        {children}
      </a>
    );
  }

  if (isInternalLink) {
    return (
      <Link to={href} className={combinedClassName} {...rest}>
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
      {children}
    </a>
  );
}
