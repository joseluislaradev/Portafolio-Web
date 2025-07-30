import { LinkBoton } from "./LinkBoton.jsx";

export function ContentRenderer({ content = [] }) {
  const elements = [];
  let listItems = [];

  // Función para renderizar la lista de viñetas cuando termina o cambia el tipo
  const renderList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="list-disc space-y-3 my-4 pl-2 md:pl-4"
        >
          {listItems}
        </ul>
      );
      listItems = []; // Reseteamos la lista para el siguiente bloque
    }
  };

  content.forEach((item, index) => {
    if (item.type === "p") {
      // Si encontramos un párrafo, primero renderizamos cualquier lista que estuviera abierta
      renderList();
      elements.push(
        <p key={index} className="text-base md:text-lg">
          {item.content}
        </p>
      );
    } else if (item.type === "li") {
      // Si es una viñeta, la procesamos y la añadimos a nuestra lista temporal
      let listItemContent;

      if (item.content.includes("$")) {
        const [title, description] = item.content.split("$");
        listItemContent = (
          // Usamos un <div> como contenedor principal para el contenido del <li>
          <div>
            <strong className="font-semibold">{title.trim()}</strong>
            <p>{description.trim()}</p>
          </div>
        );
      } else {
        listItemContent = item.content;
      }

      listItems.push(
        <li key={index} className="text-base md:text-lg my-6 md:my12">
          {listItemContent}
        </li>
      );
    } else if (item.type === "button") {
      // Si encontramos un botón, primero renderizamos cualquier lista abierta
      renderList();
      elements.push(
        <div key={index} className="my-4">
          {" "}
          <LinkBoton
            href={item.href}
            variant={item.variant || "secondary"}
            iconName={item.iconName}
            className="my-8 mx-auto max-w-[300px] w-full"
          >
            {item.label}
          </LinkBoton>
        </div>
      );
    } else if (item.type === "caption") {
      // Si es un caption, lo renderizamos directamente
      elements.push(
        <p
          key={index}
          className="text-sm md:text-base text-text-subtitle-light dark:text-text-subtitle-dark text-center my-8"
        >
          {item.content}
        </p>
      );
    }
  });

  // Aseguramos que si el contenido termina con una lista, esta también se renderice
  renderList();

  return <div className="space-y-4">{elements}</div>;
}
