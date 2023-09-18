import React from 'react'
import Slider from "react-slick";
import SliderOne from '../assets/image/png/slider1.png'
import SliderTwo from '../assets/image/png/slider2.png'
import SliderThree from '../assets/image/png/slider3.png'
import SliderFour from '../assets/image/png/slider4.png'
import SliderLine from '../assets/image/svg/SliderLine.svg'
const Partners = () => {
    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 4,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <section className=''>
            <div className="my_container">
                <h2 data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="1700" className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none text-center pt-[80px] md:pt-[120px] pb-[50px]">PARTNERS</h2>
            </div>
            <div className='Slider_1'data-aos="zoom-in" data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="1800">
                <Slider {...settings} >
                    <div>
                        <div className='relative'>
                            <span className='before:absolute before:contents-[*] before:bg-[#FDDA60] before:h-[128px] before:w-[3px] before:rotate-[20deg]   before:right-[40px] before:top-[-40px] before:shadow-[0px_4px_20px_1px] before:shadow-[#FDDA60]'></span>
                            <img className='cursor-pointer' src={SliderOne} alt="Image" />
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <span className='before:absolute before:contents-[*] before:bg-[#FDDA60] before:h-[128px] before:w-[3px] before:rotate-[20deg]   before:right-[40px] before:top-[7px] before:shadow-[0px_4px_20px_1px] before:shadow-[#FDDA60]'></span>
                            <img className='cursor-pointer' src={SliderTwo} alt="Image" />
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <span className='before:absolute before:contents-[*] before:bg-[#FDDA60] before:h-[128px] before:w-[3px] before:rotate-[20deg]   before:right-[40px] before:top-[-20px] before:shadow-[0px_4px_20px_1px] before:shadow-[#FDDA60]'></span>
                            <img className='cursor-pointer' src={SliderThree} alt="Image" />
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <span className='before:absolute before:contents-[*] before:bg-[#FDDA60] before:h-[128px] before:w-[3px] before:rotate-[20deg]   before:right-[40px] before:top-[-20px] before:shadow-[0px_4px_20px_1px] before:shadow-[#FDDA60]'></span>
                            <img className='cursor-pointer' src={SliderFour} alt="Image" />
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <span className='before:absolute before:contents-[*] before:bg-[#FDDA60] before:h-[128px] before:w-[3px] before:rotate-[20deg]   before:right-[40px] before:top-[-40px] before:shadow-[0px_4px_20px_1px] before:shadow-[#FDDA60]'></span>
                            <img className='cursor-pointer' src={SliderOne} alt="Image" />
                        </div>
                    </div>
                    <div className='relative'>
                        <span className='before:absolute before:contents-[*] before:bg-[#FDDA60] before:h-[128px] before:w-[3px] before:rotate-[20deg]   before:right-[40px] before:top-[7px] before:shadow-[0px_4px_20px_1px] before:shadow-[#FDDA60]'></span>
                        <img className='cursor-pointer' src={SliderTwo} alt="Image" />
                    </div>
                    <div>
                        <div className='relative'>
                            <span className='before:absolute before:contents-[*] before:bg-[#FDDA60] before:h-[128px] before:w-[3px] before:rotate-[20deg]   before:right-[40px] before:top-[-20px] before:shadow-[0px_4px_20px_1px] before:shadow-[#FDDA60]'></span>
                            <img className='cursor-pointer' src={SliderThree} alt="Image" />
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <span className='before:absolute before:contents-[*] before:bg-[#FDDA60] before:h-[128px] before:w-[3px] before:rotate-[20deg]   before:right-[40px] before:top-[-20px] before:shadow-[0px_4px_20px_1px] before:shadow-[#FDDA60]'></span>
                            <img className='cursor-pointer' src={SliderFour} alt="Image" />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Partners