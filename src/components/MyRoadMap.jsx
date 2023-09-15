import React from 'react'
import TheKingKong from '../assets/image/webp/RoadmapPic.webp'
import CircelImage from '../assets/image/png/CircelImage.png'
const MyRoadMap = () => {
    return (
        <section>
            <div className="container px-4 md:px-10 mx-auto xxl:px-[130px] md:pb-[100px]">
                <h2 className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none  text-center pt-[120px] pb-[70px]">ROADMAP</h2>
                <div className='relative ' >
                    <div className='relative md:pt-[70px]'>
                        <img className='mx-auto md:ms-0 mb-8 md:mb-0' data-aos="zoom-in" data-aos-delay="1200" src={TheKingKong} alt="image" />
                        <img className='absolute top-[-5%] left-[-10%] hidden md:block' src={CircelImage} alt="image" />=
                    </div>
                    <div  data-aos="fade-right" data-aos-delay="1200" className='phase_hover before:transition-all before:ease-linear before:duration-200   flex items-center flex-col xs:flex-row md:absolute top-[0px] right-[50px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] before:cursor-pointer xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-38%] xxl:before:left-[-41%] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden beforeline xl:block w-[121px] transition-all ease-linear duration-200 h-[3px] before:transition-all before:ease-linear cursor-pointer before:duration-200 after:transition-all after:ease-linear after:duration-200 bg-[white] absolute xxl:left-[-27%] left-[-25%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'>
                        </div>
                        <div className='mb-8 md:mb-0 cursor-pointer persent  '>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] transition-all ease-linear duration-200  w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>20%</h2>
                        </div>
                        <div className='xs:ps-[42px] mb-8 md:mb-0 flex items-center xs:items-start  flex-col PHASE  '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0  transition-all ease-linear duration-200 cursor-pointer'>PHASE 1</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base font-normal text-center xs:text-start lg:max-w-[540px] cursor-pointer md:max-w-[290px] transition-all ease-linear duration-200'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>
                    </div>
                    <div  data-aos="fade-right" data-aos-delay="1300" className='phase_hover  before:transition-all before:ease-linear before:duration-200 before:cursor-pointer flex items-center flex-col xs:flex-row md:absolute top-[25%] right-[12px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-30%] xxl:before:left-[-34%] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden xl:block beforeline transition-all ease-linear duration-200 w-[95px] h-[3px] bg-[white] absolute xxl:left-[-22%] left-[-21%] top-[50%] translate-y-[-50%] before:transition-all before:ease-linear before:duration-200  cursor-pointer after:transition-all after:ease-linear after:duration-200  before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer persent'>
                            <h2 className='font-Montserrat xl:text-[20px] transition-all ease-linear duration-200 text-[18px] lg:text-[20px] w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>40%</h2>
                        </div>
                        <div className=' xs:ps-[37px] md:ps-[42px] mb-8 md:mb-0 flex items-center xs:items-start  PHASE  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0 transition-all ease-linear duration-200  cursor-pointer'>PHASE 2</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base text-center xs:text-start font-normal xl:max-w-[500px] lg:max-w-[480px]  cursor-pointer  md:max-w-[225px] transition-all ease-linear duration-200'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                        </div>
                    </div>
                    <div  data-aos="fade-right" data-aos-delay="1400" className='phase_hover  before:transition-all before:ease-linear before:duration-200  before:cursor-pointer flex items-center flex-col xs:flex-row md:absolute  top-[54%] lg:top-[52%] right-[5px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-30%] xxl:before:left-[-34%] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden xl:block before:transition-all before:ease-linear before:duration-200 after:transition-all after:ease-linear after:duration-200 beforeline transition-all ease-linear duration-200 w-[90px] h-[3px] bg-[white] absolute xxl:left-[-22%]  cursor-pointer left-[-21%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer persent'>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center transition-all ease-linear duration-200  bg-[white] text-black font-[900]'>60%</h2>
                        </div>
                        <div className=' xs:ps-[37px] md:ps-[38px] mb-8 md:mb-0 flex items-center xs:items-start  PHASE flex-col '>
                            <h2 className=' font-Azo font-normal text-[20] text-white mb-4 xs:mb-0 transition-all ease-linear duration-200  cursor-pointer'>PHASE 3</h2>
                            <p className=' font-Montserrat text-white text-[14px] lg:text-base text-center xs:text-start font-normal xl:max-w-[480px]  cursor-pointer lg:max-w-[460px] md:max-w-[214px] transition-all ease-linear duration-200'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                        </div>
                    </div>
                    <div  data-aos="fade-right" data-aos-delay="1500" className='phase_hover  before:transition-all before:ease-linear before:duration-200  before:cursor-pointer flex items-center flex-col xs:flex-row md:absolute top-[78%] right-[5px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-30%] xxl:before:left-[-208px] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden beforeline before:transition-all before:ease-linear before:duration-200 after:transition-all after:ease-linear after:duration-200 transition-all ease-linear duration-200 xl:block w-[97px] h-[3px] bg-[white] absolute xxl:left-[-22%] left-[-20%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white]  cursor-pointer before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer persent'>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center transition-all ease-linear duration-200 bg-[white] text-black font-[900]'>80%</h2>
                        </div>
                        <div className=' xs:ps-[37px] md:ps-[42px] mb-8 md:mb-0 flex items-center xs:items-start PHASE  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0 transition-all ease-linear duration-200  cursor-pointer'>PHASE 4</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base text-center xs:text-start font-normal xl:max-w-[500px] lg:max-w-[480px]  cursor-pointer md:max-w-[244px] transition-all ease-linear duration-200'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                        </div>
                    </div>
                    <div  data-aos="fade-right" data-aos-delay="1600" className='phase_hover  before:transition-all before:ease-linear before:duration-200 before:cursor-pointer flex items-center flex-col xs:flex-row md:absolute bottom-[-21%] right-[50px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-38%] xxl:before:left-[-42%] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden beforeline before:transition-all before:ease-linear before:duration-200 after:transition-all after:ease-linear after:duration-200  cursor-pointer transition-all ease-linear duration-200  xl:block w-[121px] h-[3px] bg-[white] absolute xxl:left-[-27%] left-[-25%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer persent'>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center transition-all ease-linear duration-200  bg-[white] text-black font-[900]'>100%</h2>
                        </div>
                        <div className='xs:ps-[42px] mb-8 md:mb-0 flex items-center xs:items-start PHASE  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0 transition-all ease-linear duration-200  cursor-pointer'>PHASE 5</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base text-center xs:text-start font-normal lg:max-w-[540px]  cursor-pointer md:max-w-[290px] transition-all ease-linear duration-200'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyRoadMap