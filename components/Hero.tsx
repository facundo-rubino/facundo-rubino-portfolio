'use client'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowAltCircleRight} from "react-icons/fa";
import React from 'react'
import MagicButton from './ui/MagicButton';
import { useTheme } from 'next-themes';
import fotoFacu from '@/public/fotoCirculo.png'
import Image from 'next/image'



const Hero = () => {
    const { theme } = useTheme();

    return (
 <>
        <section className="hero h-screen mb-20 pt-20">
        <div  className="h-screen w-full dark:bg-blue-900 bg-white dark:bg-grid-white/[0.01]
        bg-grid-black/[0.02] flex items-center justify-center absolute top-0 left-0">
     <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white" 
         style={theme === 'dark' ? { 
           backgroundColor: 'hsla(0,0%,0%, 0)', 
           backgroundImage: `
           radial-gradient(at 100% 0%, hsla(25,95%,53%,0.2) 0px, transparent 60%),
           radial-gradient(at 1% 0%, hsla(31,97%,72%,0.2) 0px, transparent 60%)
           ` 
         }: {
            backgroundColor: 'hsla(0,0%,0%, 0)', 
            backgroundImage: `
            radial-gradient(at 100% 0%, hsla(25,95%,53%,0.5) 0px, transparent 60%),
            radial-gradient(at 1% 0%, hsla(31,97%,72%,0.5) 0px, transparent 60%)  ` 
         }} 
    />

    </div>

    <div className="flex flex-col md:flex-row md:gap-56 justify-center relative my-20 z-10 ">
    <div className="flex items-center justify-center h-4/5  mb-10 ">
                <div className="relative mx-auto bg-gradient-to-b from-transparent rounded-full w-60 h-60 mt-5 overflow-hidden content-center">
                    <Image src={fotoFacu} layout="" alt="Foto de Facundo Rubino" objectFit="" />
                </div>
     </div>
        <div className="max-w-[89vw] md:max-2-2xl lg:max-w-[60vw] flex flex-col items-center justify-center md:items-start">
        <h2 className="text-4xl font-black uppercase text-transparent bg-clip-text
        bg-gradient-to-r from-orange-300 to-orange-500">
          <span className="gradient-text">Facu</span>
          <span className="text-transparent bg-clip-text bg-blue-900 dark:bg-white" >ndo Rubino</span>.
        </h2>
        <div className="text-left w-full pt-1 flex justify-center" >
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
                            fontWeight: '400',
                            color: '#f97316',
                            textAlign: 'left',
                        }}
                        repeat={Infinity}
                    />
        </div>
        <a href="#about" className="mt-5">
            <MagicButton title="CONOCÉ MÁS" icon={<FaArrowAltCircleRight />} position="right"/>
            </a>
        </div>
    </div>
        </section>

        </>
    )
}

export default Hero