import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-center px-4'>
      <input 
        type="text" 
        className="w-full h-12 bg-gray-200 text-gray-600 pl-4 rounded-full" 
        placeholder="検索"
      />
    </div>
  )
}

export default Search