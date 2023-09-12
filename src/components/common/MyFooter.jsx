import React from 'react'
import { FooterBoat, FooterDimond, FooterDiscord, FooterMIcon, FooterTelegram, FooterTwitter, } from './icon'

const MyFooter = () => {
    return (
        <div className='pb-[56px]'>
            <div className="my_container">
                <div className='flex justify-center  py-[27px] '>
                    <FooterTwitter />
                    <div className='mx-[24px]'>
                        <FooterBoat />
                    </div>
                    <FooterDimond />
                    <div className='mx-[24px]'>
                        <FooterDiscord />
                    </div>
                    <FooterMIcon />
                    <div className='ms-[24px]'>
                        <FooterTelegram />
                    </div>
                </div>
            </div>
            <div className='border-[1px] border-[white] '></div>
        </div>
    )
}

export default MyFooter