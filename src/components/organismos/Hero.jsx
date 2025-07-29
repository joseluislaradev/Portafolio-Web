import { LinkBoton } from "../moleculas/LinkBoton.jsx";
import { BotonDescarga } from "../moleculas/BotonDescarga.jsx";
import { Section } from "../../layout/Section.jsx";

export function Hero() {
  return (
    <Section
      id="hero"
      className="flex flex-col items-center justify-center !min-h-[calc(100vh-4.5rem)] bg-gradient-to-b from-background-primary-light via-50% to-background-secondary-light dark:from-background-primary-dark  dark:via-50%  dark:to-background-secondary-dark"
    >
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-12 h-full w-full">
        <figure>
          <img
            src="/fotoPerfil.webp"
            alt="Foto de perfil de José Luis Lara"
            className="rounded-full w-50 h-50 md:w-60 md:h-60 lg:w-70 lg:h-70 shadow-lg animate-fade-in"
          />
        </figure>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl animate-fade-in">
          José Luis Lara
        </h1>
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <p className="text-lg md:text-3xl font-semibold animate-fade-in">
            Ingeniero de Software
          </p>
          <p className="text-md md:text-2xl animate-fade-in">
            Desarrollador Full Stack Junior
          </p>
        </div>

        <nav>
          <ul className="flex gap-4 md:gap-6 lg:gap-8">
            <li className="animate-slide-up-fade">
              <LinkBoton
                href="https://www.linkedin.com/in/joseluislaradev"
                variant="outline"
                iconName="linkedin"
                className="text-lg md:text-xl lg:text-2xl"
              >
                Linkedin
              </LinkBoton>
            </li>
            <li className="animate-slide-up-fade">
              <BotonDescarga
                href="/CV_José_Luis_Lara.pdf"
                variant="primary"
                iconName="download"
                className="text-lg md:text-xl lg:text-2xl"
                download
              >
                Descargar CV
              </BotonDescarga>
            </li>
          </ul>
        </nav>
      </div>
    </Section>
  );
}
