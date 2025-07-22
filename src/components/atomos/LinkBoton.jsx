import { Link } from "react-router-dom";
import { buttonBaseStyles, buttonVariantStyles } from "../../constantes/styles";

export function LinkBoton({
  href,
  children,
  variant = "primary",
  className = "",
  sectionRefs,
  ...rest
}) {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && (href.startsWith("#") || href.startsWith("/#"));

  const combinedClassName = `${buttonBaseStyles} ${buttonVariantStyles[variant]} ${className}`;

  if (isAnchorLink) {
    const handleAnchorClick = (event) => {
      event.preventDefault();
      const targetId = href.substring(1); 
      
      const targetElement = sectionRefs[targetId]?.current;
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    return (
      <a href={href} className={combinedClassName} onClick={handleAnchorClick} {...rest}>
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
