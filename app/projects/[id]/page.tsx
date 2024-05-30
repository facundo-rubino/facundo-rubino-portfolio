// app/projects/[id].tsx
'use client'
import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/data';
import React from 'react';
import { AnimatedTooltip } from '@/components/ui/AnimatedTooltip';
import { ContainerScroll } from '@/components/ui/ContainerScrollAnimation';
import Image from 'next/image';

const ProjectDetail = () => {
    const params = useParams();
    const router = useRouter();

    const { id } = params;
    const project = projects.find((proj) => proj.id === id);
  

  return (
    <div>
          <div className="flex flex-col overflow-hidden">
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
         <button
        onClick={() => router.back()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go Back
      </button>
      <h1>{project!.title}</h1>
      <p>{project!.des}</p>
      <img src={project!.img} alt={project!.title} />
      {/* <div>
        {project!.iconLists.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} />
        ))}
      </div> */}
      
      <section className="py-5">
        
      <h1 className=" heading text-orange-500">Tecnologías {' '} 
        <span className="text-slate-700 dark:text-slate-100" >elegidas</span>
        </h1>
      <div className="flex flex-row items-center justify-center mb-10 w-full gap-12">
      <AnimatedTooltip items={project!.techList} />
    </div>
        <p className="text-center dark:text-slate-200 py-2">las elegi porque....</p>
      </section>
    </div>
  );
};

export default ProjectDetail;
