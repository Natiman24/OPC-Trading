import Image from "next/image";

export default function Navbar() {

  return (
    <>
     <nav className="h-24 w-full bg-background flex justify-between px-10 mt-0 items-center">
        <img className="text-white" src="./logo.png" alt="logo" />
        <ul className="flex gap-10 text-white font-lato text-[1.2rem] mr-20">
          <li className="hover:cursor-pointer hover:border-b-2">Home</li>
          <li className="hover:cursor-pointer hover:border-b-2">Services</li>
          <li className="hover:cursor-pointer hover:border-b-2">Products</li>
          <li className="hover:cursor-pointer hover:border-b-2">Contact Us</li>

        </ul>
     </nav>
    </>
  );
}
