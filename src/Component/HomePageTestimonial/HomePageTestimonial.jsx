import Image from "next/image";
import TestimonialCard from "../TestimonialCard";

const HomePageTestimonial = () => {
    return (
        <div className="w-full h-[600px] flex flex-col justify-center items-center bg-white px-32 py-12 font-roboto">
            <div className="w-full h-20 flex justify-center items-center">
                <Image src={"/Assets/images/Icons/Sayings.png"}
                 width={100} height={100} 
                // fill
                 className="w-24 h-20 object-center" alt="Sayings" />
            </div>
            <div className="w-full h-10 flex justify-center items-center pb-4">
                <span className="text-[#1B2C60] text-2xl font-bold font-roboto">What traveler are saying about us?</span>
            </div>
            <div className="w-full h-10 flex justify-center items-center">
                <span className="text-2xl font-normal font-roboto">Many of our travelers have shared their review about tour, hotels, food and many more</span>
            </div>
            <div className="w-full h-[580px] bg-white rounded-lg flex justify-center gap-4 shadow-2xl drop-shadow-2xl mt-14">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    )
}

export default HomePageTestimonial;