import React from 'react'
import Header from '../Header'
import Image from 'next/image'
import Footer from '../Footer'

export default function Gallery() {
    return (
        <main className="bg-gradient-to-l from-cyan-200 to-white">
            <Header />
            <div className="flex flex-col relative w-full h-[350px] justify-center items-center gap-8 bg-scroll banner-image px-16">
                <Image
                    src={"/Assets/images/common/Banner_a.jpeg"}
                    fill
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    alt="bg-image"
                />
                <div className="z-10 flex flex-col relative w-full h-full justify-center items-center gap-8">
                    <div className="w-full text-center">
                        <span className="text-4xl  text-white font-bold">
                            Gallery
                        </span>
                    </div>
                    <div className="w-11/12 h-9 border">
                        <div className="bg-white w-full h-full rounded-3xl flex items-center">
                            <div className="w-1/5 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/LocationDefault.svg"}
                                    width={10}
                                    height={10}
                                    alt=""
                                />
                                <input placeholder="Location" className="p-1 rounded-l-3xl w-full  text-sm" />
                            </div>
                            <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/DateDefault.svg"}
                                    width={15}
                                    height={15}
                                    alt=""
                                />
                                <input placeholder="Check in" className="p-1 w-full  text-sm" />
                            </div>
                            <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/DateDefault.svg"}
                                    width={15}
                                    height={15}
                                    alt=""
                                />
                                <input placeholder="Check out" className="p-1 w-full  text-sm" />
                            </div>
                            <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/DateDefault.svg"}
                                    width={15}
                                    height={15}
                                    alt=""
                                />
                                <input placeholder="Adult" className="w-full p-1  text-sm" />
                            </div>
                            <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/DateDefault.svg"}
                                    width={15}
                                    height={15}
                                    alt=""
                                />
                                <input placeholder="Kids" className="w-full p-1  text-sm" />
                            </div>
                            <div className="w-1/6 h-full flex items-center pl-6 rounded-r-3xl hover:bg-[#ECBF40]">
                                <button className="text-[#C6C6C6] hover:text-white  text-sm">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid'>
                <div className='border border-black'>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
                <div className='border border-black'>
                    <div></div>
                    <div></div>
                </div>
                <div className='border border-black'>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='border border-black'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <div></div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
