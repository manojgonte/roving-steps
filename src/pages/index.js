import HomeTourPackage from "@/Component/HomeTourPackage";
import Header from "./Header";
import PopularDestinations from "@/Component/PopularDestinations";
import HomePageBanner from "@/Component/HomePageBanner";
import HomePageAboutUs from "@/Component/HomePageAboutUs/HomePageAboutUs";
import HomePageChooseUs from "@/Component/HomePageChooseUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <Header />
        <HomePageBanner />
        <HomePageAboutUs />
        <PopularDestinations />
        <HomeTourPackage />
        <HomePageChooseUs />
    </main>
  )
}
