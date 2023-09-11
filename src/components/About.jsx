import React, { Component } from "react";
// import Slider from "react-slick";
import AboutIMage from '../assets/image/webp/aboutimage.webp'
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
          <div className="flex flex-col w-full  md:w-3/6">
            <h2 className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none">ABOUT </h2>
            <p className="text-white font-normal text-[14px] sm:text-base max-w-[462px]">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
          </div>
          <div className="flex items-center justify-center w-full md:w-3/6">
            <img className="w-full mt-8 md:mt-0" src={AboutIMage} alt="Image" />
            {/* <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider> */}
          </div>
        </div>
      </div>
    </div>
    );
  }
}