import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const WorkProcess = () => {
  return (
    <section className="py-20" >
    <h1 className="heading">Proceso de trabajo {' '}<br/>
    <span className="text-red-400">trust pro</span>
    </h1>
    <section className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
            <Button key={card.id}
            borderRadius='0.5rem'
            clasa
            >
                <div>
                    <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-26"/>
                </div>
            </Button>
        ))}
        </section>
        </section>
  )
}

export default WorkProcess