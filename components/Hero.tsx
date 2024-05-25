import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin , FaArrowAltCircleRight} from "react-icons/fa";
import React from 'react'
import MagicButton from './ui/MagicButton';


const Hero = (props:any) => {
    const Lang = props.Lang;

    return (
 <>
        <section className="pb-20 pt-36">
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03]
        bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center
      justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>

    <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-2-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-black uppercase text-transparent bg-clip-text
        bg-gradient-to-r from-orange-300 to-orange-500">
          <span className="gradient-text">Facu</span>
          <span className="text-transparent bg-clip-text bg-white">ndo Rubino</span>.
        </h2>
        <div className="text-left w-full">
        <TypeAnimation
                        sequence={[
                            'Soy diseñador multimedia.',
                            2000,
                            'Soy desarrollador frontend.',
                            2000,
                            'Soy diseñador de interfaces.',
                            2000,
                            'Soy desarrollador fullstack.',
                            2000,
                        ]}
                        wrapper="h2"
                        speed={50}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '300',
                            color: 'white',
                            
                        }}
                        repeat={Infinity}
                    />
        </div>
        <a href="#"><MagicButton title="Contactame" icon={<FaArrowAltCircleRight />} position="right"/></a>
        </div>
    </div>
        </section>

        </>
    )
}

export default Hero