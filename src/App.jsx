import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import LogoCloud from "./components/LogoCloud";
import Uses from "./components/Uses";
import Cta2 from "./components/Cta2";
import Feature from "./components/Feature";
import Feature2 from "./components/Feature2";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Banner/>
      <Navbar/>
      <div className="w-full text-black bg-gray-100 relative top-[130px]">
        <Hero/>
        <Cta/>
        <LogoCloud/>
        <Uses/>
        <Cta2/>
        <Feature/>
        <Feature2/>
        <Articles/>
      </div>
      <Footer/>
    </>
  )
}