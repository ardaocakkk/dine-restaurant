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
import {Button, Input, InputGroup, InputRightAddon, InputRightElement} from '@chakra-ui/react'
import Link from "next/link";
import plus from "../../public/icons/icon-plus.svg";
import minus from "../../public/icons/icon-minus.svg";
import arrow from "../../public/icons/icon-arrow.svg";
import { Select } from '@chakra-ui/react'

export default function Booking() {
    const [readyBg, setReadyBg] = useState();
    const [heroBg, setHeroBg] = useState();
    const [peopleSize, setPeopleSize] = useState(1);


    const increment = () => {
        setPeopleSize(peopleSize + 1);
    }
    const decrement = () => {
        if (peopleSize > 1) {
            setPeopleSize(peopleSize - 1);
        }
    }

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
            <div className={'relative flex justify-center lg:justify-start  '}>
                <Image src={heroBg} alt={"mobile bg"} />
                <div className={'absolute top-0 lg:ml-[165px] '} >
                    <div>
                <Link href={'/'}>  <Image src={dine} alt={'asd'} className={' mt-[65px] mx-auto md:m-0 md:mt-[56px] lg:m-0 lg:mt-[49px]  '}  /></Link>
                    </div>
                    <div className={'mt-[44px] text-white lg:mt-[153px] lg:w-[445px] md:w-full  '}>
                        <h1 className={'headingXL w-full text-center text-2xl lg:text-start'}>Reservations</h1>
                        <div className={'w-[327px] mt-4 lg:w-full md:w-[573px]  '}>
                        <p className={'text-xl md:text-center text-center lg:text-start'}>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                        </div>
                        <button className={`md:hidden mt-[19px] lg:m-0 lg:mt-[40px] w-[245px] mx-auto h-[64px] border border-1  text-white flex hover:bg-white hover:text-Mirage transition duration-500`}>
                            <h1 className={"headingS justify-center m-auto "}> RESERVE A PLACE </h1>
                        </button>
                        </div>
                </div>

            </div>
            {/*form*/}
            <div className={'relative w-[327px] h-[370px] form-shadow mb-3 lg:mb-5 mx-auto lg:m-0'}>
                <div className={'bottom-24 lg:right-0 px-4 py-4 bg-white relative text-white text-center items-center mx-auto justify-center  w-full'}>
                    <div className={''}>
                        <Input variant='flushed' placeholder='Name' />
                    </div>
                    <div className={'mt-3 px-3'}>
                        <Input variant='flushed' placeholder='Email' />
                    </div>
                    <div className={'mt-3 text-black px-2'}>
                        <h1 className={'text-start'}>Pick a Date</h1>
                        <div className={'flex px-2'}>
                            <div className={''}>
                            <Input variant='flushed' placeholder='MM'  />
                            </div>
                            <div className={'mx-2'}>
                            <Input variant='flushed' placeholder='DD' />
                            </div>
                            <div>
                            <Input variant='flushed' placeholder='YYYY' />
                            </div>
                        </div>
                    </div>
                    <div className={'mt-3 text-black px-2'}>
                        <h1 className={'text-start'}>Pick a Time</h1>
                        <div className={'flex px-2'}>
                            <div className={''}>
                                <Input variant='flushed' placeholder='09'  />
                            </div>
                            <div className={'mx-2'}>
                                <Input variant='flushed' placeholder='00' />
                            </div>
                            <div className={'flex'}>
                                <InputGroup >
                                    <Select>
                                        <option value="am">am</option>
                                        <option value="pm">pm</option>
                                    </Select>

                                </InputGroup>
                            </div>
                        </div>
                    </div>
                    <div className={'mt-3'}>
                        <div className={'flex justify-between px-3'}>
                            <Image onClick={decrement} src={minus} alt={"minus icon"} className={'w-[full] h-full my-auto cursor-pointer'} />
                            <h1 className={'text-black headingL m-auto'}> {peopleSize} people</h1>
                           <Image onClick={increment} src={plus} alt={"plus icon"} className={'w-[full] h-full my-auto cursor-pointer'}/>
                        </div>
                        <div className={`w-full border-b border-b-beaver `}></div>
                    </div>
                    <div>
                        <button className={`  w-full mt-[19px] bg-black lg:m-0 lg:mt-[40px] w-[245px] mx-auto h-[64px] border border-1  text-white flex hover:bg-white hover:text-Mirage transition duration-500`}>
                            <h1 className={"headingS justify-center m-auto "}> MAKE RESERVATION </h1>
                        </button>
                    </div>
                </div>
            </div>


            <Footer isBooking={true}  img={readyBg} />
        </>
    )
}