import { LinkBoton } from "../moleculas/LinkBoton";
import { CardInformacionPersonal } from "../moleculas/CardsInformacionPersonal";
import { CopiaPortapapeles } from "../moleculas/CopiaPortapapeles.jsx";

export function Contacto() {
  return (
    <section
      id="contacto"
      className="w-full min-h-[85vh] p-4 bg-background-primary-light dark:bg-background-primary-dark py-8 md:py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto ">
        <div className="mt-20 md:mt-24 flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-shadow-lg/60 text-shadow-[var(--text-shadow-light)] dark:text-shadow-[var(--text-shadow-dark)]">
            ¡ATERRICEMOS TU PROXIMO PROYECTO!
          </h2>
          <p className="text-center text-lg md:text-xl lg:text-2xl ">
            Si tienes una idea en mente o un desafio por resolver me encantaría
            ser quien lo programe. Hablemos.
          </p>
          <div>
            <LinkBoton
              href="mailto:hola@joseluislara.dev"
              variant="primary"
              iconName="forward-email"
              className="!text-xl md:!text-2xl lg:!text-3xl"
            >
              Enviame un correo
            </LinkBoton>
            <CopiaPortapapeles
              texto="hola@joseluislara.dev"
              mensajeExito="Espero saber de ti pronto."
              variant="ghost"
              className="group-hover:text-accent-secondary-light  dark:group-hover:text-accent-secondary-dark"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <CardInformacionPersonal
              iconName="phone"
              titulo="Teléfono"
              subtitulo="+52 456 198 5911"
            />
            <CardInformacionPersonal
              iconName="location"
              titulo="Ubicación"
              subtitulo="Guanajuato, México 🇲🇽"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
