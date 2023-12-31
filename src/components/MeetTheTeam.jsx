import React from 'react'
import TeamOne from '../assets/image/png/team1.png'
import { InstagramIconTem, TwitterIconTeam } from './common/icon'
import { Link } from 'react-router-dom'
import { MeetTheTeamMap } from '../Mapdata'
const MeetTheTeam = () => {
    return (
        <section>
            <div className="my_container">
                <h2 className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none text-center pt-[100px] pb-[50px]">MEET THE TEAM</h2>
                {MeetTheTeamMap.map((data) => {
                    return (
                        <div>
                            <div className='border-[1px] border-solid border-[#FDDA60] shadow-[0px_4px_20px] shadow-[#FDDA60]' data-aos="zoom-in" data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="2000" >
                            </div>
                            <div className='pt-[30px] pb-[65px] flex lg:justify-between flex-col lg:flex-row '>
                                <div className='text-center lg:text-start' data-aos="fade-right" data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="2100"    >
                                    <h2 className='text-white font-Montserrat text-[24px] font-bold'>{data.headingLeft}</h2>
                                    <p className='text-white font-Montserrat text-[20px] font-normal opacity-[0.9] pt-[6px]'>{data.ParaLeft}</p>
                                    <div>
                                        <img className='rounded-[20px] border-[3px] border-solid border-[#FDDA60] shadow-[0px_-3px_28px_-3px] shadow-[#FDDA60] mt-[32px] mx-auto lg:ms-0 transition-all ease-linear duration-300 cursor-pointer hover:scale-[0.98]' src={data.img} alt="image" />
                                    </div>
                                </div>
                                <div className='text-center lg:text-start mt-8 lg:mt-0' data-aos="fade-left" data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="1200">
                                    <h2 className='text-white font-Montserrat text-[24px] font-bold'>{data.headingRight}</h2>
                                    <p className='text-white font-Montserrat text-[20px] font-normal opacity-[0.9] pt-[6px] pb-[35px]'>{data.ParaRight}</p>
                                    <p className='text-white font-Montserrat text-[16px] font-normal opacity-[0.9]  lg:text-start mx-auto max-w-[570px]'>{data.paragraphOne}</p>
                                    <p className='text-white font-Montserrat text-[16px] font-normal opacity-[0.9]   lg:text-start pt-[15px] mx-auto  max-w-[570px]'>{data.paragraphTwo}</p>
                                    <div className='flex justify-center lg:justify-start gap-4 mt-[25px] '>
                                        <a href='https://www.instagram.com/accounts/login/' target='_blank'>{data.svgiconOne}</a>
                                        <a href='https://twitter.com/'target='_blank'>{data.svgiconTwo}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                )};
            </div>
        </section>
    )
}

export default MeetTheTeam