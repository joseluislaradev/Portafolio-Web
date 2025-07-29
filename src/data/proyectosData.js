import sinutImg from "../assets/images/proyectoSinutAcyD/proyectoSINUTACyD.webp";
import interfazAdminActividades from "../assets/images/proyectoSinutAcyD/interfazAdminActividades.webp";
import interfazAlumnosActividad from "../assets/images/proyectoSinutAcyD/interfazAlumnosSeleccionActividad.webp";
import interfazAlumnosSelectivos from "../assets/images/proyectoSinutAcyD/interfazAlumnosSeleccionSelectivo.webp";
import interfazAlumnosPreregistro from "../assets/images/proyectoSinutAcyD/interfazAlumnosPreregistrosSeletivos.webp";
import interfazAdminHIstorialPasesLista from "../assets/images/proyectoSinutAcyD/interfazAdminHIstorialPasesLista.webp";
import interfazAdminHorarios from "../assets/images/proyectoSinutAcyD/interfazAdminHorarios.webp";
import interfazAdminInicio from "../assets/images/proyectoSinutAcyD/interfazAdminInicio.webp";
import interfazAdminListas from "../assets/images/proyectoSinutAcyD/interfazAdminListas.webp";
import interfazAdminGrupos from "../assets/images/proyectoSinutAcyD/interfazAdminGrupos.webp";
import interfazAdminRegistroActividades from "../assets/images/proyectoSinutAcyD/interfazAdminRegistroActividades.webp";

import k9Img from "../assets/images/proyectoK-9Dispenser.webp";

export const proyectosData = [
  {
    id: 1,
    slug: "sinutacyd",
    titulo: "Sinut ACyD",
    liveLink: "http://201.116.195.203/",
    descripcion:
      "Sinut ACyD es una plataforma web que centraliza y simplifica la gestión de actividades culturales y deportivas para toda una comunidad universitaria. Sinut ACyD optimiza la inscripción, seguimiento y registro de eventos para estudiantes, profesores y administrativos.",
    imageUrl: sinutImg,
    imageCaption: "Inicio de sesión de Sinut ACyD",
    detailsLink: "/proyectos/sinutacyd",
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
    detalle: {
      desafio: [
        "El objetivo del proyecto era optimizar los tiempos de los administradores y garantizar una gestión eficaz de usuarios (profesores y alumnos) y de las actividades culturales y deportivas.",
        "Anteriormente, procesos similares se realizaban manualmente, lo que generaba dificultades, confusión, pérdida de tiempo y errores para el personal involucrado.",
        "Se necesitaba automatizar y optimizar los procesos, así como centralizar la información para facilitar la administración tanto para la universidad como para los usuarios.",
      ],
      solucion: [
        "Propuse y lideré el desarrollo de un sistema multiplataforma diseñado para centralizar y gestionar de manera eficiente las actividades culturales y deportivas de la universidad.",
        "Como líder del equipo, mi rol fue full-stack. Estuve a cargo del diseño del sistema, la planificación de los sprints, el desarrollo de funcionalidades clave tanto en el frontend como en el backend, y el despliegue final en los servidores de la universidad",
        "El sistema final es una plataforma funcional y eficiente que permite una gestión dinámica de usuarios y actividades, reduciendo significativamente los tiempos de administración.",
      ],
      imagenesGaleria: [
        {
          imagenUrl: sinutImg,
          imageCaption: "Interfaz de Login del sistema SINUTACyD",
        },
        {
          imagenUrl: interfazAdminActividades,
          imageCaption:
            "IInterfaz de actividades extracurriculares registradas en el sistema",
        },
        {
          imagenUrl: interfazAdminRegistroActividades,
          imageCaption:
            "Interfaz de registro de actividades extracurriculares por parte del administrador del sistema",
        },
        {
          imagenUrl: interfazAlumnosActividad,
          imageCaption:
            "Interfaz de selección de actividad extracurricular para alumnos",
        },
        {
          imagenUrl: interfazAlumnosSelectivos,
          imageCaption:
            "Interfaz de selección de actividades para pertenecer a un selectivo académico",
        },
        {
          imagenUrl: interfazAlumnosPreregistro,
          imageCaption: "Interfaz de pre-registro para selectivos académicos",
        },
        {
          imagenUrl: interfazAdminHIstorialPasesLista,
          imageCaption:
            "Interfaz de historial de pases de lista para actividades culturales y deportivas de parte del admin a los profesores",
        },
        {
          imagenUrl: interfazAdminHorarios,
          imageCaption:
            "Interfaz de gestión de horarios de actividades de las diversas carreras",
        },
        {
          imagenUrl: interfazAdminInicio,
          imageCaption: "Interfaz de inicio del administrador del sistema",
        },
        {
          imagenUrl: interfazAdminListas,
          imageCaption:
            "Interfaz de gestión de listas de alumnos inscritos en cierta actividad",
        },
        {
          imagenUrl: interfazAdminGrupos,
          imageCaption:
            "Interfaz de gestión de grupos creados para cada profesor",
        },
      ],
      procesoYMetodologia: {
        titulo: "Proceso y Metodología",
        parrafos: [
          "Para garantizar una gestión de proyecto flexible, el desarrollo se gestionó utilizando la metodología ágil SCRUM, organizando el trabajo en fases claras desde la planificación hasta la ejecución.",
        ],
        subsecciones: [
          {
            titulo: "Preparación y Planificación",
            contenido:
              "En la fase inicial, se definió y priorizó el Product Backlog. Utilizamos Jira para la gestión de tareas del sprint y Confluence para la documentación centralizada. El control de versiones se manejó con Git y GitHub.",
          },
          {
            titulo: "Diseño y Prototipado",
            contenido:
              "El primer sprint se centró en el diseño de la experiencia de usuario. Se crearon los mockups de toda la aplicación en Figma, aplicando los principios de Atomic Design para asegurar un sistema de componentes coherente y escalable.",
          },
          {
            titulo: "Desarrollo en Sprints",
            contenido:
              "Durante los sprints de desarrollo, el equipo se enfocó en construir las funcionalidades clave del sistema: un sistema de login para cuatro tipos de usuarios, un módulo CRUD completo para la gestión de actividades y la integración con la base de datos MySQL utilizando Django.",
          },
          {
            titulo: "Pruebas y Calidad",
            contenido:
              "Se realizaron pruebas dinámicas y de integración continuas al final de cada ciclo para asegurar que las funcionalidades cumplieran con los requisitos, permitiendo identificar y corregir errores en tiempo real.",
          },
        ],
      },
    },
  },
  {
    id: 2,
    titulo: "K-9 Dispenser",
    descripcion:
      "Un proyecto full-stack de 'Internet de las Cosas' (IoT) que fusiona hardware y software para la alimentación automatizada de mascotas. K-9 Dispenser combina un dispositivo físico controlado por ESP8266 con una plataforma web para ofrecer control total de forma remota.",
    imageUrl: k9Img,
    liveLink: "https://k9dispenser.infy.uk/", //
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
