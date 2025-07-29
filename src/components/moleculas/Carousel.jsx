// Importa los componentes de Swiper para React
import { Swiper, SwiperSlide } from "swiper/react";

// Importa los módulos necesarios de Swiper (Navegación, Paginación, etc.)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importa los estilos base de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel({ imagenes }) {
  return (
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
        <SwiperSlide key={index}>
          <figure className=" w-full h-full">
            <img
              src={imagen.imagenUrl}
              alt={imagen.imageCaption}
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-2 left-0 w-full bg-black/30 text-white p-4 text-center">
              {imagen.imageCaption}
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
