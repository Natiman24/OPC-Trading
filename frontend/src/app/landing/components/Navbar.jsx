import Image from "next/image";

export default function Navbar() {

  return (
    <>
     <nav className="h-28 w-full bg-background flex justify-between px-10 py-10 items-center">
      <div className="my-10">
        <img src="./logo.png" alt="logo" />
      </div>
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
