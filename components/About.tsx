import React from 'react'

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row">
      <h1 className="heading">Un poco más{' '}
        <span className="text-orange-400">sobre mi</span>
        </h1>
      <div className="pl-4 mt-4 border-l-2 border-l-orange-300">
      <p>
      La poderosa combinación de la <b>programación</b> con las <b>artes gráficas</b> fue algo que siempre me interesó.
                            Creo firmemente que al fusionar estos dos campos se crean perfiles con un <b>diferencial único</b> ,
                            capaces de  desarrollar soluciones visuales <b>interactivas</b> y <b>optimizadas</b>, integrando <b>estética</b>
                            y <b>funcionalidad</b> en un entorno digital.<br /><br />
                         
      </p>
      <p>
      En mis procesos creativos intento siempre basarme en una buena <b>estructura </b>
                            y <b>organización</b> de la pieza, combinado esto con un buen <b>dominio del layout</b>,
                            para tener el control sobre el objetivo a realizar, con el fin de generar
                            un producto final <b>dinámico, entendible y atractivo</b> .
      </p>
      </div>



    </section>
  )
}

export default About