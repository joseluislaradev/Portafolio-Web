import { TitulosSecciones } from "../atomos/TitulosSecciones.jsx";
import { StackTecnologias } from "../moleculas/StackTecnologias.jsx";
import { Boton } from "../atomos/Boton.jsx";
import { useState } from "react";
import { educacionData } from "../../data/educacionData";
import { CardEducacion } from "../moleculas/CardEducacion.jsx";


export function SobreMi() {
  const [menuSeleccionado, setMenuSeleccionado] = useState("tecnologias");

  const handleMenuChange = (menu) => {
    setMenuSeleccionado(menu);
  };

  return (
    <section
      id="sobreMi"
      className="w-full min-h-screen p-4 bg-background-secondary-light dark:bg-background-secondary-dark py-8 md:py-12 lg:py-16"
    >
      <div className="max-w-6xl mx-auto ">
        <TitulosSecciones titulo="Sobre Mí" />
        <div className="mt-14">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 w-full">
            <div className="w-full lg:w-1/3">
              <p className="text-lg text-text-primary dark:text-text-primary-dark">
                Soy un desarrollador web con experiencia en la creación de
                aplicaciones y sitios web utilizando tecnologías modernas. Me
                apasiona aprender y mejorar mis habilidades constantemente. Me
                especializo en el desarrollo frontend, pero también tengo
                conocimientos en backend. Me gusta trabajar en equipo y creo que
                la colaboración es clave para el éxito de cualquier proyecto.
                Estoy siempre abierto a nuevos desafíos y oportunidades para
                crecer profesionalmente. Me considero una persona proactiva, con
                una mentalidad de resolución de problemas y un enfoque en la
                calidad del código. Me encanta compartir mis conocimientos y
                aprender de los demás. Si estás interesado en colaborar o
                simplemente quieres charlar, no dudes en contactarme.
              </p>
            </div>
            <div className="w-full h-full lg:w-2/3">
              <div className="flex gap-4 justify-center mb-10 lg:mb-16">
                <Boton
                  onClick={() => handleMenuChange("tecnologias")}
                  variant="ghostSecondary"
                  className={
                    menuSeleccionado === "tecnologias"
                      ? "!text-accent-primary-light dark:!text-accent-primary-dark border-l-1 border-r-1   border-accent-primary-light dark:border-accent-primary-dark hover:!text-accent-primary-light dark:hover:!text-accent-primary-dark"
                      : ""
                  }
                >
                  Tecnologías
                </Boton>
                <Boton
                  onClick={() => handleMenuChange("educacion")}
                  variant="ghostSecondary"
                  className={
                    menuSeleccionado === "educacion"
                      ? "!text-accent-primary-light dark:!text-accent-primary-dark border-l-1 border-r-1  border-accent-primary-light dark:border-accent-primary-dark hover:!text-accent-primary-light dark:hover:!text-accent-primary-dark"
                      : ""
                  }
                >
                  Educación
                </Boton>
              </div>

              {menuSeleccionado === "tecnologias" && (
                <>
                  <StackTecnologias />
                </>
              )}
              {menuSeleccionado === "educacion" && (
                <div className="lg:ml-20">
                  {educacionData.map((educacion, index) => (
                    <CardEducacion key={index} titulo={educacion.titulo} descripcion={educacion.descripcion} institucion={educacion.empresa} fecha={educacion.fecha} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
