import React from 'react'
import VerticalTimeline from './ui/VerticalTimeline'
import { experiencie, education } from '@/data'

const Experience = () => {
  return (
    <section id="experiencia" className="flex py-20">
           <h1 className="heading"> {' '}
        <span className="text-orange-300">experiencia</span>
        </h1>
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-5/12">
        <h3 className="text-xl font-normal pt-10 pl-8 sm:pl-32 text-slate-900 dark:text-slate-200">| Experiencia</h3>
        {experiencie.map(({
            date,
            title,
            description,
            company,
        }) => (
           <VerticalTimeline key={title} date={date} title={title} place={company} desc={description}/>
        ))}
        </div>
      <div className="w-full mt-16 lg:mt-0 lg:w-5/12">
        <h3 className="text-xl font-normal pt-10 pl-8 sm:pl-32 text-slate-900 dark:text-slate-200">| Eduación</h3>
        {education.map(({
            date,
            title,
            description,
            company,
        }) => (
           <VerticalTimeline key={title} date={date} title={title} place={company} desc={description}/>
        ))}
        </div>
        </div>
        </section>
  )
}

export default Experience