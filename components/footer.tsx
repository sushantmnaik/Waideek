import React from 'react'
// import '../app/globals.css'
import Link from "next/link";
import Image from "next/image"
import data from "../data/follow.json";

const Footer = () => {
  var dataset = Object.values(data);
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <Image id="logo" className="flex title-font font-medium items-center text-blue-300 mb-4 md:mb-0 md:w-20" src="/logo.png" alt="Logo" width={100} height={50} priority style={{ width: 'auto', height: 'auto' }} />
      <span className="ml-3 text-xl">
      <Image id="title" src="/waideek.png" alt="Waideek" width={200} height={100} priority style={{ width: 'auto', height: 'auto' }} />
      </span>
    </a>


    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
      <a href="https://x.com/sushant_naik_" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
    </p>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    {dataset.map((app, index) => {
      return(
<Link href={app.link} className="link rounded m-2 hover:text-amber-50 cursor-pointer">
{app.title}
</Link>
  )
    })}
    </span>
  </div>
</footer>
  )
}

export default Footer