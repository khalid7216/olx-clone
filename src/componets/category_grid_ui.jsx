import React from 'react';

export default function CategoryGrid() {
  const categories = [
    { img: 'mobile.png', label: 'Mobiles' },
    { img: '/car.png', label: 'Vehicles' },
    { img: '/house.png', label: 'Property For Sale' },
    { img: '/rentcl.png', label: 'Property For Rent' },
    { img: '/camera.png', label: 'Electronics & Home Appliances' },
    { img: '/bussiness.png', label: 'Business, Industrial & Agriculture' },
    { img: '/services.png', label: 'Services' },
    { img: '/animal.png', label: 'Animals' },
    { img: '/furniture.png', label: 'Furniture & Home Decor' },
    { img: '/fashion.png', label: 'Fashion & Beauty' },
    { img: '/books.png', label: 'Books, Sports & Hobbies' },
    { img: '/kids.png', label: 'Kids' },
     { img: '/jobs.png', label: 'jobs' },
       { img: '/bikes.png', label: 'bikes' },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 px-2 sm:px-4 md:px-6 py-4">
      {categories.map((cat) => (
        <div key={cat.label} className="flex flex-col items-center">
          <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 p-2 bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src={cat.img}
              alt={cat.label}
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            />
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm text-center mt-2 px-1 text-neutral-900 font-bold">
            {cat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
