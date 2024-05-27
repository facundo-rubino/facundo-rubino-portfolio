import React from 'react'
import VerticalTimeline from './ui/VerticalTimeline'
import { experiencie, education } from '@/data'

const Experience = () => {
  return (
    <section id="experiencia">
           <h1 className="heading">Mi formación, {' '}
        <span className="text-orange-500">mi camino</span>
        </h1>
        <p className="text-center dark:text-slate-200 py-2">Tengo la gran suerte de poder aplicar laboralmente todo lo aprendido estudiando en la universidad.</p>

    <section className="flex">
    <div className="flex flex-col lg:flex-row justify-between pt-10">
      <div className="w-full mt-8 lg:mt-0 lg:w-5/12">
      <span className="pl-8 sm:pl-32 text-sm sm:text-base text-black dark:text-orange-200">Experiencia académica</span>
        {education.map(({
            date,
            title,
            description,
            company,
        }) => (
           <VerticalTimeline key={title} date={date} title={title} place={company} desc={description}/>
        ))}
        </div>
      <div className="w-full lg:w-5/12">
      <span className="pl-8 sm:pl-32 text-sm sm:text-base text-black dark:text-orange-200">Experiencia laboral</span>
        {experiencie.map(({
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