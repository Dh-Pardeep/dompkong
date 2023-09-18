import React, { Component } from "react";
// import Slider from "react-slick";
import AboutIMage from '../assets/image/png/aboutimage.png'
import AboutIMage3 from '../assets/image/png/aboutimage3.png'
import AboutIMage2 from '../assets/image/png/Aboutimage2.png'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      Arrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="relative ">
        <div className="blur-[131px] bg-[#FDDA60] w-[216px] h-[216px] absolute start-[50%] translate-x-[-50%] md:translate-x-0  md:start-[63%] top-[50%] translate-y-[-50%] -z-10"></div>
        <div className="my_container ">
          <div className="flex items-center md:flex-row flex-col py-10 md:pt-[60px] md:pb-[50px] lg:pt-[100px] lg:pb-[86px]">
            <div className="flex flex-col w-full  md:w-3/6"data-aos="fade-right" data-aos-delay="500" data-aos-easing="linear"  data-aos-duration="1500">
              <h2 className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none">ABOUT </h2>
              <p className="text-white font-normal text-[14px] sm:text-base max-w-[462px]">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
            </div>
            <div className="flex items-center justify-center w-full lg:w-3/6 mt-[60px]" data-aos="zoom-in" data-aos-delay="500" data-aos-easing="linear"  data-aos-duration="1500">
              <div class=" overflow-hidden h-[300px] w-full flex justify-center items-center bg-transparent">
                <div class="slider-box-ABout">
                  <div class="carousel cursor-pointer flex items-center justify-center">
                    <div class="carousel-item it1">
                      <img className="w-full" src={AboutIMage2} alt="" />
                    </div>
                    <div class="carousel-item it2">
                      <img className="w-full" src={AboutIMage} alt="" />
                    </div>
                    <div class="carousel-item it3">
                      <img className="w-full" src={AboutIMage3} alt="" />
                    </div>
                    <div class="carousel-item it4">
                      <img className="w-full" src={AboutIMage2} alt="" />
                    </div>
                    <div class="carousel-item it5">
                      <img className="w-full" src={AboutIMage} alt="" />
                    </div>
                    <div class="carousel-item it6">
                      <img className="w-full" src={AboutIMage3} alt="" />
                    </div>
                    <div class="carousel-item it7">
                      <img className="w-full" src={AboutIMage2} alt="" />
                    </div>
                    <div class="carousel-item it8">
                      <img className="w-full" src={AboutIMage} alt="" />
                    </div>
                    <div class="carousel-item it9">
                      <img className="w-full" src={AboutIMage3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}