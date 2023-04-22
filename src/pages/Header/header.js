import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <div className="top-0 left-0 w-full h-20 flex flex-row items-center bg-[#2DAAE1] px-16 font-roboto fixed z-20">
            <div className="w-96 h-full flex justify-center items-center">
                <Image
                    src={"/Assets/images/Icons/TopLogo.svg"}
                    width={0}
                    height={0}
                    className="w-full h-4/5"
                    alt="logo"
                />
            </div>
            <div className="gap-8 flex items-center justify-center text-white flex-row right-10 pl-20 h-full">
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center font-roboto font-normal opacity-100 text-xs hover:border-b-2">
                    <Link href="/About">ABOUT US</Link>
                </div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center font-roboto font-normal opacity-100 text-xs hover:border-b-2">TOURS</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center font-roboto font-normal opacity-100 text-xs hover:border-b-2">GALLERY</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center font-roboto font-normal opacity-100 text-xs hover:border-b-2">FLIGHT BOOKING</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center font-roboto font-normal opacity-100 text-xs hover:border-b-2">OTHER SERVICES</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center font-roboto font-normal opacity-100 text-xs hover:border-b-2">
                    <Link href="/Contact">CONTACT US</Link>
                </div>
                <div className=" h-full w-fit flex justify-center items-center">
                    <button className="bg-[#ECBF40] w-full h-10 p-3 flex items-center justify-center rounded-md font-roboto font-normal opacity-100 text-xs hover:shadow-lg">
                        <Link href="/Register">SIGN UP</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}