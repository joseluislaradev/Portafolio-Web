import { LinkBoton } from "./LinkBoton";

export function PiePagina() {
  return (
    <footer className="w-full bg-background-secondary-light dark:bg-background-secondary-dark p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 md:flex-row justify-between">
        <p className="text-center text-sm md:text-base lg:text-lg text-text-primary-light dark:text-text-primary-dark">
          © {new Date().getFullYear()} José Luis Lara.
        </p>

        <LinkBoton
          href="https://github.com/joseluislaradev/Portafolio-Web"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghostSecondary"
          className="!text-sm md:!text-base lg:!text-lg !font-normal"
        >
          {" "}
          Diseñado con Figma. Desarrollado con React y Tailwind CSS
        </LinkBoton>
        <div
          className="text-center text-xs md:text-sm lg:text-base text-text-secondary
            -light dark:text-text-secondary-dark"
        >
          <div className="flex gap-4 justify-center">
            <div>
              <LinkBoton
                href="https://www.linkedin.com/in/joseluislaradev/"
                variant="circle"
                iconName="linkedin"
                className="!text-xl md:!text-2xl lg:!text-3xl"
              />
            </div>
            <div>
              <LinkBoton
                href="https://github.com/joseluislaradev"
                variant="circle"
                iconName="github"
                className="!text-xl md:!text-2xl lg:!text-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
