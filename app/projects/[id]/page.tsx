// app/projects/[id].tsx
'use client'
import { useParams, useRouter } from 'next/navigation';
import { serindipiaImages, projects } from '@/data';
import React from 'react';
import { AnimatedTooltip } from '@/components/ui/AnimatedTooltip';
import { ContainerScroll } from '@/components/ui/ContainerScrollAnimation';
import Image from 'next/image';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaArrowCircleLeft, FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import YouTubeEmbed from '../../../components/YoutubeEmbed';
import { CanvasRevealEffect } from '@/components/ui/CanvasReveal';
import { HeroParallax } from '@/components/ui/HeroParallax';
import Footer from '@/components/Footer';
import MagicButton from '@/components/ui/MagicButton';
import Card from '@/components/ui/Card';


const ProjectDetail = () => {
    const params = useParams();
    const router = useRouter();
    const { theme } = useTheme();

    const { id } = params;
    const project = projects.find((proj) => proj.id === id);
  
  return (
    <>
    <div>
         <FloatingNav navItems={[{ name: " Volver al inicio", link: "/",icon: <FaArrowCircleLeft />},]} />
          <div className="flex flex-col overflow-hidden ">    
          <ContainerScroll
          titleComponent={
          <>
            <h1 className="text-4xl font-regular text-black dark:text-white">
               {project!.subTitle}<br/>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              {project!.title} 
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={project!.ampliation_img}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center-top p-1"
          draggable={false}
        />
          </ContainerScroll>
          </div>
    {/* main */}
 <section className='dark:bg-black-100  pt-20'>
 <section className='w-full pb-40 '>
 <h1 className="heading pb-10">Un poco más sobre {' '}
        <span className="text-orange-500">el proyecto</span>
        </h1>

<div className="flex flex-col lg:flex-row items-center justify-around w-full gap-20 lg:gap-20 px-8">
        <Card title="¿Qué?" icon={<MagicButton title="Propósito"/>} description={project!.proposito}>
          <CanvasRevealEffect animationSpeed={5} containerClassName="bg-orange-700" colors={[[125, 211, 252]]}/>
        </Card>
        <Card title="¿Para quién?" icon={<MagicButton title="Destinatario"/> }description={project!.destinatario}>
          <CanvasRevealEffect animationSpeed={5} containerClassName="bg-orange-700" colors={[[125, 211, 252]]} />
        </Card>
        <Card title="¿Cómo?" icon={<MagicButton title="Planteo"/> }description={project!.planteamiento}>
          <CanvasRevealEffect animationSpeed={5} containerClassName="bg-orange-700" colors={[[125, 211, 252]]} />
        </Card>
      </div>
</section>

      <section className="py-20 bg-white dark:bg-blue-900">
      <h1 className=" heading text-orange-500 ">{project!.techList.length == 1 ? 'Tecnología' : 'Tecnologías'} {' '} 
        <span className="text-slate-700 dark:text-slate-100" >{project!.techList.length == 1 ? 'utilizada' : 'utilizadas'} </span>
        </h1>
      <div className="flex flex-row items-center justify-center my-5 w-full gap-12">
      <AnimatedTooltip items={project!.techList} />
    </div>
        <p className="text-center dark:text-slate-200 w-8/12 m-auto">{project!.techExplanation}</p>
      </section>
 
 <section className='pt-24 lg:pt-32 pb-10'>
      <h1 className=" heading text-orange-500 pb-4">Resultado {' '} 
        <span className="text-slate-700 dark:text-slate-100 " >final</span>
        </h1>
        {project!.projectType == 'Video'  ?
      <section className='h-[30rem] lg:h-[60rem] pb-10'>
        <YouTubeEmbed embedId={project!.embedLink}/>
        </section>
        : ''}
        
        {project!.projectType == 'Diario'  ?
        <section className='h-[60rem] pb-10' >
        <HeroParallax products={serindipiaImages} />
        </section> :''}


 {project!.projectType == 'Web'  ? 
<section className="py-8">
<p className="text-center dark:text-slate-200 w-8/12 m-auto">Conocé la web clickeando en la captura de la misma</p>
        <a href={project!.link}  target="_blank" className="flex justify-center w-full ">
        <img  
        className=" pt-6"
        src={project!.hero_img}
          alt="hero"
          />
        </a>
</section> :''}
        </section>


 {project!.projectType == 'Infografia'  ? 
<section className="pb-24 lg:pb-32">
<Image
          src={project!.pieza!}
          alt="hero"
          height={720}
          width={1200}
          className="mx-auto rounded-2xl object-cover h-full object-left-top p-1"
          draggable={false}
        />

</section> :''}
 </section>

        {project!.projectType != 'Diario'  ?
<section className="flex flex-col py-10  dark:bg-black-100">
<h1 className=" heading text-slate-700 dark:text-slate-100 pb-5">¿Desea ver otro proyecto? {' '} 
        </h1>
<div className="flex flex-col items-center">
<p className='text-black dark:text-white-200 md:mt-3  text-center mb-5 md:my-0'>
            Haga click debajo para ir al siguiente proyecto. </p>
        <a href={`/projects/${project!.id != "6" ? Number(project!.id) + 1 : 1}`} >
            <MagicButton
            title='Siguiente'
            icon={<FaArrowRight/>}
            position='right'            

            />
            </a>
</div>

</section>
       : ''}

    </div>
    {project!.projectType != 'Diario'  ?
         <Footer/>
        : ''}
 </>
  );
};

export default ProjectDetail;



