import Image from "next/image";
import Divider from "@/app/ui/cards/Divider";


export default function HomePageCard(props) {
    return (
            <div className={"max-w-screen"}>
                <Image className={"mx-auto  relative   "} src={props.png} alt={props.alt}/>
                <Divider/>
                <div className={'mt-6 max-w-screen'}>
                    <h1 className={"headingL text-center"}>{props.title1}</h1>
                    <h1 className={"headingL text-center"}>{props.title2}</h1>
                </div>
                <div className={"mt-[13px] md:mx-auto  md:h-[90px] "}>
                    <p className={"text-center mx-2"}>{props.description}</p>
                </div>
            </div>
    );
}