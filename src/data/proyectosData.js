import sinutImg from "../assets/images/proyectoSINUTACyD.webp";
import k9Img from "../assets/images/proyectoK-9Dispenser.webp";

export const proyectosData = [
  {
    id: 1,
    titulo: "Sinut ACyD",
    descripcion:
      "Sinut ACyD es una plataforma web que centraliza y simplifica la gestión de actividades culturales y deportivas para toda una comunidad universitaria. Sinut ACyD optimiza la inscripción, seguimiento y registro de eventos para estudiantes, profesores y administrativos.",
    imageUrl: sinutImg,
    detailsLink: "/proyectos/sinutacyd", // 👈 Solo este proyecto tiene enlace de detalles
    tecnologias: [
      "Django",
      "MySQL",
      "Bootstrap",
      "HTML",
      "CSS",
      "Python",
      "Git",
      "JavaScript",
    ],
  },
  {
    id: 2,
    titulo: "K-9 Dispenser",
    descripcion:
      "Un proyecto full-stack de 'Internet de las Cosas' (IoT) que fusiona hardware y software para la alimentación automatizada de mascotas. K-9 Dispenser combina un dispositivo físico controlado por ESP8266 con una plataforma web para ofrecer control total de forma remota.",
    imageUrl: k9Img,
    liveLink: "https://k9dispenser.infy.uk/", // 👈 Este tiene demo y código
    codeLink: "https://github.com/joseluislaradev/K-9-dispenser",
    tecnologias: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "HTML",
      "CSS",
      "C++",
      "Git",
      "JavaScript",
    ],
  },
];
