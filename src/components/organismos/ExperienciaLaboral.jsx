import { TitulosSecciones } from "../atomos/TitulosSecciones";
import { experienciasLaboralesData } from "../../data/experienciasLaboralesData";
import { CardExperienciaLaboral } from "../moleculas/CardExperienciaLaboral.jsx";
import { AnimateOnScroll } from "../atomos/AnimateOnScroll.jsx";

export function ExperienciaLaboral() {
  return (
    <section
      id="experiencia"
      className="w-full min-h-screen p-4 bg-background-primary-light dark:bg-background-primary-dark py-8 md:py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto ">
        <AnimateOnScroll>
          <TitulosSecciones titulo="Experiencia Laboral" />
        </AnimateOnScroll>
        <div className="mt-14">
          {experienciasLaboralesData.map(
            ({ titulo, descripcion, empresa, fecha }, index) => (
              <AnimateOnScroll key={index}>
                <CardExperienciaLaboral
                  key={index}
                  titulo={titulo}
                  descripcion={descripcion}
                  empresa={empresa}
                  fecha={fecha}
                />
              </AnimateOnScroll>
            )
          )}
        </div>
      </div>
    </section>
  );
}
