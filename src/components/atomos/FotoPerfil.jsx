export function FotoPerfil({ className = "" }) {
  return (
    <figure>
      <img
        src="/fotoPerfil-grande.webp"
        srcSet="
              /fotoPerfil-pequeña.webp 140w,
              /fotoPerfil-mediana.webp 280w,
              /fotoPerfil-grande.webp 560w
            "
        sizes="(max-width: 768px) 160px, 280px"
        alt="Foto de perfil de José Luis Lara"
        className={`rounded-full w-50 h-50 md:w-60 md:h-60 lg:w-70 lg:h-70 shadow-lg animate-fade-in object-cover ${className}`}
      />
    </figure>
  );
}
