import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Repair from "./components/Repair";
import Service from "./components/Services";
import Value from "./components/Values";
import Carousel from "./components/carousel";

export default function Page() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Service/>
     <Value/>
     <Repair/>
     <Products/>
     <Carousel/>
    </>
  );
}
