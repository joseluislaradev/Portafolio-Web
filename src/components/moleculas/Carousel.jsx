import { useState, useEffect } from "react";
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

export function Carousel({ imagenes }) {
  // 2. Estado para manejar el lightbox (abierto/cerrado y qué imagen mostrar)
  const [index, setIndex] = useState(-1);

  //Tenemos que estar del lado del cliente asi eviatmos qeu vite lo ejecute en el servidor
  const [isClient, setIsClient] = useState(false);

  // Este useEffect se ejecuta solo en el navegador, después del primer renderizado
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Si no estamos en el cliente, no renderizamos nada (o un esqueleto de carga)
  if (!isClient) {
    return null; // O <div className="w-full h-full bg-gray-200 animate-pulse"></div>
  }

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
        className="w-full h-full rounded-lg"
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
