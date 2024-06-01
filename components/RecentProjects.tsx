import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <section id="proyectos" className='pt-10'>
        <h1 className="heading">Algunos de mis {' '}
        <span className="text-orange-500">últimos proyectos</span>
        </h1>
        <section className="flex flex-wrap items-center justify-center p-4 gap-16 ">
        {projects.map(({
            id,
            title,
            subTitle,
            des,
            img,
            techList,
            link,
        }) => (
            <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                <PinContainer title={title +' - '+ subTitle} >
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw]
                    overflow-hidden h-[20vh] lg:h-[30vh] mb-10" >
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#123162d] '>
                            <img src="/bg.png" alt="bg-img"/>
                        </div>
                            <img src={img} alt={title} className=" absoulte bottom-0"/>
                    </div>
                    <h1 className="font-bold lg-text-2xl md:text-xl text-base line-clamp-1">
                        {title}
                    </h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                    {techList.map((tech, index) => (
                        <div key={index} className='border border-black/[0.2] dark:border-white/[0.2] rounded-full
                        bg-white dark:bg-black  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                        style={{transform: `translateX(-${5 * index * 2})px`}}
                        >
                            <img src={tech.img} alt='icon' className='p-2'/>
                        </div>
                    ))}
                        </div>
                        
                        <Link  href={`/projects/${id}`} key={id}>
                    <div className='flex items-center justify-center'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-orange-500 '>Ver más</p>
                    <FaLocationArrow className='ms-3' color='#f97316'/>
                    </div>
                    </Link>
                    </div>
                    </PinContainer>
            </div>
        ))}
        </section>
    </section>
  )
}

export default RecentProjects