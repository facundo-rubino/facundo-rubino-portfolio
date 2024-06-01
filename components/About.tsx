import React from 'react'

const About = () => {
  return (
    <section id="about"  >
      <h1 className="heading">Un poco más{' '}
        <span className="text-orange-500">sobre mi</span>
        </h1>
      <div className="flex flex-col xl:flex-row xl:gap-6  pl-4 mt-5  border-l-2 border-l-orange-300 ">
      <p>
      La poderosa combinación de la <b>programación</b> con las <b>artes gráficas</b> fue algo que siempre me interesó.
                            Creo firmemente que al fusionar estos dos campos se crean perfiles con un <b>diferencial único</b> ,
                            capaces de  desarrollar soluciones visuales <b>interactivas</b> y <b>optimizadas</b>, integrando <b> estética </b>
                            y <b>funcionalidad</b> en un entorno digital.<br /><br />
                         
      </p>
      <p>
      En mis procesos creativos intento siempre basarme en una buena <b>estructura </b>
                            y <b>organización</b> de la pieza, combinado esto con un buen <b>dominio del layout</b>,
                            para tener el control sobre el objetivo a realizar, para así poder generar
                            un producto final <b>dinámico, entendible y atractivo</b> .
      </p>
      </div>



    </section>
  )
}

export default About