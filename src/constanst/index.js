import { type } from "@testing-library/user-event/dist/type";

const listProjectsMain = [
    {
        id: 1,
        title: `"Sin Fronteras" es una plataforma móvil diseñada para conectar a programadores con empresas en busca de talentos para su primer empleo. Inspirados por la necesidad de impulsar la carrera de jóvenes talentos y la demanda de empresas por encontrar programadores capacitados, hemos creado una experiencia digital que permitirá explorar nuevas formas de encontrar trabajo en el ámbito tecnológico.
        Con la aplicación de "Sin Fronteras", podrás crear tu perfil profesional, detallando tu experiencia, habilidades y aspiraciones laborales, así como el proporcionamiento de una red social de programadores a trávez de diferentes canales y comunidades. Además, podrás buscar empleos en empresas de cualquier parte del mundo que buscan programadores con tus habilidades y experiencia.`,
        description: "asdasdasd",
        url: "https://www.youtube.com/watch?v=eNSC3B4o59I",
        type: "mobile",
        technologies: ["JS", "React Native", "React Navigation", "Redux", "NodeJS","MongoDB", "Express"],
        github: "https://github.com/No-Country/s6-06-t-react-native",
    },
    {
        id: 2,
        title: "SUTI",
        description: "",
        url: "https://www.youtube.com/watch?v=1logrcnG5UA",
        type: "mobile",
        technologies: ["JS", "React Native", "React Navigation","Redux", "Firebase"],
        github: "https://github.com/No-Country/C8-75-React-Native",
    },
    {
        id: 3,
        title: "HS MOVIES",
        description: "Sitio web en donde puedes consultar diferentes tipos de películas a trávez de una API, además puedes guardar las peliculas favoritas y poder ver los detalles de cada una",
        url: false,
        urlImg: "https://res.cloudinary.com/dabi5nnzx/image/upload/v1678718250/HS-MOVIES/Captura_de_pantalla_447_mkpc3d.png",
        type: "front-end",
        github: "https://github.com/Carlos-Huane/HS-MOVIES",
    },
]
const listProjectsMore = [
    {
        id: 1,
        title: "Landing Page Freelancer",
        description: "Sitio web personal diseñado para mostrar la experiencia y habilidades como freelancer. Está creado usando HTML y CSS, lo que permite un diseño personalizado y una navegación fácil para los visitantes. La página de inicio presenta una breve descripción sobre ti y tus servicios, y ofrece enlaces a tus redes sociales y portafolio en línea.",
        type: "front-end",
        technologies: ["HTML", "CSS"],
        github: "https://github.com/Carlos-Huane/My-third-website/blob/main/index.html",
        url: "https://primerproyectowebhs.netlify.app/",
        type: "front-end"
    },
    {
        id: 2,
        title: "PersonalL Landing Page",
        description: "Sitio web que compuesto de HTML Y CSS puro, la página busca promover una tienda de cafe a trávez de sus diferentes artículos y precios",
        type: "front-end",
        technologies: ["HTML", "CSS"],
        github: "https://github.com/Carlos-Huane/CoffePad-Carlos.Huane",
        url: "https://coffepad-carlos-huane.netlify.app/",
        type: "front-end"
    },
    {
        id: 3,
        title: "Professional Landing Page",
        description: "Página profesional inspirada en promocionar a un banco usando las últimas tecnologías y diseño profesional",
        technologies: ["HTML", "CSS", "React", "Tailwind"],
        github: "https://github.com/Carlos-Huane/bank_mordern_app-with-Tailwind",
        url: "https://bank-app-with-tailwind.vercel.app/",
        type: "front-end"
    },
    {
        id: 4,
        title: "Weather Api",
        description: "Sitio web en donde puedes consultar diferentes tipos de climas a trávez de una API, además puedes analizar los climás más detalladamente haciendo click sobre la ciudad",
        technologies: ["HTML", "CSS","Bootstrap", "JS", "React"],
        github: "https://github.com/Carlos-Huane/bank_mordern_app-with-Tailwind",
        url: "https://carlos-huane.github.io/weather-api/",
        type: "front-end"
    },
    {
        id: 5,
        title: "HSMX",
        description: "El proyecto consiste en un sistema de registro e inicio de sesión para usuarios, que les permite crear una cuenta y acceder a una plataforma para agregar, editar y eliminar contactos, los cuales serán almacenados en una base de datos.",
        technologies: ["HTML", "CSS", "JS", "React", "MongoDb", "Express"],
        github: "https://github.com/Carlos-Huane/HSMX",
        url: "https://carlos-huane.github.io/HSMX/",
        type: "full-stack",
    },
    {
        id: 6,
        title: "HS PHRASES",
        description: "El proyecto consiste en un generador de frases de motivación aleatorias que se activa mediante un botón en una página web.",
        technologies: ["HTML", "CSS", "JS"],
        github: false,
        url: "https://codepen.io/carlos-huane/pen/YzaXepQ",
        type: "front-end",
    }
]
export {listProjectsMain, listProjectsMore};