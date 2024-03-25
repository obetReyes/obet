import operativeSystemsImg from "../assets/operativeSystem.webp"
import migracionLosCabos from "../assets/migracionloscabos.png"
import bigO from "../assets/bigO.webp"
import nodejsworks from "../assets/nodejsworks.webp"
export const headlines = [
    "OBET REYES.",
    "Desarollador De Software",
    "Durante los últimos años, me he sumergido en el desarollo software tanto de interfaces como del lado del servidor, me gusta crear software que ayuden a las personas"
];

export const fixedNavItems = [
    { name: "Inicio" },
    { name: "Proyectos" },
    { name: "Acerca de mi" },
    { name: "Blog" },
    { name: "Contacto" }
]




export const projects = [
    {
        title: 'WhatsApp Bot agenda',
        image: "https://picsum.photos/id/1/200/300",
        linkGithub: 'https://github.com/jcblanc2/SkyCast',
        linkOnline: 'https://sky-cast-taupe.vercel.app/',
        description: 'SkyCast is a web app that provides real-time weather conditions and forecasts for selected cities.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'Eclipse IPH Digital',
        image: "https://picsum.photos/id/2/200/300",
        linkOnline: 'https://ora-api-documentation.vercel.app/',
        linkGithub:  'https://ora-api-documentation.vercel.app/',
        description: 'desarrollar el documento  de una manera mucho mas eficiente permitiéndoles  llevar a cabo el IPH en un tiempo menor y de una manera mas intuitiva.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
  
  
];

export const blog = [
    {
        title:"Introducción a los sistemas operativos",
        image:operativeSystemsImg,
        description:"un sistema operativo es un software que controla las operaciones y los recursos del hardware además que permite a las aplicaciones como el navegador, Excel, Microsoft Word interactuar con el hardware",
        href:"https://obetreyes.substack.com/p/introduccion-a-los-sistemas-operativos"
    },
    {
        title:"la seguridad publica en el municipio de Los Cabos - 2023. ",
        image:migracionLosCabos,
        description:"el crecimiento poblacional en Baja California sur y particularmente en el municipio de los cabos, ha generado nuevos retos para las agencias de seguridad publica y la ciudadanía en general",
        href:"https://obetreyes.substack.com/p/la-seguridad-publica-en-el-municipio"
    },
    {
        title:"notación Big O",
        image:bigO,
        description:"la notación Big O nos permite analizar, la eficiencia y el rendimiento de los algoritmos, pero no es como tal que vallamos a obtener segundos o milisegundos como respuesta al calcular la eficiencia",
        href:"https://obetreyes.substack.com/p/notacion-big-o"
    },
    {
        
        title:"Los componentes que hacen funcionar a NODE JS",
        image:nodejsworks,
        description:"Node.js utiliza un enfoque asincrónico y no bloqueante para manejar operaciones I/O y eventos eficientemente, lo que es especialmente adecuado para aplicaciones de alta concurrencia",
        href:"https://obetreyes.substack.com/p/los-componentes-que-hacen-funcionar"
        
    }

]