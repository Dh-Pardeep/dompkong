import React from 'react'
import { DateUtilities } from '../Mapdata'
import { data } from 'autoprefixer'

const Utilities = () => {
  return (
    <div>
      <div className="my_container">
        <h2 className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none text-center pb-[54px]">UTILITIES</h2>
        <div className='flex flex-col flex-wrap sm:flex-row justify-center pb-[120px]'>
          {DateUtilities.map((data) => {
            return (
              <div className='w-full sm:w-3/6 lg:w-2/6 flex items-center justify-center mt-5'>
                <div className='w-full transition-all ease-linear duration-300 delay-200 group hover:bg-[#FDDA60] cursor-pointer  rounded-[16px] p-[25px] border-[1px] border-[#656060] mx-[10px] bg-[#211e1e] flex flex-col items-center justify-center'>
                  {data.svgicon}
                  <h2 className='text-white  group-hover:text-black ransition-all ease-linear duration-100 text-center text-[24px] my-[16px] font-semibold'>{data.heading}</h2>
                  <p className='text-white  group-hover:text-black ransition-all ease-linear duration-100 text-center max-w-[300px] text-base font-normal'>{data.paragraph}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default Utilities

