import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Prod from "@/components/Prod"

// import hi from "./hi";
export default function Home() {
  return (
    <>
    
    <Nav/>   
    <Prod/>
    <Banner/>
    {/* <dialog id="banner" open>
      <button id="banner-close">Close</button>
      <Banner/>
    </dialog> */}
    </>
  );
}
