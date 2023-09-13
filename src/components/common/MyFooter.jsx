import React from 'react'
import { FooterBoat, FooterDimond, FooterDiscord, FooterMIcon, FooterTelegram, FooterTwitter, } from './icon'

const MyFooter = () => {
    return (
        <div className='pb-[56px]'>
            <div className="my_container">
                <div className='flex justify-center  py-[27px] '>
                    <div className=' transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <a href="https://twitter.com/" target='_blank'><FooterTwitter /></a>
                    </div>
                    <div className='mx-[24px] transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                       <a href="https://www.boat-lifestyle.com/account/login" target='_blank'> <FooterBoat /></a>
                    </div>
                    <div className=' transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <a href="https://www.google.co.in/" target='_blank'><FooterDimond /></a>
                    </div>
                    <div className='mx-[24px] transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                       <a href="https://discord.com/" target='_blank'> <FooterDiscord /></a>
                    </div>
                    <div className=' transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <a href="https://www.google.co.in/" target='_blank'><FooterMIcon /></a>
                    </div>
                    <div className='ms-[24px] transition-all ease-linear duration-300 hover:translate-y-[-8px]'>
                        <a href="https://telegram.org/" target='_blank'><FooterTelegram /></a>
                    </div>
                </div>
            </div>
            <div className='border-[1px] border-[white] '></div>
        </div>
    )
}

export default MyFooter