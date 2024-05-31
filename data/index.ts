
export const navItems = [
  { name: "Experiencia", link: "#experiencia" },
  { name: "Proyectos", link: "#proyectos"  },
  { name: "Contacto", link: "#contacto"},
]
  
  export const techs = [
    {
        name: 'HTML',
        icon: 'SiHtml',
        color: 'bg-gray-900',
    },
    {
        name: 'JavaScript',
        icon: 'SiJavascript',
        color: 'bg-gray-900',
    },
    {
        name: 'Typescript',
        icon: 'SiTypescript',
        color: 'bg-gray-900',
    },
    {
        name: 'React',
        icon: 'SiReact',
        color: 'bg-blue-500',
    },
    {
        name: 'Next.js',
        icon: 'SiNextDotJs',
        color: 'bg-gray-900',
    },
    {
        name: 'Angular',
        icon: 'SiAngular',
        color: 'bg-gray-900',
    },
    {
        name: 'Css',
        icon: 'SiCSS',
        color: 'bg-blue-500',
    },
    {
        name: 'Scss',
        icon: 'SiScss',
        color: 'bg-blue-500',
    },
    {
        name: 'TailwindCSS',
        icon: 'SiTailwindcss',
        color: 'bg-blue-500',
    },
    {
        name: 'Node.js',
        icon: 'SiNodeDotJs',
        color: 'bg-green-500',
    },
    {
        name: 'MongoDB',
        icon: 'SiMongodb',
        color: 'bg-green-500',
    },
    {
        name: 'Firebase',
        icon: 'SiFirebase',
        color: 'bg-yellow-500',
    },
    {
        name: 'Figma',
        icon: 'SiFigma',
        color: 'bg-purple-500',
    },
    {
        name: 'Adobe Photoshop',
        icon: 'SiAdobephotoshop',
        color: 'bg-blue-500',
    },
    {
        name: 'Adobe Illustrator',
        icon: 'SiAdobeillustrator',
        color: 'bg-blue-500',
    },
    {
        name: 'Adobe After Effects',
        icon: 'SiAdobeaftereffects',
        color: 'bg-blue-500',
    },
    {
        name: 'SQL',
        icon: 'Simysql',
        color: 'bg-red-500',
    },
    {
        name: 'GitHub',
        icon: 'SiGithub',
        color: 'bg-gray-900',
    },
    {
        name: 'C#',
        icon: 'SiCsharp',
        color: 'bg-gray-900',
    },
    {
        name: 'EntityFramework',
        icon: 'SiEntityframework',
        color: 'bg-gray-900',
    },
]
  
export const projects = [
    {
      id: '1',
      title: "Melinder" ,
      subTitle: "Aplicación web",
      des: "Aplicación que permite buscar autos en MercadoLibre de manera más óptima y personalizada.",
      desLarga:`
      Generar una aplicación Web consumiento los servicios de la API de Mercado Libre.
      La misma debe ser responsive para ser utilizada en cualquier dispositivo.
      

    `,
      planteamiento:`Brindar al usuario una versión más personalizada de Mercado Libre, 
      permitiendo la compra de autos de manera más óptima y personalizada. Filtrar las búsquedas borrando
      elementos que no le interesen, para que cuando la repitas, ya no estén ahí y solo veas lo que interesa o lo nuevo.`,
      
      
      
      img: "/proyecto_melinder.png",
      techList:[
          {
            id: 1,
            nombre: 'React',
            img: '/re.svg',
          },
          {
            id: 2,
            nombre: 'TailwindCSS',
            img: '/tail.svg',
          },
          {
            id: 3,
            nombre: 'Figma',
            img: '/fig.svg',
          },
      ],
      moreInfo: [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  content: ''
    },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: ''
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: ''
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: ''
  },
],
      link: "https://melinder-app.vercel.app/",
      techExplanation:`
      Esta aplicación fue realizada con React componetizando para reutilizar código y manejando estados, lo que mejora mucho su performance y velocidad, aprovechando también la utilización del Virtual DOM.
      TailwindCSS fue la elección para los estilos, ya que es un framework que nos permite crear diseños complejos sin la necesidad de escribir CSS de manera rápida y sencilla.
      Figma fue la herramienta utilizada para el diseño de la interfaz de usuario.
      `,
    },
    {
      id: "2",
      title: "Finales NBA",
      subTitle: "Id para canal de TV",
      des: "Id para el canal NBA Tv en el que se promocionan las finales de la NBA.",
      img: "/proyecto_nba.png",
      projectType : 'Video',
      techList:[
        {
          id: 1,
          nombre: 'Photoshop',
          img: '/ps.svg',
        },
        {
          id: 2,
          nombre: 'Illustrator',
          img: '/ai.svg',
        },
        {
          id: 3,
          nombre: 'After Effects',
          img: '/ae.svg',
        },
    ],
    moreInfo: [
      {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: ''
        },
      {
        title: "Real time changes",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
          content: ''
      },
      {
        title: "Version control",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: ''
      },
      {
        title: "Running out of content",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: ''
      },
    ],
      link: "https://youtu.be/MJTZl8ys2kU",
    },
    {
      id: "3",
      title: "Club Cordón",
      subTitle: "Desarrollo de piezas digitales",
      des: "Desarrollo de piezas digitales para el Club Cordón.",
      img: "/proyecto_cordon.png",
      techList:[
        {
          id: 1,
          nombre: 'Wordpress',
          img: '/wp.svg',
        },
        {
          id: 2,
          nombre: 'Figma',
          img: '/fig.svg',
        },
        {
          id: 3,
          nombre: 'Illustrator',
          img: '/ai.svg',
        },
        {
          id: 4,
          nombre: 'Photoshop',
          img: '/ps.svg',
        },
        {
          id: 5,
          nombre: 'After Effects',
          img: '/ae.svg',
        },
        {
          id: 6,
          nombre: 'Premiere',
          img: '/pr.svg',
        },
    ],
    moreInfo: [
      {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: ''
        },
      {
        title: "Real time changes",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
          content: ''
      },
      {
        title: "Version control",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: ''
      },
      {
        title: "Running out of content",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: ''
      },
    ],
      iconLists: ["/wp.svg", "/fig.svg", "/ps.svg", "/ai.svg", "/ae.svg", "/pr.svg"],
      link: "https://youtu.be/TTMbOS0zyaU",
    },
  ];
  
  
  export const workProcess = [
    {
      id: 1,
      title: "Conceptualización      ",
      desc: "Se definen objetivos y se generan ideas creativas para establecer las bases del diseño.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Investigación",
      desc: "Se recopila información clave sobre el proyecto, usuarios y mercado para fundamentar el diseño.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Diseño",
      desc: "Se convierten las ideas en bocetos y prototipos, visualizando la estructura y funcionalidad del proyecto.",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Resultado",
      desc: "Se lanza el producto, para posteriormente evaluar su desempeño y se obtiene feedback para mejoras futuras. ",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    // {
    //   id: 1,
    //   img: "/git.svg",
    // },
    {
      id: 2,
      img: "/insta.svg",
      link: "https://www.instagram.com/facundo_rubino_ca4",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/facundo-rubino      "
    },
  ];

  export const education = [
    {
        company: "Universidad ORT Uruguay | Abr 2022 - Actualidad",
        title: 'Analista en Tecnologías de la Información',
        date: 'Abr 2022',
        description: `Estoy adquiriendo una comprensión más profunda de los aspectos técnicos
        y funcionales del desarrollo backend. Permitiendome abordar proyectos de manera más integral,
        con la capacidad de realizar desafíos complejos.`
    },
    {
        company: "Universidad ORT Uruguay | Abr 2018 - May 2024",
        title: 'Licenciatura en diseño multimedia',
        date: 'Abr 2018',
        description: `Llevar a cabo el desarrollo de sitios desde el inicio, comenzando por UX/UI,
        para luego aplicar conocimientos de desarrollo Frontend adquiridos. Visualizar el diseño
        desde una perspectiva técnica y comprender cómo se traduce en código.`
    },
]

export const experiencie = [
  {
      company: "Universidad ORT Uruguay | Jul 2023 - Actualidad",
      title: 'Desarrollador de software ',
      date: 'Jul 2023',
      description: `Actualmente, trabajo en el desarrollo de sistemas para la universidad,
      como programador Frontend. En nuestro entorno de trabajo, utilizamos la última versión
      de Angular, además  de consumir nuestras propias APIs. Esta experiencia también me brinda
      la libertad de participar activamente en el proceso que se lleva a cabo en el backend.`
  },
  {
      company: "Publicis Impetu | Set 2021 - Nov 2022",
      title: 'Diseñador Web-Digital ',
      date: 'Set 2021',
      description: `Esta etapa de mi vida me permitió mejorar la gestión del tiempo,
      la adaptabilidad,la creatividad, el trabajo en equipo, la resolución de problemas
      y la capacidad de lidiar con el estrés en entornos dinámicos. Además,
      adquirí experiencia en HTML, CSS, JavaScript, frameworks populares, diseño responsivo,
      UI/UX, desarrollo con WordPress y la creación de mailings y landings.`
  },
]