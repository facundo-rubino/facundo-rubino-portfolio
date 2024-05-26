import React from 'react'
import VerticalTimeline from './ui/VerticalTimeline'
import { experiencie, education } from '@/data'

const Experience = () => {
  return (
    <section id="experiencia">
           <h1 className="heading">La formación de <br/>
        <span className="text-orange-500">mi camino</span>
        </h1>
    <section className="flex">
    <div className="flex flex-col lg:flex-row justify-between pt-10">
      <span className="pl-8 text-sm text-black dark:text-orange-200">Experiencia laboral</span>
      <div className="w-full lg:w-5/12">
        {experiencie.map(({
            date,
            title,
            description,
            company,
        }) => (
           <VerticalTimeline key={title} date={date} title={title} place={company} desc={description}/>
        ))}
        </div>
      <div className="w-full mt-8 lg:mt-0 lg:w-5/12">
      <span className="pl-8  text-sm text-black dark:text-orange-200">Experiencia académica</span>
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
        </section>
  )
}

export default Experience