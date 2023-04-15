import Card from "@/Component/CardComponents/Card";

const PopularDestinations = () => {
    const cards = [
        {
            img: "/Assets/images/common/Hexagone_3.jpg",
            name: `Destination 10`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: true,
            button: {
                text: "Book Now",
                enable: false
            }
        },
        {
            img: "/Assets/images/common/Hexagone_2.jpg",
            name: `Destination 10`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: true,
            button: {
                text: "Book Now",
                enable: false
            }
        },
        {
            img: "/Assets/images/common/Hexagone_1.jpg",
            name: `Destination 10`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: true,
            button: {
                text: "Book Now",
                enable: false
            }
        }
    ]
    return (
        <div className="flex flex-col w-full h-[600px] px-16 py-5 gap-8 bg-gradient-to-l from-cyan-200 to-white">
            <div className="text-2xl font-bold text-[#1B2C60] text-center w-full py-5">
                Popular Destinations
            </div>
            <div className="w-full px-16 flex flex-row h-full gap-10 justify-center">
                {/* <Card />
                <Card />
                <Card /> */}
                {
                    cards.map(
                        card => {
                            return (
                                <Card
                                    cardDetails={card}
                                />
                            )
                        }
                    )
                }
            </div>
            <div className=" flex justify-center items-center">
                <button className="bg-[#ECBF40] hover:bg-[#ECA740] text-white w-36 h-8 rounded-md font-roboto text-sm drop-shadow-lg text-center">
                    EXPLORE MORE
                </button>
            </div>
        </div>
    )
}

export default PopularDestinations;