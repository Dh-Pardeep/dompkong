import React from 'react'
import { DateUtilities } from '../Mapdata'
import { data } from 'autoprefixer'

const Utilities = () => {
  return (
    <div>
      <div className="my_container">
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none text-center pb-[54px]">UTILITIES</h2>
        <div className='flex flex-col flex-wrap sm:flex-row justify-center pb-[80px] md:pb-[120px]' >
          {DateUtilities.map((data) => {
            return (
              <div className='w-full sm:w-3/6 lg:w-2/6 flex items-center justify-center mt-5'data-aos="flip-left" data-aos-delay="300">
                <div className='w-full transition-all ease-linear duration-300  group hover:bg-[#FDDA60] cursor-pointer  rounded-[16px] p-[25px] border-[1px] border-[#656060] relative overflow-hidden mx-[10px] bg-[#211e1e] flex flex-col items-center justify-center'>
                  {data.svgicon}
                  <div className='blur-[94px] top-0 right-0 group-hover:opacity-0 w-[100px] h-[100px] bg-white absolute'></div>
                  <div className='blur-[94px] bottom-0 start-0 group-hover:opacity-0 w-[100px] h-[100px] bg-white absolute'></div>
                  <h2 className='text-white font-Montserrat   group-hover:text-black ransition-all ease-linear duration-100 text-center text-[24px] my-[16px] group-hover:font-bold  font-semibold'>{data.heading}</h2>
                  <p className='text-white font-Montserrat  group-hover:text-black ransition-all ease-linear duration-100 text-center max-w-[300px] text-base font-normal'>{data.paragraph}</p>
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

