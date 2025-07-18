export function Enlace({ href, children }) {
  return (
    <>
      <li>
        <a
          href={href}
          className="text-text-primary-light dark:text-text-primary-dark hover:text-accent-secondary-light  dark:hover:text-accent-secondary-dark transition-colors duration-200"
        >
          {children}
        </a>
      </li>
    </>
  );
}
