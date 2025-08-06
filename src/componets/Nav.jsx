import React from 'react';



const Header = () => {
  return (
   <>
<nav className="bg-blue-100 w-full h-auto p-4">
  <div className="flex flex-wrap items-center gap-4">
    <img src="/olx.png" alt="logo" className="h-15 w-15" />
    <img src="/car.png" alt="car" className="h-15 w-15" />
    <p className='cursor-pointer text-cyan-950 font-bold'>Motors</p>
    <img src="/house.png" alt="house" className="h-15 w-15" />
      <p className='cursor-pointer text-cyan-950 font-bold'>property</p>
    <div className="flex items-center gap-2 ml-auto">
    <button className="bg-white px-4 py-1 rounded">Sell</button>
    <button className="bg-blue-500 text-white px-4 py-1 rounded">Login</button>
  </div>
  </div>

  
</nav>

   </>
  );
};

export default Header;
