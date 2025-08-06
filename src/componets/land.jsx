import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

function Land() {
  return (
    <>
      <div className="p-6"><h1 className='p-1 text-xl font-bold text-cyan-950 '>Land & Plots</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Repeat this block 4 times */}
        {[1, 2, 3, 4].map((item, i) => (
          <div key={i} className="w-full border border-gray-300 bg-white">
            {/* Image Section */}
            <div className="h-60 w-full flex items-center justify-center overflow-hidden">
              <img
                src="./adsplots.webp"
                alt="Mobile Product"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="border-t border-gray-300 p-2">
              <p className="text-xl font-bold flex justify-between items-center">
                <span className="text-cyan-950">Rs 88 Lacs</span>
                <FaRegHeart />
              </p>
              <p className="text-sm mt-1 text-cyan-950">
                5 Marla Boulevard Plot on 7th Avenue..
              </p>
              <p className="text-gray-500 mt-1">
                DHA Defence Phase 4, Islamabad <br /> 1 Days ago
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
    </>
  )
}

export default Land