import React from 'react';

function Header() {
  return (
    <div className='
      bg-gray-800
      p-4
      flex
      items-center
      justify-between
    '>
      <h1 className='text-white text-4xl font-semibold'>Recipe App</h1>
      <h2 className="text-white text-lg">Discover new recipes and cook delicious meals!</h2>

      <style jsx>{`
        h1 {
          font-family: 'Permanent Marker', cursive;
        }
      `}</style>
    </div>
  );
}

export default Header;
