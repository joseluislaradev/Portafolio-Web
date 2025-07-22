import { Boton } from "../atomos/Boton.jsx";
import { LinkBoton } from "../atomos/LinkBoton.jsx";
import sprite from "../../assets/iconos/sprite.svg";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-8 md:gap-12 justify-center min-h-[calc(100vh-4rem)] bg-background-primary-light dark:bg-background-primary-dark text-center p-4"
    >
      <figure>
        <img
          src="/src/assets/images/fotoPerfil.png"
          alt="Foto de perfil"
          className="rounded-full w-50 h-50 md:w-60 md:h-60 lg:w-70 lg:h-70 shadow-lg "
        />
      </figure>
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        José Luis Lara
      </h1>
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <p className="text-lg md:text-3xl">Ingeniero de Software</p>
        <p className="text-lg md:text-3xl">Desarrollador Full Stack Junior</p>
      </div>

      <nav>
        <ul class="flex gap-4 md:gap-6 lg:gap-8">
          <li>
            <LinkBoton
              href="https://www.linkedin.com/in/joseluislaradev"
              variant="primary"
            >
              <svg width="24" height="24" fill="white">
                <use xlinkHref={`${sprite}#linkedin`} />
              </svg>
              Linkedin
            </LinkBoton>
          </li>
          <li>
            <LinkBoton
              href="https://github.com/joseluislaradev"
              variant="primary"
            >
              <svg width="24" height="24" fill="white">
                <use xlinkHref={`${sprite}#github`} />
              </svg>
              Github
            </LinkBoton>
          </li>
        </ul>
      </nav>
    </section>
  );
}
