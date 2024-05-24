import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";


const Hero = (props:any) => {
    const Lang = props.Lang;

    return (
 
        <section className="aaapb-20 pt-36">
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03]
        bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center
      justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>

    <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-2-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'> 
                Facundo Rubino
            </h2>
        </div>
    </div>
        </section>

    )
}

export default Hero