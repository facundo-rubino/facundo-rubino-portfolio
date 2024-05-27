import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full mt-52 mb-4" id="contacto">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-70 dark:opacity-20" />
        </div>

        <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">¿Estás listo para dar un gran {' '}
        <span className="text-orange-500">salto digital?</span>
        </h1>
        <p className='text-black dark:text-white-200 md:mt-3  text-center my-5 md:my-0'>
            Enviame un mensaje para que podamos trabajar juntos </p>
        <a href="mailto:facundorubino21@gmail.com">
            <MagicButton
            title='Contactame'
            icon={<FaLocationArrow/>}
            position='right'            
            
            />
        </a>

            </div>
        <div className="flex mt-8 md:flex-row md:justify-center md:gap-48 flex-col justify-between items-center">
            <p className='md:text-base text-small md:font-normal font-light mb-4 md:mb-0'>Copyright ©  2024 | Facundo Rubino Carpeta 4 </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile, index) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center
                    backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                       <a href={profile.link} target='_blank'><img src={profile.img} alt="profle.id"  width="20" height="20" /></a> 
                    </div>
                ))}
            </div>
        </div>
        </footer>
  )
}

export default Footer