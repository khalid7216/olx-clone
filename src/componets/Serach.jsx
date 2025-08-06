import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoSearch, IoChevronDown } from 'react-icons/io5';

const cities = [
  { value: '', label: 'Select City', icon: <CiLocationOn size={18} /> },
  { value: 'karachi', label: 'Karachi',  },
  { value: 'lahore', label: 'Lahore', },
  { value: 'islamabad', label: 'Islamabad',  },
  { value: 'quetta', label: 'Quetta', },
  { value: 'peshawar', label: 'Peshawar',  },
];

function Search() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  return (
    <>
      <div className="m-2 mt-5 flex flex-wrap gap-2 relative">
        
        {/* ✅ Custom Dropdown with Icons */}
        <div className="w-full sm:w-[180px] relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-2 border border-gray-300 rounded text-gray-600 bg-white"
          >
            <span className="flex items-center gap-2">
              {selectedCity.icon} {selectedCity.label}
            </span>
            <IoChevronDown />
          </button>

          {isOpen && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow max-h-60 overflow-y-auto">
              {cities.map((city) => (
                <li
                  key={city.value}
                  onClick={() => handleSelect(city)}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {city.icon} {city.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 🔍 Search Input */}
        <input 
          type="text"
          placeholder="Find Car, Mobile Phones and more"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:flex-1"
        />

        {/* 🔘 Search Button */}
        <button className="bg-teal-950 px-6 py-2 text-amber-50 rounded-md cursor-pointer w-full sm:w-auto flex items-center gap-2">
          Search <IoSearch />
        </button>
      </div>

      {/* 🔻 Divider */}
      <div className="m-1 border-b border-gray-300"></div>

      {/* 📸 Image Banner */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6">
        <img 
          src="/velo-wali-aurat" 
          alt="Banner" 
          className="w-full h-auto max-w-full object-cover rounded-lg shadow"
        />
      </div>
    </>
  );
}

export default Search;
