import HomeTourPackage from "@/Component/HomeTourPackage";
import Header from "./Header";
import PopularDestinations from "@/Component/PopularDestinations";
import HomePageBanner from "@/Component/HomePageBanner";
import HomePageAboutUs from "@/Component/HomePageAboutUs/HomePageAboutUs";
import HomePageChooseUs from "@/Component/HomePageChooseUs";
import Footer from "./Footer";
import HomePageTestimonial from "@/Component/HomePageTestimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <Header />
        <HomePageBanner />
        <HomePageAboutUs />
        <PopularDestinations />
        <HomeTourPackage />
        {/* <HomePageChooseUs /> */}
        <HomePageTestimonial />
        <Footer />
    </main>
  )
}
