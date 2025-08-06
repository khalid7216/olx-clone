import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

function Bikes() {
  return (
<> 
  <div className="p-6"><h1 className='p-1 text-xl font-bold text-cyan-950 '>Bikes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Repeat this block 4 times */}
        {[1, 2, 3, 4].map((item, i) => (
          <div key={i} className="w-full border border-gray-300 bg-white">
            {/* Image Section */}
            <div className="h-60 w-full flex items-center justify-center overflow-hidden">
              <img
                src="./adsbike.webp"
                alt="Mobile Product"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="border-t border-gray-300 p-2">
              <p className="text-xl font-bold flex justify-between items-center">
                <span className="text-cyan-950">Rs 2.10 Lac</span>
               <FaRegHeart />
              </p>
              <p className="text-sm mt-1 text-cyan-950">
                Honda 125 23 model..
              </p>
              <p className="text-gray-500 mt-1">
                7th Avenue, Islamabad <br /> 7 Days ago
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
</>
  )
}

export default Bikes