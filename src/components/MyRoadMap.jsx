import React from 'react'
import TheKingKong from '../assets/image/webp/RoadmapPic.webp'
import CircelImage from '../assets/image/png/CircelImage.png'
const MyRoadMap = () => {
    return (
        <section>
            <div className="container px-4 md:px-10 mx-auto xxl:px-[130px] md:pb-[100px]">
                <h2 className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none  text-center pt-[120px] pb-[70px]">ROADMAP</h2>
                {/* <div className='md:hidden'>
                    <div className='relative md:pt-[70px]'>
                        <img className='mx-auto md:ms-0 mb-8 md:mb-0' src={TheKingKong} alt="image" />
                        <img className='absolute top-[-5%] left-[-10%] hidden md:block' src={CircelImage} alt="image" />=
                    </div>
                    <div className=''>
                        <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px]  w-[50px] h-[50px]  rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>20%</h2>
                        <div className='ps-[40px] mb-8 md:mb-0 flex items-start  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white'>PHASE 1</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base font-normal lg:max-w-[540px] md:max-w-[290px]'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[50px] h-[50px]  rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>40%</h2>
                        <div className=' ps-[40px] mb-8 md:mb-0 flex items-start  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white'>PHASE 2</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base font-normal xl:max-w-[500px] lg:max-w-[480px]  md:max-w-[225px]'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[50px] h-[50px]  rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>60%</h2>
                        <div className=' ps-[40px] mb-8 md:mb-0 flex items-start  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white'>PHASE 3</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base font-normal xl:max-w-[480px] lg:max-w-[460px] md:max-w-[214px]'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[50px] h-[50px]  rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>80%</h2>
                        <div className=' ps-[40px] mb-8 md:mb-0 flex items-start  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white'>PHASE 4</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base font-normal xl:max-w-[500px] lg:max-w-[480px]  md:max-w-[244px]'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[50px] h-[50px]  rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>100%</h2>
                        <div className='ps-[40px] mb-8 md:mb-0 flex items-start  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white'>PHASE 5</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base font-normal lg:max-w-[540px] md:max-w-[290px]'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                        </div>
                    </div>
                </div> */}
                <div className='relative ' >
                    <div className='relative md:pt-[70px]'>
                        <img className='mx-auto md:ms-0 mb-8 md:mb-0' src={TheKingKong} alt="image" />
                        <img className='absolute top-[-5%] left-[-10%] hidden md:block' src={CircelImage} alt="image" />=
                    </div>
                    <div className='phase_hover flex items-center flex-col xs:flex-row md:absolute top-[0px] right-[50px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-38%] xxl:before:left-[-41%] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden xl:block w-[121px] h-[3px] bg-[white] absolute xxl:left-[-27%] left-[-25%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer persent'>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px]  w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>20%</h2>
                        </div>
                        <div className='xs:ps-[42px] mb-8 md:mb-0 flex items-center xs:items-start  flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0'>PHASE 1</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base font-normal text-center xs:text-start lg:max-w-[540px] md:max-w-[290px]'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col xs:flex-row md:absolute top-[25%] right-[12px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-30%] xxl:before:left-[-34%] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden xl:block w-[95px] h-[3px] bg-[white] absolute xxl:left-[-22%] left-[-21%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer '>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>40%</h2>
                        </div>
                        <div className=' xs:ps-[37px] md:ps-[42px] mb-8 md:mb-0 flex items-center xs:items-start    flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0'>PHASE 2</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base text-center xs:text-start font-normal xl:max-w-[500px] lg:max-w-[480px]  md:max-w-[225px]'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col xs:flex-row md:absolute  top-[54%] lg:top-[52%] right-[5px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-30%] xxl:before:left-[-34%] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden xl:block w-[90px] h-[3px] bg-[white] absolute xxl:left-[-22%] left-[-21%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer '>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>60%</h2>
                        </div>
                        <div className=' xs:ps-[37px] md:ps-[38px] mb-8 md:mb-0 flex items-center xs:items-start   flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0'>PHASE 3</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base text-center xs:text-start font-normal xl:max-w-[480px] lg:max-w-[460px] md:max-w-[214px]'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col xs:flex-row md:absolute top-[78%] right-[5px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-30%] xxl:before:left-[-208px] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden xl:block w-[97px] h-[3px] bg-[white] absolute xxl:left-[-22%] left-[-20%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer '>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>80%</h2>
                        </div>
                        <div className=' xs:ps-[37px] md:ps-[42px] mb-8 md:mb-0 flex items-center xs:items-start   flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0'>PHASE 4</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base text-center xs:text-start font-normal xl:max-w-[500px] lg:max-w-[480px]  md:max-w-[244px]'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col xs:flex-row md:absolute bottom-[-21%] right-[50px] xl:right-0 xl:before:contents-[*] xl:before:w-[30px] xl:before:h-[30px] xl:before:bg-[#FDDA60] xl:before:top-[50%] xl:before:translate-y-[-50%] xl:before:left-[-38%] xxl:before:left-[-42%] xl:before:absolute xl:before:rounded-[50%]'>
                        <div className='hidden xl:block w-[121px] h-[3px] bg-[white] absolute xxl:left-[-27%] left-[-25%] top-[50%] translate-y-[-50%]   before:contents-[*] before:w-[12px] before:h-[10px] before:bg-[white] before:top-[50%] before:translate-y-[-50%] before:left-[0%]  before:absolute before:rounded-[50%] after:contents-[*] after:w-[12px] after:h-[10px] after:bg-[white] after:top-[50%] after:translate-y-[-50%] after:right-[0%]  after:absolute after:rounded-[50%]'></div>
                        <div className='mb-8 md:mb-0 cursor-pointer '>
                            <h2 className='font-Montserrat xl:text-[20px] text-[18px] lg:text-[20px] w-[65px] h-[65px] xl:w-[76px] xl:h-[76px] rounded-[50%]  flex items-center justify-center  bg-[white] text-black font-[900]'>100%</h2>
                        </div>
                        <div className='xs:ps-[42px] mb-8 md:mb-0 flex items-center xs:items-start   flex-col '>
                            <h2 className='font-Azo font-normal text-[20] text-white mb-4 xs:mb-0'>PHASE 5</h2>
                            <p className='font-Montserrat text-white text-[14px] lg:text-base text-center xs:text-start font-normal lg:max-w-[540px] md:max-w-[290px]'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyRoadMap