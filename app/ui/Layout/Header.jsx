import Image from "next/image";
import dine from "@/public/logo.svg";
import BookATable from "@/app/ui/cards/Buttons/BookATableButton";

export default function Header(props) {
    return (
        <>
            <div className={'absolute  text-white lg:items-start lg:w-1/3 bg-codGray md:max-w-screen md:mx-auto z-10 top-0 mt-[220px] md:mt-[400px] lg:mt-[40px] lg:ml-[103px] w-full max-w-screen-xl h-fit flex flex-col items-center lg:max-w-screen '}>
                <div className={'mt-5 lg:m-0 '}>
                    <Image src={props.img} alt={"dine logo"} />
                </div>
                <div className={"mt-3  lg:mt-[153px] "}>
                    <div className={"flex  flex-col   items-center lg:items-start "}>
                        <h1 className={"headingXL"}>
                            Exquisite dining
                        </h1>
                        <h1 className={"headingXL"}>since 1989</h1>
                    </div>
                    <div className={"text-center mx-3 mt-[21px] md:w-[573px] md:h-[60px] lg:items-start lg:text-start"}>
                        <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                    </div>
                    <BookATable
                        marginTop={"mt-[53px]"}
                    />
                </div>
                <div>
                </div>
            </div>
        </>
    )
}