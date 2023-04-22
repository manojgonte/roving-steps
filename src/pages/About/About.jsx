import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />

            <div>
                {/* hero section */}
                <div className="text-center bg-gray-50 text-gray-800 py-24 px-6 md:mt-8" style={{
                    backgroundImage: "url('/Assets/images/common/Banner_c.jpeg')",
                    backgroundSize: 'cover'
                }}>
                    <h2 className="text-5xl md:text-5xl xl:text-5xl font-bold tracking-tight mb-12 text-white">About Us</h2>
                </div>

                {/* about roving steps */}
                <div className="container px-6 mx-auto bg-white py-10">
                    <section className="mb-15 text-white">
                        <div className="flex flex-wrap">
                            <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                                <div className="w-full h-full">
                                    <Image src={"/Assets/images/common/Hexagone_2.jpg"}
                                        width={100} height={100}
                                        className="w-full h-full object-fill rounded-3xl p-3 shadow-md bg-white m-3" alt="choose us image" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full items-end flex justify-end lg:w-5/12">
                                <div className="flex justify-start">
                                    <div className="text-center lg:max-w-3xl md:max-w-xl">
                                        <div className="text-black text-start">
                                            <h2 className="text-4xl font-bold mb-5 text-[#ECBF40]">Roving Steps...</h2>
                                            <p>
                                                We formed with a strong passion of exploring different destinations. 
                                                This is not just a company but a family which we are looking forward to create. 
                                                We are here to Use our expert knowledge and a personalized touch to make sure reality exceeds your expectations. 
                                                We get immense pleasure to see our guest satisfied and smiling because of our services. 
                                            </p>
                                            <p className="md:mt-3">
                                                We all experience moments which leave us stunned and which gives us Goosebumps and so much more that we cannot express when we travel to places we always wished or… Roving Steps takes the responsibility for fulfilling your desired dreams of Traveling!!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* mission and vision */}
                <div className="container px-6 mx-auto bg-white py-10 flex">
                    <section className="mb-15 text-white">
                        <div className="flex flex-wrap">
                            <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                                <div className="w-full h-full">
                                    <Image src={"/Assets/images/common/Hexagone_3.jpg"}
                                        width={100} height={100}
                                        className="w-full h-full object-fill rounded-3xl p-3 shadow-md bg-white m-3" alt="about us image" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full items-end flex justify-end lg:w-5/12">
                                <div className="flex justify-start">
                                    <div className="text-center lg:max-w-3xl md:max-w-xl">
                                        <div className="text-black text-start">
                                            <h2 className="text-2xl font-bold mb-5 text-[#ECBF40]">Our Vision</h2>
                                            <p>
                                                Roving Steps - The most trusted travel company for elite travel at affordable prices creating memories & Experiences
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mb-15 text-white">
                        <div className="flex flex-wrap">
                            <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                                <div className="w-full h-full">
                                    <Image src={"/Assets/images/common/Hexagone_3.jpg"}
                                        width={100} height={100}
                                        className="w-full h-full object-fill rounded-3xl p-3 shadow-md bg-white m-3" alt="choose us image" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full items-end flex justify-end lg:w-5/12">
                                <div className="flex justify-start">
                                    <div className="text-center lg:max-w-3xl md:max-w-xl">
                                        <div className="text-black text-start">
                                            <h2 className="text-2xl font-bold mb-5 text-[#ECBF40]">Our Mission</h2>
                                            <p>
                                                We are keen towards providing a lavish experience to our guest when they travel to their dream destinations. Our mission is to make dreams affordable with continuous innovation in tourism world
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    )
}