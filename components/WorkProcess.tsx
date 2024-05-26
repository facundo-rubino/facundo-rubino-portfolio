import { workProcess } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const WorkProcess = () => {
  return (
    <section  className="py-20" >
    <h1 className="heading">Proceso de trabajo {' '}<br/>
    <span className="text-red-400">trust pro</span>
    <span>Para llegar a los resultados deseados, es necesario cumplir con todas las etapas previas de diseño requeridas</span>
    </h1>
    <section className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workProcess.map((card, index) => (
            <Button key={card.id}
            borderRadius='0.5rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800 '
            duration={Math.floor(Math.random() * 10000) + 6500}
            >
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <div  className=" lg:w-32 md:w-20 w-16">
                        <h1 className='gradient-text text-4xl'>{index + 1}.</h1>
                        </div>
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                    </div>
                </div>
            </Button>
        ))}
        </section>
        </section>
  )
}

export default WorkProcess