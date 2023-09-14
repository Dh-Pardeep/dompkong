import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import MyFooter from "./common/MyFooter";
import FooterImage from '../assets/image/png/footer img.png'
function Icon({ id, open }) {
    return (
        <div>
            <div className="absolute  top-[30px] right-0">
                <svg className={`${id === open ? "rotate-[1deg]" : ""} h-5 w-5 transition-transform rotate-90`} width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.69629 1H19.6963" stroke="#FDDA60" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <div className="absolute  top-[39px] right-0">
                <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.69629 1H19.6963" stroke="#FDDA60" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
        </div>
    );
}


export function MyAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className="relative">
            <div className="header_shadow relative"></div>
            <img className="absolute w-full bg-cover bg-no-repeat bg-center h-full" src={FooterImage} alt="" />
            <div className='blur-[132px]  bg-[#FDDA60] w-[132px] h-[132px]  absolute top-[45%]  start-[50%]'></div>
            <div className="my_container ">
                <h2 data-aos="zoom-in"data-aos-delay="2000"  className="text-white font-normal text-[42px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-Azo leading-none text-center md:pt-[70px] pb-[50px] relative z-20">FAQs</h2>
                <div className=" flex justify-center pb-[80px] md:pb-[120px] relative z-20 "data-aos="zoom-in"data-aos-delay="1800" >
                    <div className="w-full lg:w-10/12 text-white">
                        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className=" pt-[25px]  pb-[13px]">
                            <AccordionHeader className="font-Montserrat md:text-[20px] text-[17px]  lg:text-[22px]  font-bold text-start  xs:max-w-none  " onClick={() => handleOpen(1)}>Arcu faucibus diam feugiat magna etiam.</AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Montserrat">
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-[#FDDA60] shadow-[0px_4px_20px_0.2px] shadow-[#FDDA60]' ></div>
                        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="pt-[25px]  pb-[13px]">
                            <AccordionHeader className="font-Montserrat md:text-[20px] text-[17px] lg:text-[22px]  font-bold text-start max-w-[270px] xs:max-w-none  " onClick={() => handleOpen(2)}>
                                Fermentum tortor aenean.
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Montserrat">
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-[#FDDA60] shadow-[0px_4px_20px_0.2px] shadow-[#FDDA60]' ></div>
                        <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="pt-[25px]  pb-[13px]">
                            <AccordionHeader className="font-Montserrat md:text-[20px] text-[17px] lg:text-[22px]  font-bold text-start  xs:max-w-none  " onClick={() => handleOpen(3)}>
                                Dictum est amet sollicitudin.
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Montserrat">
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-[#FDDA60] shadow-[0px_4px_20px_0.2px] shadow-[#FDDA60]' ></div>
                        <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className="pt-[25px]  pb-[13px]">
                            <AccordionHeader className="font-Montserrat md:text-[20px] text-[17px] lg:text-[22px]  font-bold text-start  xs:max-w-none  " onClick={() => handleOpen(4)}>Sed vulputate mi faucibus.</AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Montserrat">
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-[#FDDA60] shadow-[0px_4px_20px_0.2px] shadow-[#FDDA60]' ></div>
                        <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className="pt-[25px]  pb-[13px]">
                            <AccordionHeader className="font-Montserrat md:text-[20px] text-[17px] lg:text-[22px]  font-bold text-start  xs:max-w-none  " onClick={() => handleOpen(5)}>
                                Commodo placerat ultricies.
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Montserrat">
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-[#FDDA60] shadow-[0px_4px_20px_0.2px] shadow-[#FDDA60]' ></div>
                        <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className="pt-[25px]  pb-[13px]">
                            <AccordionHeader className="font-Montserrat md:text-[20px] text-[17px] lg:text-[22px]  font-bold text-start  xs:max-w-none  " onClick={() => handleOpen(6)}>
                                Nunc amt cusus mobi dnec.
                            </AccordionHeader>
                            <AccordionBody className=" font-normal text-[14px] md:text-base   font-Montserrat">
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </AccordionBody>
                        </Accordion>
                        <div className='border-[1px] border-solid border-[#FDDA60] shadow-[0px_4px_20px_0.2px] shadow-[#FDDA60]' ></div>
                    </div>
                </div>
            </div>
            <MyFooter/>
        </section>
    );
};
export default MyAccordion