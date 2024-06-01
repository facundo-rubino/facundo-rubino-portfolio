import { workProcess } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const WorkProcess = () => {
  return (
    <section  className="my-20" >
    <h1 className="heading">La clave de cada pieza es realizar el correcto {' '}
    <span className="text-orange-500">proceso de trabajo</span>
    </h1>
    <section className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 xl:w-9/12 gap-10 m-auto">
        {workProcess.map((card, index) => (
            <Button key={card.id}
            borderRadius='0.5rem'
            className='flex-1 text-slate-900 dark:text-slate-100 border-neutral-200 dark:border-slate-800 '
            >
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <div  className=" lg:w-32 md:w-20 w-16">
                        <h1 className='gradient-text text-4xl'>{index + 1}.</h1>
                        </div>
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                        <p className='text-start text-slate-700 dark:text-white-100 mt-3 font-semibold md:text-lg'>{card.desc}</p>
                    </div>
                </div>
            </Button>
        ))}
        </section>
        </section>
  )
}

export default WorkProcess