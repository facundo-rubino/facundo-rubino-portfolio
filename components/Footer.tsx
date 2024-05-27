import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contacto">
        <div
        className="w-full absolute left-0 -bottom-72 min-h-96"
        >
            <img src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50" />
        <div className="flex flex-col items-center">
        </div>
<h1 className="heading lg:max-w-[45vw]">Contactame <span className="text-orange-500">aaaaa</span></h1>
        </div>
        <p className='text-white-200 md:mt-10 my-5 text-center'>sasasaas</p>
        <a href="mailto:facundorubino21@gmail.com">
            <MagicButton
            title='Contactame'
            icon={<FaLocationArrow/>}
            position='right'            
            
            />
        </a>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className='md:text-base text-small md:font-normal font-light'>Copyright ©  2024 | Facundo Rubino Carpeta 4 </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile, index) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center
                    backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt="profle.id" width="20" height="20" />
                    </div>
                ))}
            </div>
        </div>
        </footer>
  )
}

export default Footer