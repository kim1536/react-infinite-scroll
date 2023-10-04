import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-[4.125rem] justify-center mt-4 mb-5'>
      <button className='font-BIZUDPGothic text-primary'>戻る</button>
      <h1 className='font-BIZUDPGothic text-[2rem] font-bold leading-[3rem]'>
        テック記事
      </h1>
      <button className='font-BIZUDPGothic text-primary'>
        次へ
      </button>
    </div>
  )
}

export default Header