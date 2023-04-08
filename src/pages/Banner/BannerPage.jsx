const Banner = () => {
    return (
        <div className="flex flex-col w-full h-[500px] border border-black justify-center items-center gap-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="w-72 text-center font-bold text-white text-2xl font-roboto">
                Explore the huge word and enjoy it's beauty
            </div>
            <div className="w-4/5 text-white text-xl font-thin text-center tracking-widest ">
                Let's experience moments which leave us stunned and gives us goosebumps and so much more that we cannot express when we travel to places we always wished for
            </div>
            <div className="w-full flex justify-center">
                <button className="bg-[#ECBF40] text-white w-24 h-9 rounded-sm text-center">
                    Explore
                </button>
            </div>
            <div className="w-11/12 h-9">
                <div className="bg-white w-full h-full rounded-3xl flex items-center">
                    <div className="w-1/4 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2">
                        <input placeholder="Location" className="p-1 rounded-l-3xl w-full" />
                    </div>
                    <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2">
                        <input placeholder="Check in" className="p-1 pl-2" />
                    </div>
                    <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2">
                        <input placeholder="Check out" className="p-1 pl-2" />
                    </div>
                    <div className="w-[12%] border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2">
                        <input placeholder="Adult" className="w-full p-1 pl-2" />
                    </div>
                    <div className="w-[12%] border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2">
                        <input placeholder="Kids" className="w-full p-1 pl-2" />
                    </div>
                    <div className="w-1/6 h-2/3 flex items-center rounded-l-3xl my-2 ml-2">
                        <input placeholder="Search" className="p-1 pl-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;