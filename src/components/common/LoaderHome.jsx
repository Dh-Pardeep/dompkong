import React, { useEffect, useState } from "react";
import Preloader_img from '../../assets/image/png/Thekong.png'
function LoaderHome() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center">
            <div className=" relative flex justify-center items-center">
            <h1 className='text-white text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px]  font-Azo text-center max-w-[539px] ms-auto me-4 leading-[70px] inline-block font-normal '>    WELCOME <div>   TO  <span className='text-[#F1C85D] relative  after:contents-[""] after:bg-[#F1C85D] after:w-full after:left-0 after:bottom-0 after:h-[5px] after:absolute'>DOMPKONG</span></div></h1>
              <img className="w-4/12 Preloader_img animation_preloader me-auto" src={Preloader_img} alt="" />
              <div className=' PreloaderShadow position-absolute '></div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default LoaderHome;