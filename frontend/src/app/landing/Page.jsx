import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Repair from "./components/Repair";
import Service from "./components/Services";
import Value from "./components/Values";

export default function Page() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Service/>
     <Value/>
     <Repair/>
    </>
  );
}
