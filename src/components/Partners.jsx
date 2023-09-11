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
        <section className=''>
            <div className="my_container">
                <h2 className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none text-center pt-[120px] pb-[50px]">PARTNERS</h2>
            </div>
           <div className='Slider_1'>
           <Slider {...settings}>
                <div>
                   <img src={SliderOne} alt="" />
                </div>                <div>
                <img src={SliderTwo} alt="" />
                </div>
                <div>
                <img src={SliderThree} alt="" />
                </div>
                <div>
                <img src={SliderFour} alt="" />
                </div>
            </Slider>
           </div>
        </section>
    )
}

export default Partners