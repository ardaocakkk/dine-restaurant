import Image from "next/image";
import dine from "@/public/logo.svg";

export default function Footer(props) {
    return <>
        <footer className={'w-full '}>
        <div className={'relative w-full h-fit'}>
            <Image className={'w-full'} src={props.img} alt={"ready"} />
            <div className={'absolute inset-0 flex flex-col items-center justify-center text-white z-10  '}>
                    <div className={"mt-[64px]  justify-center items-center text-center"}>
                    <div className={"flex flex-col items-center"}>
                        <h1 className={"headingL"}>
                            Ready to make a reservation?
                        </h1>
                        <button className={`mt-[20px] w-[245px] mx-auto h-[64px] border border-1   text-white flex hover:bg-white hover:text-Mirage transition duration-500`}>
                            <h1 className={"headingS justify-center m-auto "}> BOOK A TABLE </h1>
                        </button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        <div className={'h-fit bg-codGray text-white footer'}>
            <div className={'flex flex-col md:grid md:grid-cols-2 lg:justify-center lg:items-center mx-auto pt-[80px] '}>
                <Image className={'md:ml-[39px] justify-center mx-auto '} src={dine} alt={"dine logo"}/>
                <div className={'flex flex-col lg:grid lg:grid-cols-2 items-center justify-center'}>
                    <div className={'md:w-full text-center md:text-start mt-[42px]'}>
                    <p>Marthwaite, Sedbergh</p>
                    <p className={'mt-[20px]'}>Cumbria</p>
                    <p className={'mt-[20px]'}>+00 44 123 4567</p>
                </div>
                <div className={'md:w-full  text-center md:text-start mt-[42px]'}>
                    <p>OPEN TIMES</p>
                    <p className={'mt-[20px]'}>MON - FRI: 09:00 AM - 10:00 PM</p>
                    <p className={'mt-[20px] pb-10'}>SAT - SUN: 09:00 AM - 11:30 PM</p>
                </div>
                </div>
            </div>
        </div>
        </footer>
    </>
}