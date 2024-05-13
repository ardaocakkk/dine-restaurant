import Image from "next/image";
import readyBgMobile from "@/public/homepage/ready-bg-mobile.jpg";
import dine from "@/public/logo.svg";

export default function Footer(props) {
    return <>
        <div className={'relative w-screen '}>
            <Image className={'w-screen'} src={props.img} alt={"ready"} />
            <div className={'absolute text-white  z-10 top-0 left-0 w-screen h-fit flex flex-col items-center '}>
                <div className={"mt-[64px] m-auto justify-center items-center text-center"}>
                    <div className={"flex flex-col items-center"}>
                        <h1 className={"headingL"}>
                            Ready to make a reservation?
                        </h1>
                        <button className={`mt-[20px] w-[245px] mx-auto h-[64px] border border-1  text-white flex hover:bg-white hover:text-Mirage transition duration-500`}>
                            <h1 className={"headingS justify-center m-auto "}> BOOK A TABLE </h1>
                        </button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        <div className={'h-fit w-full bg-codGray text-white footer md:w-[768px]     '}>
            <div className={'flex flex-col md:grid md:grid-cols-2  justify-center items-center m-auto pt-[80px] '}>
                <Image className={'md:ml-[39px] '} src={dine} alt={"dine logo"}/>
                <div className={'flex flex-col'}>
                <div className={'text-center md:text-start mt-[42px]'}>
                    <p>Marthwaite, Sedbergh</p>
                    <p className={'mt-[20px]'}>Cumbria</p>
                    <p className={'mt-[20px]'}>+00 44 123 4567</p>
                </div>
                <div className={'text-center md:text-start mt-[42px]'}>
                    <p>OPEN TIMES</p>
                    <p className={'mt-[20px]'}>MON - FRI: 09:00 AM - 10:00 PM</p>
                    <p className={'mt-[20px] pb-10'}>SAT - SUN: 09:00 AM - 11:30 PM</p>
                </div>
                </div>
            </div>
        </div>
    </>
}