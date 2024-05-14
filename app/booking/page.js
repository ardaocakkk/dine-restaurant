"use client";
import {useEffect, useState} from "react";
import heroBgDesktop from "../../public/booking/hero-bg-desktop@2x.jpg";
import heroBgTablet from "../../public/booking/hero-bg-tablet.jpg";
import heroBgMobile from "../../public/booking/hero-bg-mobile@2x.jpg";
import readyBgMobile from "../../public/homepage/ready-bg-mobile.jpg"
import readyBgDesktop from "../../public/homepage/ready-bg-desktop.jpg"
import readyBgTablet from "../../public/homepage/ready-bg-tablet.jpg"
import dine from "../../public/logo.svg"
import Image from "next/image";
import Footer from "@/app/ui/Layout/Footer";
import Divider from "@/app/ui/cards/Divider";
import { Input } from '@chakra-ui/react'

export default function Booking() {
    const [readyBg, setReadyBg] = useState();
    const [heroBg, setHeroBg] = useState();
    useEffect(() => {
        function handleResize() {
            // Determine device size here (e.g., based on window.innerWidth)
            const width = window.innerWidth;
            if (width >= 1024) {

                setDeviceSize('large');
                setReadyBg(readyBgDesktop);
                setHeroBg(heroBgDesktop);

            } else if (width < 1024 && width >= 768) {
                setDeviceSize('medium');
                setReadyBg(readyBgTablet);
                setHeroBg(heroBgTablet);

            } else {
                setDeviceSize('small');
                setReadyBg(readyBgMobile);
                setHeroBg(heroBgMobile);

            }
        }
        handleResize();
            window.addEventListener('resize', handleResize);

            // Cleanup function to remove event listener
            return () => {
                window.removeEventListener('resize', handleResize);
            };
    }
     ,[]);

    const [deviceSize, setDeviceSize] = useState('');
    return (
        <>
            <div className={'relative flex justify-center '}>
                <Image src={heroBg} alt={"mobile bg"} />
                <div className={'absolute top-0'} style={{ left: '50%', transform: 'translateX(-50%)' }}>
                    <div>
                <Image src={dine} alt={'asd'} className={' mt-[65px] mx-auto'}  />
                    </div>
                    <div className={'mt-[44px] text-white '}>
                        <h1 className={'headingXL w-full text-center text-2xl'}>Reservations</h1>
                        <div className={'w-[327px] mt-4 '}>
                        <p className={'text-xl'}>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                        </div>
                        <button className={` mt-[19px] lg:m-0 lg:mt-[40px] w-[245px] mx-auto h-[64px] border border-1  text-white flex hover:bg-white hover:text-Mirage transition duration-500`}>
                            <h1 className={"headingS justify-center m-auto "}> BOOK A TABLE </h1>
                        </button>
                        </div>
                </div>

            </div>
            {/*form*/}
            <div className={'relative w-[327px] h-[585px] mx-auto'}>
                <div className={'bottom-24 px-3 py-3 bg-white relative text-white text-center items-center mx-auto justify-center  w-full'}>
                    <div>
                        <Input variant='flushed' placeholder='Name' />
                    </div>
                    <div className={'mt-3'}>
                        <Input variant='flushed' placeholder='Email' />
                    </div>
                    <div className={'mt-3 text-black'}>
                        <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
                    </div>
                    <div className={'mt-3'}>
                        <Input variant='flushed' placeholder='Email' />
                    </div>
                </div>
            </div>


            <Footer isBooking={true}  img={readyBg} />
        </>
    )
}