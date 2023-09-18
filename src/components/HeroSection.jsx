import React from 'react'
import { Link } from 'react-router-dom'
import { BoatIcon, DimondIcon, DiscordIcon, MIcon, TelegramIcon, TwitterIcon } from './common/icon'
import Hero_left from '../assets/image/webp/hero_left.webp'
import Hero_Right from '../assets/image/webp/hero_right.webp'
import Hero_Top from '../assets/image/webp/hero_top.webp'
import Monkey1 from '../assets/image/webp/monkey1.webp'
import Monkey2 from '../assets/image/webp/monkey2.webp'
import Monkey3 from '../assets/image/webp/monkey3.webp'
const HeroSection = () => {
    return (
        <header className='bg_hero_image bg-cover bg-no-repeat bg-center relative z-50 overflow-hidden'>
            <img data-aos="fade-down"  data-aos-delay="3000"   data-aos-easing="linear"  data-aos-duration="1500" className=' absolute z-30'  src={Hero_left} alt="image" />
            <img data-aos="fade-down"  data-aos-delay="3000"   data-aos-easing="linear"  data-aos-duration="1500" className=' absolute end-0 z-10' src={Hero_Right} alt="image" />
            <img data-aos="fade-down"  data-aos-delay="3000"   data-aos-easing="linear"  data-aos-duration="1500" className=' absolute end-0  top-[-16%]' src={Hero_Top} alt="image" />
            <img data-aos="fade-left"  data-aos-delay="300" data-aos-easing="linear"  data-aos-duration="1000"  className=' absolute end-[28%]  bottom-0' src={Monkey1} alt="image" />
            <img data-aos="fade-left"  data-aos-delay="700" data-aos-easing="linear"  data-aos-duration="1000"  className=' absolute end-[9%]  bottom-0' src={Monkey2} alt="image" />
            <img data-aos="fade-left"  data-aos-delay="1000"  data-aos-easing="linear"  data-aos-duration="1000" className=' absolute end-[-20%]  bottom-0' src={Monkey3} alt="image" />
            <div className="my_container relative z-[500]" >
                <div className='text-end pt-[30px]' data-aos="zoom-in" data-aos-delay="3000" data-aos-easing="linear"  data-aos-duration="1500">
                    <Link className='text-black  font-Azo text-[14px] sm:text-base relative z-[60]    font-normal common_btn bg-[#FDDA60] rounded-[4px] px-6 pt-4 pb-[13px] inline-block'>CONNECT WALLET</Link>
                </div>
                <div className='flex justify-center  py-[38px]' data-aos="zoom-in" data-aos-delay="3000" data-aos-easing="linear"  data-aos-duration="1500">
                    <div className='transition-all ease-linear duration-300 hover:translate-y-[-5px]'>
                      <a href="https://twitter.com/" target='_blank'>  <TwitterIcon /></a>
                    </div>
                    <div className='mx-[24px] transition-all ease-linear duration-300 hover:translate-y-[-5px]'>
                        <a href="https://www.boat-lifestyle.com/account/login" target='_blank'><BoatIcon /></a>
                    </div>
                    <div className='transition-all ease-linear duration-300 hover:translate-y-[-5px]'>
                        <a href="https://www.google.co.in/" target='_blank'><DimondIcon /></a>
                    </div> 
                    <div className='mx-[24px] transition-all ease-linear duration-300 hover:translate-y-[-5px]'>
                     <a href="https://discord.com/" target='_blank'>   <DiscordIcon /></a>
                    </div>
                    <div className='transition-all ease-linear duration-300 hover:translate-y-[-5px]'>
                      <a href="https://www.google.co.in/" target='_blank'>  <MIcon /></a>
                    </div>
                    <div className='ms-[24px] transition-all ease-linear duration-300 hover:translate-y-[-5px]'>
                      <a href="https://telegram.org/" target='_blank'>  <TelegramIcon /></a>
                    </div>
                </div>
                <div className='text-center 'data-aos="zoom-out-up" data-aos-delay="3000"   >
                    <h1 className='text-white text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px]  font-Azo text-center max-w-[539px] mx-auto leading-[70px] inline-block font-normal '>    WELCOME <div>   TO  <span className='text-[#F1C85D] relative  after:contents-[""] after:bg-[#F1C85D] after:w-full after:left-0 after:bottom-0 after:h-[5px] after:absolute'>DOMPKONG</span></div></h1>
                    <p className='text-white opacity-[0.8] max-w-[510px] pt-[20px] mx-auto text-base font-normal pb-[35px]'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vita</p>
                </div>
                <div className='flex flex-col justify-center sm:flex-row items-center pb-[338px]' data-aos="zoom-in" data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="3000">
                    <div>
                        <Link className='text-black  font-Azo text-base  font-normal common_btn bg-[#FDDA60] rounded-[4px] px-6 pt-4 pb-[13px] inline-block'>WHITEPAPER</Link>
                    </div>
                    <div className='mt-5 sm:mt-0 sm:ms-[32px]'>
                        <Link className='text-black  font-Azo text-base  font-normal common_btn bg-[#FDDA60] rounded-[4px] px-6 pt-4 pb-[13px] inline-block me-[32px]'>MINT</Link>
                        <Link className='text-black  font-Azo text-base  font-normal common_btn bg-[#FDDA60] rounded-[4px] px-6 pt-4 pb-[13px] inline-block'>OPENSEA</Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeroSection