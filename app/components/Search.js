import React, { useState } from 'react';

function Search({ setName, setData }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('chicken');

  const onSearch = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center mt-20 mb-4'>
      <h2 className='text-xl font-semibold text-center text-gray-700 mb-2'>
        Find a recipe by category or name:
      </h2>
      <div className='flex items-center justify-center'>
        <select
          value={category}
          onChange={(e) => {
            const selectedCategory = e.target.value;
            setCategory(selectedCategory);
            setName(selectedCategory);
          }}
          className='border border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none mr-4'
        >
          <option value='Beef'>Beef</option>
          <option value='Chicken'>Chicken</option>
          <option value='Lamb'>Lamb</option>
        </select>
        <h1 className='text-xl font-semibold text-gray-700'>OR</h1>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className='border border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none ml-4'
          placeholder='Search by name'
        />
        <button onClick={onSearch} className='bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4'>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
