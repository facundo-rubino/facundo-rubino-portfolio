import { techs } from '@/data'
import React from 'react'

const Tools = () => {
  return (
       <section>
       <div>
         <h3 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r uppercase from-orange-300 to-orange-500">Tecnologías que manejo</h3>
         <p className="text-center dark:text-slate-200 py-3">A lo largo de los años fui desarrollando nuevas habilidades</p>
       </div>
       <div className="flex flex-wrap mb-5 w-10/12 justify-center items-center m-auto md:w-6/12">
         {techs.map((tech, index) => (
           <div className="flex-shrink-0 p-2  ">
             <div className="bg-slate-100 dark:bg-slate-900/[0.8] border border-slate-800 rounded-md p-2">
               {tech.name}
             </div>
           </div>
         ))}
       </div>
     </section>
  )
}

export default Tools