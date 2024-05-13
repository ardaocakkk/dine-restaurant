import Image from "next/image";
import Divider from "@/app/ui/cards/Divider";


export default function HomePageCard(props) {
    const isReversed = props.reversed;
    return (
            <div className={`lg:flex lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} `}>
                <Image className={`mx-auto  relative shadow-2xl lg:m-0 ${isReversed ? 'lg:mr-[165px]' : ' lg:ml-[165px]'}   `} src={props.png} alt={props.alt}/>
                <div className={`lg:flex lg:flex-col  lg:my-auto lg:ml-[125px] ${isReversed ? 'lg:mr-[195px]' : 'lg:ml-[125px]'} ` }>
                <Divider/>
                <div className={'mt-6 '}>
                    <h1 className={"headingL text-center lg:text-start"}>{props.title1}</h1>
                    <h1 className={"headingL text-center lg:text-start"}>{props.title2}</h1>
                </div>
                <div className={`mt-[13px] md:mx-auto md:w-[457px] md:h-[90px]   `}>
                    <p className={"text-center mx-2 lg:text-start"}>{props.description}</p>
                </div>
                </div>
            </div>
    );
}