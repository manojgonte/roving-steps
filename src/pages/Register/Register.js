import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function Register() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />

            <section className="container gradient-form h-full bg-[#aaa] mt-10">
                <div className="container h-full">
                    <div className="g-10 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div className="block rounded-lg bg-white shadow-lg">
                                <div className="g-0 lg:flex lg:flex-wrap">

                                    <div className="min-h-screen flex items-center justify-center lg:w-6/12"
                                        style={{
                                            backgroundImage: "url('https://img.freepik.com/premium-photo/top-view-white-toy-airplane-model-blue-color-background-concept-travel_43448-410.jpg?w=1060')",
                                            backgroundSize: 'cover'
                                        }} >
                                        <div className="px-4 py-6 md:mx-6 md:p-12">
                                            <div className="justify-center"><img src={"/Assets/images/Logo/Roving Steps Logo white.png"} style={{ width: 300 }} /></div>
                                            <p className="text-sm text-center">
                                                {`Explore the huge world and enjoy it's beauty`}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-4 md:px-0 lg:w-4/12">
                                        <div className="md:mx-6 md:p-12 min-h-screen">

                                            <div className="justify-center md:mb-10">
                                                <Image
                                                    src={"/Assets/images/Icons/TopLogo.svg"}
                                                    width={100}
                                                    height={100}
                                                    className="w-full h-4/5"
                                                    alt="logo"
                                                />
                                            </div>

                                            <form>
                                                <div className="mb-2">
                                                    <div className="mb-3">
                                                        <label for="email" className="block text-sm font-semibold text-gray-800" >Name *</label>
                                                        <input type="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <div className="mb-3 mr-4">
                                                            <label for="email" className="block text-sm font-semibold text-gray-800" >Contact *</label>
                                                            <input type="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="email" className="block text-sm font-semibold text-gray-800" >Email *</label>
                                                            <input type="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label for="password" className="block text-sm font-semibold text-gray-800">Password *</label>
                                                        <input type="password" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label for="password" className="block text-sm font-semibold text-gray-800">Confirm Password *</label>
                                                        <input type="password" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                    </div>
                                                </div>

                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button className="bg-[#ECBF40] w-full h-10 p-3 flex items-center justify-center rounded-md font-roboto font-normal opacity-100 text-sm hover:shadow-lg">
                                                        SIGN UP
                                                    </button>
                                                    <div className="flex mt-2">
                                                        <input type="checkbox" className="ml-2" />
                                                        <div className="text-sm text-black">&nbsp; I agree to <a href="" className="text-[#ECBF40]">Terms of services</a> and <a href="" className="text-[#ECBF40]">Privacy Policy</a></div>
                                                    </div>
                                                </div>


                                                <div className="flex items-center justify-start pb-6 text-sm">
                                                    <p className="mb-0 mr-2 text-black">Already have an account?</p>
                                                    <a href="" className="text-[#ECBF40]">
                                                        <Link href="/Login">Sign In</Link>
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}