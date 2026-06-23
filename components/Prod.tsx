import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { IoGameController } from "react-icons/io5";

const prod = () => {
  return (
    <section className="text-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h3 className="sm:text-3xl text-2xl font-medium title-font text-blue-400">Our Products:</h3>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
            <Link href="https://kumpix.web.app/" className="mt-3  inline-flex items-center cursur:pointer" >
        <div className="flex rounded-lg h-full bg-gray-900 bg-opacity-80 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white shrink-0">
              <Image id="kumpix" src="/comp/kumpix.ico" alt="Kumpix" width={1000} height={400} />
            </div>
            <h2 className="text-white text-lg title-font font-medium">Kumpix</h2>
          </div>
          <div className="grow">
            <p className="leading-relaxed text-base">Ask any question and clarify all your doubts with Kumpix. Kumpix offers you free service without any login or signup to find an absolute meaning or short ...</p>
             <div className="mt-3 text-blue-400 inline-flex items-center">

              Explore 
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
             </div>
          </div>
        </div>
            </Link>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 bg-opacity-80 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">The Author:</h2>
          </div>
          <div className="grow">
            <p className="leading-relaxed text-base">Sushant Naik <br/>@sushant_naik_official <br/> @sushnatmnaik</p>
            <Link href="/about" className="mt-3 text-blue-400 inline-flex items-center">See More...
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-900 bg-opacity-80 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white shrink-0">
              <IoGameController />
            </div>
            <h2 className="text-white text-lg title-font font-medium">Play a game:</h2>
          </div>
          <div className="grow">
            <p className="leading-relaxed text-base">It is a car in city stimulater 3d game. <br/> Enjoy the game in 3d Environmrnt for completely free, no Login or Sign Up required.</p>
            <Link href="https://sushant-naik-official.github.io/Waideek-Playground/" className="mt-3 text-blue-400 inline-flex items-center">Play
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default prod