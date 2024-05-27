import React from 'react'

const VerticalTimeline = ({title, place, date, desc}: {title:string, place:string, date:string, desc:string}) => {
  return (
    <>
     <div className="relative pl-8 sm:pl-32 group">
                    <div className="gradient-text font-black text-lg sm:text-xl mb-1 sm:mb-0">{title}</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute
                    before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem]
                    before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2
                    sm:after:left-0 after:w-2 after:h-2 after:bg-orange-500 after:border-4 after:box-content
                     after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center
                      text-xs sm:text-sm font-semibold uppercase w-20 sm:w-24 h-6 sm:h-8 mb-3 sm:mb-0 text-orange-500 bg-slate-100
                      rounded-full">{date}</time>
                      <div className="text-sm sm:text-base uppercase font-semibold text-slate-900 dark:text-slate-200">{place}</div>
                    </div>
                    <div className="text-slate-900 dark:text-slate-400 pb-8">{desc}</div>
                  </div>
    </>
  )
}

export default VerticalTimeline