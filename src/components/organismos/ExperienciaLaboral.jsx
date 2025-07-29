import { TitulosSecciones } from "../atomos/TitulosSecciones";
import { experienciasLaboralesData } from "../../data/experienciasLaboralesData";
import { CardExperienciaLaboral } from "../moleculas/CardExperienciaLaboral.jsx";
import { AnimateOnScroll } from "../atomos/AnimateOnScroll.jsx";
import { Section } from "../../layout/Section.jsx";

export function ExperienciaLaboral() {
  return (
    <Section
      id="experiencia"
      className=" bg-background-primary-light dark:bg-background-primary-dark"
    >
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
    </Section>
  );
}
