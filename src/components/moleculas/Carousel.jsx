import { useState } from "react";
// Importa los componentes de Swiper para React
import { Swiper, SwiperSlide } from "swiper/react";
// Importa los módulos necesarios de Swiper (Navegación, Paginación, etc.)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Importa los estilos base de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel({ imagenes, className = "" }) {
  // 2. Estado para manejar el lightbox (abierto/cerrado y qué imagen mostrar)
  const [index, setIndex] = useState(-1);

  // Prepara las imágenes para el formato que necesita el lightbox
  const slides = imagenes.map((img) => ({
    src: img.imagenUrl,
    title: img.imageCaption,
  }));

  return (
    <>
      <Swiper
        // Instala los módulos que vamos a usar
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30} // Espacio entre slides
        slidesPerView={1} // Cuántos slides se ven a la vez
        navigation // Activa las flechas de navegación
        pagination={{ clickable: true }} // Activa los "puntitos" y los hace clickeables
        loop={true} // Para que el carrusel sea infinito
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className={"w-full h-full rounded-lg " + className}
      >
        {/* Hacemos el map igual que antes */}
        {imagenes.map((imagen, index) => (
          <SwiperSlide
            key={index}
            onClick={() => setIndex(index)}
            className="cursor-pointer"
          >
            <div className="h-full w-full relative">
              <img
                src={imagen.imagenUrl}
                alt={imagen.imageCaption}
                className="w-full h-full object-cover"
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="p-4 pb-8 lg:pb-10 text-center text-sm text-text-secondary dark:text-dark-text-secondary bg-background-secondary dark:bg-dark-background-secondary">
                {imagen.imageCaption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
