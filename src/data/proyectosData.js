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
import interfazProfesorPaseLista from "../assets/images/proyectoSinutAcyD/interfazProfesorPaseLista.webp";
import interfazProfesorGrupos from "../assets/images/proyectoSinutAcyD/interfazProfesorGrupos.webp";
import interfazProfesorHistorialPaseLista from "../assets/images/proyectoSinutAcyD/interfazProfesorHistorialPaseLista.webp";

import k9Img from "../assets/images/proyectoK-9Dispenser.webp";

export const proyectosData = [
  {
    id: 1,
    slug: "sinutacyd",
    titulo: "Sinut ACyD",
    descripcion:
      "Sinut ACyD es una plataforma web que centraliza y simplifica la gestión de actividades culturales y deportivas para toda una comunidad universitaria. Sinut ACyD optimiza la inscripción, seguimiento y registro de eventos para estudiantes, profesores y administrativos.",
    imageUrl: sinutImg,
    imageCaption: "Inicio de sesión de Sinut ACyD",
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
    buttons: {
      liveLink: "http://201.116.195.203/",
      detailsLink: "/proyectos/sinutacyd",
    },
    detalle: {
      desafio: [
        "El proceso para gestionar las actividades extracurriculares en la universidad era completamente manual, basado en largos y repetitivos formularios de Google. Esto no solo consumía una cantidad enorme de tiempo para los administradores, que debían filtrar información duplicada a mano, sino que también generaba una mala experiencia para los alumnos. Además, no existía una plataforma para gestionar a los profesores de estas actividades, quienes estaban desconectados del sistema administrativo principal. Aunque el problema era evidente para los usuarios, fue una de nuestras profesoras quien, con su visión interna, identificó la oportunidad de crear una solución tecnológica real.",
      ],
      solucion: [
        {
          type: "p",
          content:
            "El proyecto nació de una idea de una profesora, quien la compartió con un compañero. Me sumé al equipo poco después y, con el apoyo de mis compañeros, tomé el rol de líder del proyecto para darle estructura y dirección a nuestra iniciativa. Mis responsabilidades clave fueron: ",
        },
        {
          type: "li",
          content:
            "Negociación y Liderazgo: Lideré las conversaciones iniciales para presentar la visión del proyecto. Negociamos con éxito el apoyo de la universidad, consiguiendo una beca completa y un apoyo de alimentos para todo el equipo como reconocimiento al valor de nuestra propuesta.",
        },
        {
          type: "li",
          content:
            "Gestión de Proyecto: Para asegurar que los objetivos estuvieran claros y evitar cambios constantes, implementé el uso de una carta de inicio de proyecto que todos los involucrados firmaron. Gestionamos el desarrollo con Scrum y Jira para entregar avances consistentes.",
        },
        {
          type: "li",
          content:
            "Visión Técnica Estratégica: Con el respaldo de la jefa del departamento de tecnología, tomamos la decisión estratégica de construir nuestra plataforma con Python y Django. Esto aseguraba que, en el futuro, nuestro sistema pudiera integrarse de manera sencilla al nuevo ecosistema tecnológico que la universidad planeaba migrar.",
        },
        {
          type: "li",
          content:
            "Desarrollo Full-Stack: Además de la gestión, estuve a cargo del diseño y la construcción de funcionalidades clave, desde la base de datos en MySQL hasta la interfaz de usuario con JavaScript y Bootstrap.",
        },
      ],
      imagenesGaleria: [
        {
          imagenUrl: sinutImg,
          imageCaption: "Interfaz de Login del sistema SINUTACyD.",
        },
        {
          imagenUrl: interfazAlumnosActividad,
          imageCaption:
            "Alumnos: Interfaz de selección de su actividad extracurricular.",
        },
        {
          imagenUrl: interfazAlumnosSelectivos,
          imageCaption:
            "Alumnos: Interfaz de selección de actividades para pertenecer a un selectivo académico.",
        },
        {
          imagenUrl: interfazAlumnosPreregistro,
          imageCaption:
            "Alumnos: Interfaz de pre-registro para selectivos académicos.",
        },
        {
          imagenUrl: interfazAdminActividades,
          imageCaption:
            "Admin: Interfaz de actividades extracurriculares registradas en el sistema.",
        },
        {
          imagenUrl: interfazAdminRegistroActividades,
          imageCaption:
            "Admin: Interfaz de registro de actividades extracurriculares por parte del administrador del sistema.",
        },
        {
          imagenUrl: interfazAdminHIstorialPasesLista,
          imageCaption:
            "Admin: Interfaz de historial de pases de lista para los grupos de todos los profesores.",
        },
        {
          imagenUrl: interfazAdminHorarios,
          imageCaption:
            "Admin: Interfaz de gestión de horarios a los que las diversas carreras tienen actividad.",
        },
        {
          imagenUrl: interfazAdminInicio,
          imageCaption:
            "Admin: Interfaz de inicio del administrador del sistema.",
        },
        {
          imagenUrl: interfazAdminListas,
          imageCaption:
            "Admin: Interfaz de gestión de listas de alumnos inscritos en cierta actividad.",
        },
        {
          imagenUrl: interfazAdminGrupos,
          imageCaption:
            "Admin: Interfaz de gestión de grupos creados para cada profesor.",
        },
        {
          imagenUrl: interfazProfesorPaseLista,
          imageCaption:
            "Profesor: Interfaz de pase de lista a los alumnos inscritos en su actividad.",
        },
        {
          imagenUrl: interfazProfesorGrupos,
          imageCaption:
            "Profesor: Interfaz de grupos de alumnos inscritos en actividades correspondientes al profesor.",
        },
        {
          imagenUrl: interfazProfesorHistorialPaseLista,
          imageCaption:
            "Profesor: Interfaz de historial de pases de lista realizados o no por el profesor.",
        },
      ],
      procesoYMetodologia: [
        {
          type: "p",
          content:
            "Para garantizar una gestión de proyecto flexible, el desarrollo se gestionó utilizando la metodología ágil SCRUM, organizando el trabajo en fases claras desde la planificación hasta la ejecución.",
        },
        {
          type: "li",
          content:
            "Preparación y Planificación $ En la fase inicial, se definió y priorizó el Product Backlog. Utilizamos Jira para la gestión de tareas del sprint y Confluence para la documentación centralizada. El control de versiones se manejó con Git y GitHub.",
        },
        {
          type: "li",
          content:
            "Diseño y Prototipado $ En el primer sprint, se centró en el diseño de la experiencia de usuario. Se crearon los mockups de toda la aplicación en Figma, aplicando los principios de Atomic Design para asegurar un sistema de componentes coherente y escalable.",
        },
        {
          type: "li",
          content:
            "Desarrollo en Sprints $ Durante los sprints de desarrollo, el equipo se enfocó en construir las funcionalidades clave del sistema: un sistema de login para cuatro tipos de usuarios, un módulo CRUD completo para la gestión de actividades y la integración con la base de datos MySQL utilizando Django.",
        },
        {
          type: "li",
          content:
            "Pruebas y Calidad $ Se realizaron pruebas dinámicas y de integración continuas al final de cada ciclo para asegurar que las funcionalidades cumplieran con los requisitos, permitiendo identificar y corregir errores en tiempo real.",
        },
      ],
      confidencialidad:
        'Debido a acuerdos de confidencialidad, la información y las imágenes aquí presentadas son una vista general. El enlace "Ver en Vivo" dirige a la pantalla de login, ya que no es posible compartir credenciales.',
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
    buttons: {
      liveLink: "https://k9dispenser.infy.uk/",
      codeLink: "https://github.com/joseluislaradev/K-9-dispenser",
    },
  },
];
