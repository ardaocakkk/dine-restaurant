import Image from "next/image";
import salmonMobile from "@/public/homepage/salmon-mobile.jpg";

export default function MenuHighlightsItemCard(props) {
    return (
        <>
            <div className={'flex flex-col md:grid md:grid-cols-2  mx-auto justify-center items-center pt-[85px]'}>
                <div className={'md:grid md:grid-cols-2 items-center'}>
                    <Image className={'mx-auto'} src={props.img} alt={props.alt}/>
                    <div className={'text-center md:text-start mt-[38px] mb-[54px] md:w-[383px] '}>
                        <h1 className={'headingM font-semibold '}>{props.title}</h1>
                        <div className={'mt-[28px] h-[78px] w-[327px] md:w-[383px] md:h-[82px] '}>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}