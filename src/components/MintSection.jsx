import React from 'react'
import { useState } from "react";
import BottelImg from '../assets/image/webp/Bottelimg.webp'
import { Link } from 'react-router-dom';
const MintSection = () => {
    const [count, setCount] = useState(1);
    function increase() {
        setCount(count + 1);
    };

    function decrease() {
        if (count > 1) {
            setCount(count - 1);
        };
    };
    if (0 > 10) {
        document.getElementsByClassName("if_else").style.display = "none";
    }

    console.log(count);
    return (
        <section>
            <div className="my_container">
                <div className='flex items-center flex-col md:flex-row justify-between mt-[100px] md:mt-[180px]'>
                    <div className='w-full md:w-6/12 '>
                        <img className='mx-auto' src={BottelImg} alt="image" />
                    </div>
                    <div className='w-full md:w-6/12 pt-[50px]'>
                        <div className='md:ps-5'>
                            <h2 className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none  pb-[50px]">MINT NFT</h2>
                            <div className='flex flex-col sm:flex-row justify-between'>
                                <div >
                                    <div>
                                        <h3 className='text-white font-Montserrat xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px]  font-extrabold'>9999</h3>
                                        <h4 className='text-white font-Montserrat xl:text-base md:text-[14px] font-normal'>of 10,000 minted</h4>
                                    </div>
                                    <div className='mt-[33px]'>
                                        <h3 className='text-white font-Montserrat xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] font-extrabold'>Max 9 </h3>
                                        <h4 className='text-white font-Montserrat text-base md:text-[14px] font-normal'>NFTs per transaction</h4>
                                    </div>
                                </div>
                                <div >
                                    <div className='mt-[33px] sm:mt-0'>
                                        <h3 className='text-white font-Montserrat xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] font-extrabold'>.2 ETH</h3>
                                        <h4 className='text-white font-Montserrat text-base md:text-[14px] font-normal'>per NFT</h4>
                                    </div>
                                    <div className='mt-[33px]'>
                                        <h3 className='text-white font-Montserrat xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] font-extrabold'>Max 2</h3>
                                        <h4 className='text-white font-Montserrat text-base md:text-[14px] font-normal'>Copy
                                            Transaction per wallet</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-[50px]'>
                                <button className='px-[31px] pb-[8px] bg-white rounded-[4px] text-[36px] font-extrabold  ' onClick={decrease}>-</button>
                                <div className='w-full py-[13px] text-white text-center text-[36px] font-extrabold font-Montserrat border-white border-[3px] mx-[12px] rounded-[4px]'>
                                    <span className='if_else'>0</span>{count}
                                </div>
                                <button className='px-[24px] pb-[8px] bg-white rounded-[4px] text-[36px] font-extrabold  ' onClick={increase}>+</button>
                            </div>
                            <Link className='text-black  font-Azo lg:text-[24px] md:text-[22px] sm:text-[20px] text-[19px]   font-normal common_btn bg-[#FDDA60] rounded-[4px] px-6 pt-4 pb-[13px] text-center mt-[30px] w-full inline-block'>MINT NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MintSection