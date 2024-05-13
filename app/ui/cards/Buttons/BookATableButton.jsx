export default function BookATableButton(props) {
    return  (
        <>
            <button className={`${props.marginTop} lg:m-0 lg:mt-[40px] w-[245px] mx-auto h-[64px] border border-1 bg-codGray text-white flex hover:bg-white hover:text-Mirage transition duration-500`}>
                <h1 className={"headingS justify-center m-auto "}> BOOK A TABLE </h1>
            </button>
        </>
    )
}