import { techs } from '@/data'
import React from 'react'

const Tools = () => {
  return (
       <section  className="my-20" >
    <h1 className="heading text-orange-500">Tecnologías{' '}
    <span className="text-slate-700 dark:text-slate-100">que manejo</span>
    </h1>
         <p className="text-center dark:text-slate-200 py-2">A lo largo de los años fui desarrollando nuevas y complementarias habilidades</p>
       <div>
       </div>
       <div className="flex flex-wrap mb-5 w-10/12 justify-center items-center m-auto sm:w-9/12">
         {techs.map((tech, index) => (
           <div className="flex-shrink-0 p-2">
             <div key={index}  className="bg-slate-100 dark:bg-slate-900/[0.8] border border-slate-800 rounded-md p-2">
               {tech.name}
             </div>
           </div>
         ))}
       </div>
     </section>
  )
}

export default Tools