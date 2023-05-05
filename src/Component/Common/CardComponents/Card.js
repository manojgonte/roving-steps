import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
    const {
        img,
        name,
        stars,
        facility,
        cost,
        note,
        seeMore,
        button,
        path
    } = props.cardDetails;

    return (
        <div className="flex flex-col w-60 h-full gap-4">
            <div className={`w-full ${path === "tours" ? 'h-52' : 'h-72'} p-2 bg-white relative rounded-md overflow-hidden`}>
                <Image src={img}
                    width={300}
                    height={160}
                    className="w-full h-full object-fill"
                    alt=""
                />
            </div>
            <div className="px-1">
                <div className="flex flex-row items-center">
                    <div className="font-roboto font-bold text-lg pr-3">
                        {name}
                    </div>
                    {!seeMore && <div className="font-roboto font-normal text-sm">
                        5N/6D
                    </div>}
                </div>
                {seeMore && <div className="flex flex-col h-8 text-xs overflow-ellipsis overflow-hidden line-clamp-3 font-roboto">
                    {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nulla voluptate nam placeat minus ducimus. Tenetur quasi, harum illum sapiente dolorem voluptas, praesentium commodi quisquam aliquam quas, voluptatum animi ullam!`}
                </div>}
                {!seeMore &&
                    <div className=" flex flex-col gap-3">
                        <div>
                            {stars} Stars
                        </div>
                        <div className=" font-roboto font-extrabold text-xs">
                            4 Stay | Meal | Siteseeing | Private Transport | Visa
                        </div>
                        <div>
                            <div className=" font-roboto font-bold text-xs">Starting from</div>
                            {cost}
                        </div>
                        <div>{note}</div>
                    </div>
                }
                {seeMore && <div className="font-roboto text-[#27A5BF] text-xs"><Link href="/TourDetail">See more...</Link></div>}
                {button.enable && <button className="bg-[#ECBF40] hover:bg-[#ECA740] text-white w-24 h-7 rounded-md font-roboto text-xs drop-shadow-lg text-center my-2">
                    BOOK NOW
                </button>}
            </div>
        </div>
    )
}

export default Card;