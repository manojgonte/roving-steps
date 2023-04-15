import Card from "../CardComponents/Card";

const HomeTourPackage = () => {

    const cards = [
        {
            img: "/Assets/images/common/Hexagone_3.jpg",
            name: `Dubai`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: false,
            button: {
                text: "Book Now",
                enable: true
            }
        },
        {
            img: "/Assets/images/common/Hexagone_2.jpg",
            name: `India`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: false,
            button: {
                text: "Book Now",
                enable: true
            }
        },
        {
            img: "/Assets/images/common/Hexagone_1.jpg",
            name: `Malaysia`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: false,
            button: {
                text: "Book Now",
                enable: true
            }
        },
        {
            img: "/Assets/images/common/Hexagone_1.jpg",
            name: `Japan`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: false,
            button: {
                text: "Book Now",
                enable: true
            }
        }
    ];

    return (
        <div className="flex flex-col w-full h-[700px] px-16 py-5 gap-8 bg-gradient-to-l from-cyan-200 to-white">
            <div className="text-2xl font-bold text-[#1B2C60] text-center w-full py-5">
                Popular Tour Packages
            </div>
            <div className="w-full px-16 flex flex-row h-full gap-10 justify-center">
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
        </div>
    )
}

export default HomeTourPackage;