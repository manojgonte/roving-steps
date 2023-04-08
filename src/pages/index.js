import { About_Us } from "./About_Us/AboutUs";
import Banner from "./Banner/BannerPage";
import { Header } from "./Header/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <Banner />
        <About_Us />
    </main>
  )
}
