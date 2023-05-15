import Image from "next/image";

const HomePageChooseUs = () => {
    return (
        <div className="flex flex-row relative w-full h-[500px] bg-gradient-to-r from-white to-cyan-200 gap-8 bg-scroll banner-image px-32 py-12">
            <div className="w-1/4 h-96 flex justify-end p-2 rounded-md bg-white drop-shadow-md">
                <div className="w-full h-full overflow-hidden">
                    <Image src={"/Assets/images/common/Hexagone_3.jpg"}
                        width={100} height={100}
                        className="w-full h-full object-fill" alt="choose us image" />
                </div>
            </div>
            <div className="w-4/6 h-96">
                <div>
                    <h1 className="text-[#1B2C60] font-bold text-4xl">Why Choose Us?</h1>
                </div>
                <div className="grid grid-cols-2 gap-8 border-b border-[#E2E2E2] py-6">
                    <div className="flex flex-row gap-5">
                        <div className="w-24 h-14 rounded-md overflow-hidden">
                            <Image src={"/Assets/images/common/Hexagone_3.jpg"}
                                width={100} height={100}
                                className="w-full h-full object-fill" alt="choose us image" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#ECA740]  font-bold text-md">Easy Booking</span>
                            <span className="text-[#000000]  font-bold text-xs">We offer easy and convenient flight bookings with attractive offers</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5">
                        <div className="w-24 h-14 rounded-md overflow-hidden">
                            <Image src={"/Assets/images/common/Hexagone_3.jpg"}
                                width={100} height={100}
                                className="w-full h-full object-fill" alt="choose us image" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#ECA740]  font-bold text-md">Exciting Deals</span>
                            <span className="text-[#000000]  font-bold text-xs">Enjoy exciting deals on flights, hotels, buses, car rental and tour packages</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5">
                        <div className="w-28 h-14 rounded-md overflow-hidden">
                            <Image src={"/Assets/images/common/Hexagone_3.jpg"}
                                width={100} height={100}
                                className="w-full h-full object-fill" alt="choose us image" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#ECA740]  font-bold text-md">Pocket Friendly Pricing</span>
                            <span className="text-[#000000]  font-bold text-xs">We ensure low rates on hotel reservation, holiday packages and on flight tickets.</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5">
                        <div className="w-28 h-14 rounded-md overflow-hidden">
                            <Image src={"/Assets/images/common/Hexagone_3.jpg"}
                                width={100} height={100}
                                className="w-full h-full object-fill" alt="choose us image" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#ECA740]  font-bold text-md">24/7 Support</span>
                            <span className="text-[#000000]  font-bold text-xs">Get assistance 24/7 on any kind of travel related query, We are happy to assist you</span>
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <p className="text-[#6B6B6B] text-left font-normal  text-xs">
                        {`Lorem ipsum dolor sit amet. Ea magnam dolorum est totam quia aut perferendis cumque. Ea dolor similique sit illo temporibus ea pariatur recusandae et recusandae nemo sit optio libero. In placeat numquam sit eaque illo in illum culpa At praesentium amet qui expedita veniam nam error quis ut quod dolorum. Qui ipsum laboriosam ex galisum perspiciatis vel dignissimos rerum et voluptatem dolorum. Lorem ipsum dolor sit amet. Ea magnam dolorum est totam quia aut perferendis cumque. Ea dolor similique sit illo temporibus ea pariatur recusandae et recusandae nemo sit optio libero. In placeat numquam sit eaque illo in illum culpa At praesentium amet qui expedita veniam nam error quis ut quod dolorum.`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePageChooseUs;