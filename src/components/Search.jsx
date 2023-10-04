import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-center px-4 pb-[1.8125rem]'>
      <input 
        type="text" 
        className="w-full h-12 bg-[#F6F6F6] pl-4 rounded-full" 
        placeholder="検索"
      />
    </div>
  )
}

export default Search