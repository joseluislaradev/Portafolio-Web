import { TitulosSecciones } from "../atomos/TitulosSecciones.jsx";
import { Tabs } from "../moleculas/Tabs.jsx";
import { educacionData } from "../../data/educacionData";
import { CardEducacion } from "../moleculas/CardEducacion.jsx";
import { StackTecnologias } from "../moleculas/StackTecnologias.jsx";
import { AnimateOnScroll } from "../atomos/AnimateOnScroll.jsx";
import { Section } from "../../layout/Section.jsx";
import { FotoPerfil } from "../atomos/FotoPerfil.jsx";

// Creamos un pequeño componente aquí mismo para la lista de educación
function EducacionList() {
  return (
    <div className="lg:ml-20 flex flex-col">
      {educacionData.map((educacion, index) => (
        <CardEducacion key={index} {...educacion} />
      ))}
    </div>
  );
}

export function SobreMi() {
  const tabsContent = {
    Tecnologías: <StackTecnologias />,
    Educación: <EducacionList />,
  };
  return (
    <Section
      id="sobreMi"
      className="bg-background-secondary-light dark:bg-background-secondary-dark"
    >
      <AnimateOnScroll>
        <TitulosSecciones titulo="Sobre Mí" />
      </AnimateOnScroll>
      <div className="mt-14">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 w-full">
          <div className="w-full lg:w-3/6">
            <AnimateOnScroll variant="fade-in-left">
              <div className="w-full  flex items-center justify-center mb-4">
                <FotoPerfil className="shadow-lg [shape-outside:circle(50%)]" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-in-left">
              <div className="flex flex-col gap-4 ">
                <p>
                  Mi curiosidad por la programación empezó mucho antes de la
                  universidad, con un curso de C++ que tomé por mi cuenta
                  simplemente porque quería aprender a crear. Esa iniciativa me
                  llevó a mi primer gran proyecto en la universidad: construir
                  un dispensador de comida para perros, donde aprendí a llevar
                  una solución completa de la idea al prototipo usando PHP.
                </p>
                <p>
                  Fue ahí donde descubrí que una buena lógica de backend
                  necesitaba una gran interfaz. Me sumergí en el frontend,
                  aprendiendo CSS a fondo, hasta que una prueba técnica para mis
                  prácticas me lanzó de lleno al mundo de C# y .NET. Aunque no
                  sabía nada en ese momento, investigué, saqué la prueba y
                  confirmé mi pasión por la robustez del backend.
                </p>
                <p>
                  Hoy, combino esa base sólida con mi interés por las
                  experiencias de usuario modernas, por lo que decidí dar el
                  siguiente paso en mi carrera aprendiendo React. Busco un lugar
                  donde pueda integrar mi viaje full-stack, mi capacidad para
                  aprender bajo presión y mi pasión por construir.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="w-full">
            <Tabs tabs={tabsContent} defaultTab="Tecnologías" />
          </div>
        </div>
      </div>
    </Section>
  );
}
