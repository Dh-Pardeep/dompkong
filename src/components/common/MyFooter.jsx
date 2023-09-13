import React from 'react'
import { FooterBoat, FooterDimond, FooterDiscord, FooterMIcon, FooterTelegram, FooterTwitter, } from './icon'

const MyFooter = () => {
    return (
        <div className='pb-[56px]'>
            <div className="my_container">
                <div className='flex justify-center  py-[27px] '>
                    <div className=' transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <FooterTwitter />
                    </div>
                    <div className='mx-[24px] transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <FooterBoat />
                    </div>
                    <div className=' transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <FooterDimond />
                    </div>
                    <div className='mx-[24px] transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <FooterDiscord />
                    </div>
                    <div className=' transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <FooterMIcon />
                    </div>
                    <div className='ms-[24px] transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <FooterTelegram />
                    </div>
                </div>
            </div>
            <div className='border-[1px] border-[white] '></div>
        </div>
    )
}

export default MyFooter