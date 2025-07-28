import { LinkBoton } from "../components/moleculas/LinkBoton"; // Ajusta la ruta a tu componente

export function NotFoundPage() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-64px)]  bg-background-secondary-light dark:bg-background-secondary-dark text-center p-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-8xl lg:text-9xl font-bold text-primary dark:text-dark-primary">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-dark-text-primary mt-4">
          Página No Encontrada
        </h2>

        <p className="max-w-md mt-2">
          Parece que te has perdido en el espacio digital. La página que buscas
          no existe o fue movida a otra galaxia.
        </p>

        <div className="mt-6">
          <LinkBoton href="/" variant="primary">
            Volver al inicio
          </LinkBoton>
        </div>
      </div>
    </section>
  );
}
