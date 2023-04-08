export const Header = () => {
    return (
        <div className="top-0 left-0 w-full h-24 bg-transparent flex flex-row items-center bg-blue-500 opacity-50 px-20">
            <div className="w-96 h-full">

            </div>
            <div className="gap-4 flex items-center justify-center text-white flex-row right-10 pl-28 h-full">
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center hover:border-b-2">ABOUT US</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center hover:border-b-2">TOURS</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center hover:border-b-2">GALLERY</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center hover:border-b-2">FLIGHT BOOKING</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center hover:border-b-2">OTHER SERVICES</div>
                <div className="border-[#ECA740] h-full w-fit flex justify-center items-center hover:border-b-2">CONTACT US</div>
                <div className=" h-full w-fit flex justify-center items-center">
                    <button className="bg-[#ECBF40] w-full h-10 p-3 flex items-center justify-center rounded-md hover:shadow-lg">
                        SIGN UP
                    </button>
                </div>
            </div>
        </div>
    )
}