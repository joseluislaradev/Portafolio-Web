import { Boton } from "../atomos/Boton.jsx";
// Al principio de tu archivo (ej. Header.jsx)
import sprite from "../../assets/iconos/sprite.svg";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-4 justify-center h-screen bg-background-primary-light dark:bg-background-primary-dark text-center p-6"
    >
      <div>
        <img src="/src/assets/images/fotoPerfil1.png" alt="Foto de perfil" />
      </div>
      <h1 className="text-4xl font-bold  mb-4">José Luis Lara</h1>
      <p>Ingeniero de Software</p>
      <p>Desarrollador Full Stack Junior</p>

      <div>
        <Boton variant="primary">
          <a
            class="bg-sky-100 p-3 size-12 sm:size-14 flex items-center justify-center rounded-full"
            href="https://www.linkedin.com/in/joseluislaradev"
            aria-label="LinkedIn"
            title="Ir a LinkedIn"
          >
            <svg width="28" height="28" fill="white">
              <use xlink:href="${sprite}#linkedin"></use>
            </svg>
          </a>
          Linkedin
        </Boton>
      </div>
    </section>
  );
}
