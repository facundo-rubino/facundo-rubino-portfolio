import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick}:{
title:string, icon?: React.ReactNode, position?: string, handleClick?: () => void,
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] w-full focus:outline-none md:w-60 md:mt-10">
  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#fdba74_50%,#f97316_100%)]" />
  <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-blue-900 px-3 text-sm lg:text-xl font-medium text-white backdrop-blur-3xl">
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
</button>
  )
}

export default MagicButton

