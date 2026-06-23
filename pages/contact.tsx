import { url } from 'inspector'
import React from 'react'

const contact = () => {
  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="po">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You can contact us at any time through our contact form or email.</p>
          </div>

              <form action={"mailto:sushant.web.com@gmail.com"} method="post">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div >
                    <label htmlFor="name" className="text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-blue-400  bg-opacity-50 rounded border border-black shadow focus:border-white-500 focus:ring-grey text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div >
                    <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                    <input type="email" required id="email" name="email" className="w-full bg-blue-400  bg-opacity-50 rounded border border-black shadow focus:border-white-500 focus:ring-grey text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div >
                    <label htmlFor="message" className="text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" required className="w-full bg-blue-400  bg-opacity-50 rounded border border-black shadow focus:border-white-500 focus:ring-grey h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
                </div>
              
            </div>
          </div>
              </form>
        </div>
      </div>
    </>
  )
}

export default contact