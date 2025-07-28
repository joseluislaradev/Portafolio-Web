import { LinkBoton } from "../components/moleculas/LinkBoton.jsx"; // Ajusta la ruta a tus componentes
import { useSwitchTema } from "../hooks/useSwitchTema.jsx";

export function AppPaginaConstruccion() {
  const { isDarkMode, handleThemeToggle } = useSwitchTema();

  return (
    <main className="w-full min-h-screen bg-white dark:bg-gray-700 flex items-center justify-center sm:p-6 md:p-8">
      <div className="absolute top-5 right-5">
        <button
          type="button"
          onClick={() => handleThemeToggle(!isDarkMode)}
          className="rounded-md text-accent-primary-light dark:text-accent-primary-dark hover:scale-105 transition-transform duration-200"
          aria-label="Cambiar tema"
        >
          {isDarkMode ? (
            <Icono
              nombre="dark-mode"
              className="hover:text-accent-secondary-dark"
            />
          ) : (
            <Icono
              nombre="light-mode"
              className="hover:text-accent-secondary-light"
            />
          )}
        </button>
      </div>

      <div className="relative mt-14 max-w-2xl w-full text-center bg-gray-200 dark:bg-background-primary-dark p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold ">José Luis Lara</h1>

        <p className="text-lg md:text-xl mt-2">Ingeniero de Software</p>

        <p className="mt-6 text-base md:text-lg">
          ¡Hola! Estás viendo mi portafolio digital en plena construcción. Este
          sitio es un proyecto vivo y un reflejo transparente de mi proceso,
          donde estoy traduciendo activamente mi diseño de Figma a código limpio
          con React y Tailwind CSS.
        </p>

        <div className="w-1/4 h-px mx-auto my-8"></div>

        {/* Sección de Diseño */}
        <div>
          <h2 className="text-2xl font-bold  mb-3">Fase de Diseño</h2>
          <p>
            La experiencia de usuario (UI/UX) fue diseñada en Figma, enfocada en
            una interfaz moderna y responsiva.
          </p>
          <div className="mt-4 flex justify-center">
            <LinkBoton
              href="https://www.figma.com/proto/sljaSp7lyFJxOxLnXAEh2Y/Portafolio-web?node-id=68-217&t=S8aGzGQzGAGGlCxx-1"
              variant="primary"
              iconName="figma"
              className="!text-sm !md:text-base !lg:text-xl"
            >
              Ver Prototipo en Figma
            </LinkBoton>
          </div>
        </div>

        <div className="w-1/4 h-px my-8"></div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            Fase de Desarrollo (En Progreso)
          </h2>
          <p>
            Puedes seguir la construcción de este sitio en tiempo real en su
            repositorio público.
          </p>
          <div className="mt-4 flex justify-center">
            <LinkBoton
              href="https://github.com/joseluislaradev/Portafolio-Web"
              variant="primary"
              iconName="github"
              className="!text-sm !md:text-base !lg:text-xl"
            >
              Seguir en GitHub
            </LinkBoton>
          </div>
        </div>

        <div className="w-1/4 h-px mx-auto my-8"></div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            Mientras tanto, conectemos.
          </h2>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <LinkBoton
              href="https://www.linkedin.com/in/joseluislaradev"
              variant="primary"
              iconName="linkedin"
            >
              LinkedIn
            </LinkBoton>
            <LinkBoton
              href="mailto:hola@joseluislara.dev"
              variant="primary"
              iconName="forward-email"
            >
              Envíame un correo
            </LinkBoton>
          </div>
        </div>
      </div>
    </main>
  );
}
