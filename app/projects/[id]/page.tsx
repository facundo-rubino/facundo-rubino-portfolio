// app/projects/[id].tsx
'use client'
import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/data';
import React from 'react';
import { AnimatedTooltip } from '@/components/ui/AnimatedTooltip';
import { AnimatePresence, motion } from "framer-motion";
import { ContainerScroll } from '@/components/ui/ContainerScrollAnimation';
import Image from 'next/image';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import YouTubeEmbed from '../../../components/YoutubeEmbed';
import { CanvasRevealEffect } from '@/components/ui/CanvasReveal';

const ProjectDetail = () => {
    const params = useParams();
    const router = useRouter();
    const { theme } = useTheme();

    const { id } = params;
    const project = projects.find((proj) => proj.id === id);
  

  return (
    <div>
         <FloatingNav navItems={[{ name: " Volver al inicio", link: "/",icon: <FaArrowCircleLeft />},]} />
          <div className="flex flex-col overflow-hidden ">    
          <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
               {project!.subTitle}<br/>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              {project!.title} 
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={project!.img}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
          </ContainerScroll>
          </div>
    {/* {main} */}
 <section className='dark:bg-black-100'>
 <section className='w-full pb-20 '>
 <h1 className="heading pt-20 pb-10">Un poco más sobre {' '}
        <span className="text-orange-500">el proyecto</span>
        </h1>

<div className="pm-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card title="¿Qué?" icon={<AceternityIcon fase="Propósito"/>} description={project!.proposito}>
          <CanvasRevealEffect animationSpeed={5} containerClassName="bg-orange-700" colors={[[125, 211, 252]]}/>
        </Card>
        <Card title="¿Cómo?" icon={<AceternityIcon fase="Planteamiento"/> }description={project!.planteamiento}>
          <CanvasRevealEffect animationSpeed={5} containerClassName="bg-orange-700" colors={[[125, 211, 252]]} />
        </Card>
      </div>
</section>

      <section className="flex flex-col sm:flex-row justify-around  ">
      <div className="w-full sm:w-1/2">
      <h1 className=" heading text-orange-500 pb-10">Tecnologías {' '} 
        <span className="text-slate-700 dark:text-slate-100" >elegidas</span>
        </h1>
      <p className="sm:text:lg">{project!.proposito}</p>
      </div>
      <img src={project!.img} alt={project!.title} />
      </section>
      <section className="flex flex-col sm:flex-row justify-around  ">
      <img src={project!.img} alt={project!.title} />
      <div className="w-full sm:w-1/2">
      <h1 className="  text-orange-500 text-left text-3xl pb-3 ">Planteamiento{' '} 
        </h1>
      <p className="sm:text:lg">{project!.planteamiento}</p>
      </div>
      </section>
      
      <section className="py-5 bg-black-200 ">
      <h1 className=" heading text-orange-500 ">Tecnologías {' '} 
        <span className="text-slate-700 dark:text-slate-100" >elegidas</span>
        </h1>
      <div className="flex flex-row items-center justify-center my-5 w-full gap-12">
      <AnimatedTooltip items={project!.techList} />
    </div>
        <p className="text-center dark:text-slate-200 w-8/12 m-auto">{project!.techExplanation}</p>
      </section>

{project!.projectType == 'Video'  ?
<section className='h-[40rem] my-52'>
<h1 className=" heading text-orange-500 pb-10">Tecnologías {' '} 
        <span className="text-slate-700 dark:text-slate-100" >elegidas</span>
        </h1>
  <YouTubeEmbed/>
</section>
: ''}


 </section>
    </div>
  );
};

export default ProjectDetail;


const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-60 lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white text-sm lg:text-lg text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({fase}:{fase:string}) => {
  return (
   <div>
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none
  focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center
  rounded-full bg-slate-950 px-5 py-2 font-bold text-white backdrop-blur-3xl lg:text-2xl">
    {fase}
  </span>
</button>
   </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

