
export const navItems = [
  { name: "Experiencia", link: "#experiencia" },
  { name: "Proyectos", link: "#proyectos"  },
  { name: "Contacto", link: "#contacto"},
];
  
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
        name: 'Photoshop',
        icon: 'SiAdobephotoshop',
        color: 'bg-blue-500',
    },
    {
        name: 'Illustrator',
        icon: 'SiAdobeillustrator',
        color: 'bg-blue-500',
    },
    {
        name: 'After Effects',
        icon: 'SiAdobeaftereffects',
        color: 'bg-blue-500',
    },
    {
        name: 'Premiere Pro',
        icon: 'SiPremierePro',
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
        name: '.NET 8.0',
        icon: 'SiDotNet',
        color: 'bg-gray-900',
    },
    {
        name: 'EntityFramework',
        icon: 'SiEntityframework',
        color: 'bg-gray-900',
    },
    {
        name: 'Wordpress',
        icon: 'SiWordpress',
        color: 'bg-gray-900',
    },
];
  
export const projects = [
    {
      id: '1',
      title: "Melinder" ,
      subTitle: "Aplicación web",
      des: "Aplicación que permite buscar autos en MercadoLibre de manera más óptima.",
      proposito:`Generar una aplicación Web consumiento los servicios de la API de Mercado Libre.
      La misma debe ser responsive para ser utilizada en cualquier dispositivo. Agregar pequeñas mejoras de usabilidad y nuevas funcionalidades.
    `,
    destinatario:`Los usuarios son clientes habituales de mercado libre.
    Fue decidido que sea una aplicación enfocada 100% a gente que busca comprar un auto`,
      planteamiento:`Como son usuarios frecuentes de Mercado Libre, se eligió que la aplicación tenga la misma paleta cromática, para que se sientan familiarizados. La app permitirá filtrar las búsquedas borrando elementos que no le interesen, para que cuando la repitas, ya no estén ahí y solo veas lo que interesa o lo nuevo.`,
      img: "/proyecto_melinder.png",
      hero_img: "/hero_melinder.png",
      ampliation_img:"/ampliationMelinder.png",
      projectType : 'Web',
      webIcon: '/MelinderIcon.png',
      techList:[
          {
            id: 1,
            nombre: 'Javascript',
            img: '/js.svg',
          },
          {
            id: 2,
            nombre: 'React',
            img: '/re.svg',
          },
          {
            id: 3,
            nombre: 'TailwindCSS',
            img: '/tail.svg',
          },
          {
            id: 4,
            nombre: 'Figma',
            img: '/fig.svg',
          },
      ],
      link: "https://melinder-app.vercel.app/",
      techExplanation:`
      Esta aplicación fue realizada con Javascript + React componetizando para reutilizar código y manejando estados, lo que mejora mucho su performance y velocidad, aprovechando también la utilización del Virtual DOM.
      TailwindCSS fue la elección para los estilos, ya que es un framework que nos permite crear diseños complejos sin la necesidad de escribir CSS de manera rápida y sencilla.
      Figma fue la herramienta utilizada para el diseño de la interfaz de usuario.
      `,
    },
    {
      id: "2",
      title: "NBA TV",
      subTitle: "ID para canal",
      des: "ID para el canal NBA Tv en el que se promocionan las finales de la NBA.",
      proposito:`Generación de un video promocional para un canal de comunicación seleccionado por el alumno, de temática libre.
      Se busca promocionar un evento pasado o futuro de dicho canal.`,
      destinatario:`Se busca no solo informar cuál será el partido de la final, si no que se busca atraer gente nueva a que vea los partidos,
      deberá ser un producto que atrape al espectador`,
      planteamiento:`Se selecciona una ficticia futura final de NBA entre los Rockets y Sixers para el canal NBA Tv. Se busca que haya
      movimiento en cada una de las escenas, para darle el dinamismo y emoción esperado a un evento de esta magnitud.`,
      img: "/proyecto_nba.png",
      hero_img: "/hero_nbatv.png",
      ampliation_img:"/ampliationNBATV.png",
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
    embedLink: "MJTZl8ys2kU?si=LJKlvlb3nidH0yeI",
    techExplanation:`
    Para esta pieza se utilizó Illustrator para la creación de los vectores, Photoshop para la creación de los elementos gráficos y retoques,  y After Effects para la animación de los mismos. 
    `,
    },
    {
      id: "3",
      title: "Club Cordón",
      subTitle: "Proyecto integrador",
      des: "Desarrollo de piezas digitales para el Club Cordón.",
      proposito:`Optimización y automatización de procesos. Generación de ventas y fidelización de clientes.
      Desarrollo de nuevas redes sociales y contenido digital.
    `,
    destinatario:`El trabajo es enfocado a los funcionarios de la institución, buscando facilitar y automatizar sus tareas. La gente que trabaja en la empresa no manejan la tecnología con facilidad, así que debe ser intuitivo y sencillo de utilizar.`,
      planteamiento:`Sitio web como pieza principal que permita a los usuarios conocer el club por dentro, su historia, tienda, noticias, logros y su plantel actual de basket.
      Realizado mediante CMS para que los funcionarios no dependan de nadie para modificar la sección de noticias y tienda online. Generación de contenido digital para Twitch, TikTok e instagram.      
      `,
      img: "/proyecto_cordon.png",
      ampliation_img:"/ampliationCordon.png",
      projectType : 'Video',
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
          id: 7,
          nombre: 'Obs',
          img: '/obs.svg',
        },
    ],
      iconLists: ["/wp.svg", "/fig.svg", "/ps.svg", "/ai.svg", "/ae.svg", "/obs.svg"],
      embedLink: "TTMbOS0zyaU?si=S9v4PUWXzUXLdV5u",

      techExplanation:`Para el sitio web se eligió Wordpress, lo que permitirá que sea administrado
      por los funcionarios del club, no sin antes, pasar por figma para definir cuál sería la interfaz final
      a utilizar. A su vez, permitirá agregar un recorrido virtual generado facilmente. Con After Effects, Photoshop e Illustrator se generaron las demás piezas digitales. Finalmente, se utiliza OBS para poder llevar lo creado a Twitch.`,

    },
    {
      id: "4",
      title: "Serindipia",
      subTitle: "Diseño editorial",
      des: "Diseño editorial para la elaboración de un diario sobre distinas temáticas.",
      proposito:`Generar una identidad visual para un diario ficticio. Eligiendo un público objetivo, para luego generar una estética que lo acompañe.      
    `,
      destinatario:`El usuario final fue definido por el equipo que sea un público joven, darle un contenido a estas personas que puedan disfrutar`,
      planteamiento:`Se busca definir un logo con una tipografía que transmita frescura.
      Además, se definen  colores identificatorios para cada sección, haciendo que sea una mejor experiencia para el usuario.       `,
      img: "/proyecto_serindipia.png",
      hero_img: "/hero_serindipia.jpg",
      ampliation_img:"/ampliationSerindipia.png",
      projectType : 'Diario',
      techList:[
        {
          id: 1,
          nombre: 'InDesign',
          img: '/id.svg',
        },
        {
          id: 2,
          nombre: 'Photoshop',
          img: '/ps.svg',
        },
    ],
    techExplanation:`
    Es un proyecto realizado casi en su totalidad con Adobe InDesign, que nos permitió realizar un
    trabajo editorial cuidando hasta el más mínimo detalle. Adobe Photoshop fue utilizado para
    la optimización de las fotografías.
    `,
    },
    {
      id: "5",
      title: "Houston Rockets",
      subTitle: "Infografía",
      des: "Infografía que explica el gran cambio de los Rockets en la NBA actual .",
      proposito:`Explicar mucha información para que sea entendible de manera rápida y fácil para el usuario.     
    `,
    destinatario: `El público objetivo tiene que tener interés por el basquetbol y la nba, no tiene porque ser un experto, ya que la pieza debe explicarse por si sola. `,
      planteamiento:`Se eligió explicar una situación revolucionaria en la NBA como lo fueron los rockets del SmallBall, ya que es un ejemplo que es super visual, permitiendo apoyarse en los gráficos realizados.
      `,
      img: "/proyecto_rockets.png",
      hero_img: "/hero_info.png",
      ampliation_img:"/ampliationRockets.png",
      projectType : 'Infografia',
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
    ],
      pieza: "/Infografia.png",
      techExplanation:`
      Es un proyecto realizado casi en su totalidad con Adobe Illusrator, cuidando hasta los más
      mínimos detalles, creando vectores que pudiesen explicar lo ocurrido. Adobe Photoshop fue utilizado para
      la optimización de las fotografías.
      `,
    },
    {
      id: "6",
      title: "NFL",
      subTitle: "Pieza audiovisual",
      des: "Pieza audiovisual de análisis táctico sobre la SuperBowl 2017.",
      img: "/proyecto_nfl.png",
      proposito:`Generación de un contenido audiovisual que involucre conceptos adquiridos de Adobe After Effects en el curso.
      los conceptos que más se buscaban plasmar era el tracking de objetos en movimiento.      
    `,
    destinatario: `El enfoque del trabajo es para gente disfruta y sabe de NFL, ya que se busca que sea un análisis táctico sobre este deporte.`,
      planteamiento:`Se elegió como pieza el partido del SuperBowl 2017, donde hay un campo bien iluminado y con buena diferenciación de colores entre cancha y camisetas.
      Esto ayudaría a que el tracking de los objetos seleccionados sea más sencillo y automático, además de ser un deporte conozco y que disfruto mucho.
      `,
      projectType : 'Video',
      ampliation_img:"/ampliationNFL.png",
      techList:[
        {
          id: 1,
          nombre: 'Illustrator',
          img: '/ai.svg',
        },
        {
          id: 2,
          nombre: 'Premiere',
          img: '/pr.svg',
        },
        {
          id: 3,
          nombre: 'After Effects',
          img: '/ae.svg',
        },
    ],
    techExplanation:`
    Para este proyecto primero se trabajaron los clips en Premiere, recortandolos y ajustando su iluminación. Posteriormente, con Illustrator se generarían los gráficos a utilizar en el video que fue realizado en After Effects.
    `,
      embedLink: "p1kv7pjxgA4?si=fSPIplWrzlnHMqcI",
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
];

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
];

export const serindipiaImages = [
  {
    title: "Serindipia - Tapa",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-0.jpg",
  },
  {
    title: "Serindipia - Sección deportiva",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-1.jpg",
  },
  {
    title: "Serindipia - Sección deportiva",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-4.jpg",
  },
  {
    title: "Serindipia - Sección política",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-5.jpg",
  },
  {
    title: "Serindipia - Sección política",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-7.jpg",
  },
  {
    title: "Serindipia - Sección política",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-8.jpg",
  },
  {
    title: "Serindipia - Sección economía",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-9.jpg",
  },
  {
    title: "Serindipia - Sección economía",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-10.jpg",
  },
  {
    title: "Serindipia - Sección economía",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-11.jpg",
  },
  {
    title: "Serindipia - Sección economía",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-12.jpg",
  },
  {
    title: "Serindipia - Sección tecnología",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-13.jpg",
  },
  {
    title: "Serindipia - Sección tecnología",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-15.jpg",
  },
  {
    title: "Serindipia - Sección tecnología",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-16.jpg",
  },
  {
    title: "Serindipia - Sección salud",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-17.jpg",
  },
  {
    title: "Serindipia - Sección salud",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-18.jpg",
  },
  {
    title: "Serindipia - Sección salud",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-19.jpg",
  },
  {
    title: "Serindipia - Sección salud",
    link:"",
    thumbnail:
      "/serindipiaCaptures/serindipia-20.jpg",
  },
];