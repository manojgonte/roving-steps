import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import TourDay from "@/Component/TourDay";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TourDetail() {

    const TourDays = [
        {
            img: "/Assets/images/common/Banner_a.jpg",
            title: "Day 1: Arriving in Dubai",
            desc: "Welcome to Dubai!!! A land full of surprises and a complete destination. Dubai offers an extensive horizon of things to do, see, experience and learn. It is surrounded by mysterious deserts, sand dunes and within the city you will find amazing beach resorts, incredibly high tech buildings with old traditional houses and mosques. Upon arrival at the airport, you will be transferred to your hotel. And later in the evening will be proceed to Dhow cruise. Overnight at the hotel in Dubai",
            activity: "Hotel Name",
            stay: "Hotel Name",
            food: "Breakfast | Lunch | Dinner",
        },
        {
            img: "/Assets/images/common/Banner_a.jpg",
            title: "Day 2: Dubai City tour with Burj Khalifa",
            desc: "Today after breakfast enjoy the city tour of Dubai. Visit Palm Island, take a photo at the famous iconic Burj Al Arab, see Dubai Marina Skylines. Drive to Dubai Creek, Jumeirah Mosque, Burj Al Arab (Photo Stop), Atlantis the Palm, Burj Khalifa (No entrance), Dubai Mall, Jumeirah Beach, Shaikh Zayed Road. Later proceed to 124th Floor – At the Top Burj Khalifa. Overnight at the hotel in Dubai.",
            activity: "Hotel Name",
            stay: "Hotel Name",
            food: "Breakfast | Lunch | Dinner",
        },
        {
            img: "/Assets/images/common/Banner_a.jpg",
            title: "Day 3: Abu Dhabi - City tour with Ferrari World",
            desc: "Today after breakfast proceed to Abu dhabi. Visit Sheikh Zayed Grand Mosque - This architectural work of art is one of the world largest mosques, with a capacity for an astonishing 41,000 worshipers. Later visit the world most famous Ferrari Park. Overnight at the hotel in Dubai.",
            activity: "Hotel Name",
            stay: "Hotel Name",
            food: "Breakfast | Lunch | Dinner",
        }
    ];

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
                        <span className="text-4xl font-roboto text-white font-bold">
                            Tour
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
                                <input placeholder="Location" className="p-1 rounded-l-3xl w-full font-roboto text-sm" />
                            </div>
                            <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/DateDefault.svg"}
                                    width={15}
                                    height={15}
                                    alt=""
                                />
                                <input placeholder="Check in" className="p-1 w-full font-roboto text-sm" />
                            </div>
                            <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/DateDefault.svg"}
                                    width={15}
                                    height={15}
                                    alt=""
                                />
                                <input placeholder="Check out" className="p-1 w-full font-roboto text-sm" />
                            </div>
                            <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/DateDefault.svg"}
                                    width={15}
                                    height={15}
                                    alt=""
                                />
                                <input placeholder="Adult" className="w-full p-1 font-roboto text-sm" />
                            </div>
                            <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                                <Image
                                    src={"/Assets/images/icons/DateDefault.svg"}
                                    width={15}
                                    height={15}
                                    alt=""
                                />
                                <input placeholder="Kids" className="w-full p-1 font-roboto text-sm" />
                            </div>
                            <div className="w-1/6 h-full flex items-center pl-6 rounded-r-3xl hover:bg-[#ECBF40]">
                                <button className="text-[#C6C6C6] hover:text-white font-roboto text-sm">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-28 pt-4 relative">
                <div>
                    <nav class="w-full rounded-md">
                        <ol class="list-reset flex text-sm">
                            <li>
                                <div class="text-[#6b6b6b] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Tours</div>
                            </li>
                            <li><span class="mx-2 text-neutral-500">/</span></li>
                            <li>
                                <div href="#" class="text-[#6b6b6b] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Dubai</div>
                            </li>
                            <li><span class="mx-2 text-neutral-500 ">/</span></li>
                            <li class="text-[#6b6b6b]">Mesmerizing Dubai with Abu Dhabi</li>
                        </ol>
                    </nav>                    
                    <h2 className="text-[#1b2c60] text-2xl font-bold">MESMERIZING DUBAI WITH ABU DHABI</h2>
                </div>

                <div className="my-1">
                    {/* <Image src={"/Assets/images/common/Hexagone_2.jpg"}
                        width={100} height={100}
                        className="w-full h-full object-fill rounded-3xl p-3 shadow-md bg-white my-5" 
                        alt="image" 
                    /> */}
                    
                    <Swiper
                        modules={[Navigation, Scrollbar, Autoplay]}
                        spaceBetween={50}
                        navigation
                        autoplay={{
                            delay: 2500,
                        }}
                        slidesPerView={1}
                        scrollbar={{ draggable: true }}
                    >
                        <div className="slanted text-xl font-bold absolute z-50 left-3 bottom-10 w-10 flex bg-[#df1e1e]">
                            <div className="flex h-screen justify-center items-center">
                                <div className="text-left font-bold">
                                    <div className="block">INR 48000 /- </div>
                                    <div className="block text-sm">Per Person</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="slanted-left text-xl justify-end font-bold absolute z-50 right-3 top-10 w-10 flex bg-[#df1e1e]">
                            <div className="flex h-screen justify-center items-center">
                                <div className="text-left font-bold">
                                    <div className="block">5N/6D</div>
                                </div>
                            </div>
                        </div>
                        
                        <SwiperSlide>
                            <Image 
                                src={"/Assets/images/common/Hexagone_2.jpg"}
                                width={100} height={100}
                                className="w-full h-full object-fill rounded-3xl p-3 shadow-md bg-white my-5" 
                                alt="image" 
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image 
                                src={"/Assets/images/common/Hexagone_2.jpg"}
                                width={100} height={100}
                                className="w-full h-full object-fill rounded-3xl p-3 shadow-md bg-white my-5" 
                                alt="image" 
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="w-full h-full flex flex-row my-8">
                    <div className="w-8/12 flex flex-col gap-4">
                        <div className="w-full justify-start items-center">
                            <h5 className="text-[#6b6b6b] font-bold text-xl mb-2">Overview</h5>
                            <p className="text-[#6b6b6b]">
                                Dubai...Where everything Glitters... Dazzling Dubai is where the ancient Arabic culture & tradition sit side by side with the modern infrastructure. 
                                Our Dubai Tours are memorable for all times to come, for we make you taste the Arabic delicacies, travel the paths of Gold Souk, 
                                thrill at Desert Safari, experience the stunning feat of architecture- the Burj Khalifa, the iconic Burj al-Arab, Palm Jumeirah & more. 
                                With Kesari, you will not only see Dubai you will experience it! The Dhow Dinner Cruise, the Desert Dune Safari, the Dubai Fountain Show and Snow World are some of the highlights of our Dubai Tour packages. 
                                The Dubai Shopping Festival and Ferrari Park are entertaining elements that are added to enhance your Dubai Tours.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 px-4 flex gap-4 justify-start align-bottom items-end border-l-2 border-[#dbdbdb]">
                        <div className="align-bottom">
                            <div className="flex justify-start">
                                <FaStar color="#eca740" size={20} />
                                <FaStar color="#eca740" size={20} />
                                <FaStar color="#eca740" size={20} />
                                <FaStarHalfAlt color="#eca740" size={20} />
                                <FaRegStar color="#eca740" size={20} />
                            </div>
                            <div className="text-sm text-[#000] mt-2">4 Stay | Meal | Siteseeing | Private Transport | Visa</div>
                            <div className="flex justify-start mt-5">
                                <button className="bg-[#c6c6c6] hover:bg-[#6b6b6b] w-full h-10 p-3 flex items-center justify-center rounded-md font-roboto font-normal opacity-100 text-xs hover:shadow-lg">
                                    ENQUIRE</button>
                                <button className="bg-[#ECBF40] hover:bg-[#eca740] ml-3 w-full h-10 p-3 flex items-center justify-center rounded-md font-roboto font-normal opacity-100 text-xs hover:shadow-lg">
                                    BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slanted text-xl font-bold flex bg-[#1b2c60]">Itinerary</div>
                
                {
                    TourDays.map((data, index) => <TourDay key={index} TourDays={data} /> )                    
                }

            </div>

            <Footer />
        </main>
    )
}