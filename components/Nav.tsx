// import Nav from "next/nav"
// import '../app/globals.css'
import Image from "next/image"
import '../app/extra.css'
import Link from "next/link"
import { HiHome } from "react-icons/hi2";
import { CgFileDocument } from "react-icons/cg";
import { MdContactMail } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

// import "..app/globals.css"

const Nav = () => {
    
  return (
    <>





    <nav className="nav text-gray-400  body-font md:flex-row px-5 py-8   sm:flex-row flex-col">
        <div className="flex flex-wrap  flex-col md:flex-row items-center">

        <Image id="logo" className="flex title-font font-medium items-center text-blue-300 mb-4 md:mb-0 md:w-20" src="/logo.png" alt="Logo" width={50} height={40} priority style={{ width: 'auto', height: 'auto' }} />
        <Image id="title" src="/waideek.png" alt="Waideek" width={100} height={40} priority style={{ width: 'auto' }} />
        
<div className="end md:ml-auto flex flex-wrap items-center text-base justify-center inset-e-full col-end-13 right-0">

         <Link href="/" className="fl mr-5 hover:text-white flex title-font font-medium items-center md:justify-start justify-center text-white border-0 py-1 px-1 bg-gray-600 opacity-100 focus:outline-none hover:bg-gray-5\00 rounded text-base mt-4 cursor-pointer md:mt-0 md:width-20px">
        <button className="mr-1 hover:text-white inline-flex items-center border-0 py-1 px-1 md:mr-1  opacity-100 focus:outline-none hover:bg-gray-5\00 rounded text-base mt-4 cursor-pointer md:mt-0">
    <HiHome className="cursor-pointer flex-1"/>
    Home
        </button>
    </Link>
         <Link href="/about" className="fl mr-5 hover:text-white flex title-font font-medium items-center md:justify-start justify-center text-white border-0 py-1 px-1 bg-gray-600 opacity-100 focus:outline-none hover:bg-gray-5\00 rounded text-base mt-4 cursor-pointer md:mt-0">
        <button className="mr-1 hover:text-white inline-flex items-center border-0 py-1 px-1 md:mr-1  opacity-100 focus:outline-none hover:bg-gray-5\00 rounded text-base mt-4 cursor-pointer md:mt-0">
    {/* <CgFileDocument className="cursor-pointer flex-1"/> */}
    About
        </button>
    </Link>
         <Link href="/contact" className="fl mr-5 hover:text-white flex title-font font-medium items-center md:justify-start justify-center text-white border-0 py-1 px-1 bg-gray-600 opacity-100 focus:outline-none hover:bg-gray-5\00 rounded text-base mt-4 cursor-pointer md:mt-0">
         <button className="mr-1 hover:text-white inline-flex items-center border-0 py-1 px-1 md:mr-1  opacity-100 focus:outline-none hover:bg-gray-5\00 rounded text-base mt-4 cursor-pointer md:mt-0">
    <MdContactMail className="cursor-pointer flex-1"/>
    Contact
         </button>
    </Link>
         <Link href="/explore" className="fl mr-5 hover:text-white flex title-font font-medium items-center md:justify-start justify-center text-white border-0 py-1 px-1 md:mr-1 bg-gray-600 opacity-100 focus:outline-none hover:bg-gray-5\00 rounded text-base mt-4 cursor-pointer md:mt-0">
         <button className="mr-1 hover:text-white inline-flex items-center border-0 py-1 px-1 md:mr-1  opacity-100 focus:outline-none hover:bg-gray-5\00 rounded text-base mt-4 cursor-pointer md:mt-0">
    
    Explore 
    <FaArrowCircleRight className="cursor-pointer flex-1"/>

         </button>
    </Link>
</div>


        </div>
    </nav>
    </>
  )
}

export default Nav