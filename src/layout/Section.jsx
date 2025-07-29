export function Section({ id, children, className = "" }) {
  const baseClasses =
    "w-full min-h-screen p-4 md:p-16 lg:p-24 py-16 md:py-26 lg:py-34";

  const combinedClassName = `${baseClasses} ${className}`;

  return (
    <section id={id} className={combinedClassName}>
      <div className="max-w-6xl w-full mx-auto">{children}</div>
    </section>
  );
}
