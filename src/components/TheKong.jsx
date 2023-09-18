import React from 'react'
import Slider from "react-slick";
import TheKongImg from '../assets/image/webp/Thekong.webp'
import leftOne from '../assets/image/png/left1.png'
import leftTwo from '../assets/image/png/left2.png'
import leftThree from '../assets/image/png/left3.png'
import leftFour from '../assets/image/png/left4.png'
import leftFive from '../assets/image/png/left5.png'
import RightOne from '../assets/image/png/Right1.png'
import RightTwo from '../assets/image/png/Right2.png'
import RightThree from '../assets/image/png/Right3.png'
import RightFour from '../assets/image/png/Right4.png'
import RightFive from '../assets/image/png/Right5.png'
const TheKong = () => {
    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    const settingsTwo = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section>
            <div className='relative mx-3  pb-[140px] hidden lg:block' >
                <div className='blur-[220px]  bg-[#FDDA60] w-[350px] h-[300px]  absolute top-[40%]  start-[42%]'></div>
                <img  className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#A09E99] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]   absolute top-0 start-0 xl:start-0' src={leftOne} alt="Image" />
                <img  className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#B63D45] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute top-[25%] translate-y-[-25%] start-0 xl:start-[5%]' src={leftTwo} alt="Image" />
                <img  className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#292424] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute top-[50%] translate-y-[-50%] start-0 xl:start-[10%]' src={leftThree} alt="Image" />
                <img  className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#6C436B] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute top-[75%] translate-y-[-75%] start-0 xl:start-[5%]' src={leftFour} alt="Image" />
                <img  className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#403E50] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute bottom-0 start-0 xl:start-0' src={leftFive} alt="Image" />
                <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#57515F] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute top-0 end-0 xl:end-0' src={RightOne} alt="Image" />
                <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#6C436B] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute top-[25%] translate-y-[-25%] end-0 xl:end-[5%]' src={RightTwo} alt="Image" />
                <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#4A644F] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute top-[50%] translate-y-[-50%] end-0 xl:end-[10%]' src={RightThree} alt="Image" />
                <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#45436C] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute top-[75%] translate-y-[-75%] end-0 xl:end-[5%]' src={RightFour} alt="Image" />
                <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out lg:w-[155px] xl:w-[160px] bg-[#5F5451] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  absolute bottom-0 end-0 xl:end-0' src={RightFive} alt="Image" />
                <div className="my_container">
                    <h2 data-aos="fade-up" data-aos-delay="300" data-aos-easing="linear"  data-aos-duration="1000" className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none text-center ]">THE KONG</h2>
                    <img className='mx-auto relative lg:w-[670px] xl:w-[720px]  xl:-top-[35px]'data-aos="zoom-in" data-aos-delay="300" data-aos-easing="linear"  data-aos-duration="1000" src={TheKongImg} alt="The KOng" />
                </div>
            </div>
            <div className='relative lg:hidden overflow-hidden'>
                <div className='blur-[364px]  bg-[#FDDA60] w-[280px] h-[280px]  absolute top-[40%]  start-[42%]'></div>
                <h2 data-aos="fade-up" data-aos-delay="300" data-aos-easing="linear"  data-aos-duration="1000" className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none text-center ]">THE KONG</h2>
                <Slider {...settings} className='pt-[50px]'>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#A09E99] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]' src={leftOne} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#B63D45] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  start-0 xl:start-[5%]' src={leftTwo} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#292424] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  start-0 xl:start-[10%]' src={leftThree} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#6C436B] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  start-0 xl:start-[5%]' src={leftFour} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#403E50] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={leftFive} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#A09E99] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]' src={leftOne} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#B63D45] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  start-0 xl:start-[5%]' src={leftTwo} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#292424] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  start-0 xl:start-[10%]' src={leftThree} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#6C436B] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60]  start-0 xl:start-[5%]' src={leftFour} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#403E50] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={leftFive} alt="Image" />
                    </div>
                </Slider>
                <div className="my_container">
                    <img className='mx-auto relative w-[720px] -top-[35px] sm:-top-[60px] md:-top-[80px] py-8 lg:py-0'data-aos="zoom-in" data-aos-delay="300" data-aos-easing="linear"  data-aos-duration="1000" src={TheKongImg} alt="The KOng" />
                </div>
                <Slider {...settingsTwo}>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#57515F] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightOne} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#6C436B] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightTwo} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#4A644F] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightThree} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#45436C] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightFour} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#5F5451] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightFive} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#57515F] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightOne} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#6C436B] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightTwo} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#4A644F] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightThree} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#45436C] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightFour} alt="Image" />
                    </div>
                    <div>
                        <img className='border-[4px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out  w-full bg-[#5F5451] border-[#FDDA60] rounded-[8px] hover:shadow-[2px_2px_15px] hover:shadow-[#FDDA60] ' src={RightFive} alt="Image" />
                    </div>
                </Slider>
            </div>
        </section>
    )
}
export default TheKong