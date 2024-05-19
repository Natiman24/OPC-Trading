import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Repair from "./components/Repair";
import Service from "./components/Services";
import Value from "./components/Values";
import Carousel from "./components/Carousel";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {

  return (
    <div className="bg-background">
     <Navbar/>
     <Hero/>
     <Service/>
     <Value/>
     <Repair/>
     <Products/>
     <Carousel/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}
