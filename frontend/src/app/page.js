import Image from "next/image";
import Page from "./landing/Page";

export default function Home() {
  return (
    <div className="bg-background bg-no-repeat bg-cover h-screen">
      <Page />
    </div>
  );
}
