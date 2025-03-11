import React from 'react'
import { appleImg , searchImg , bagImg } from '../utils'
import { navLists } from './../constants/index';

const NavBar = () => {
  return (
   <header className='w-full flex py-5 px-5 sm:px-10 flex items-center justify-between'>
    <nav className='flex w-full screen-max-width justify-between'>
      <img src={appleImg} alt="" srcset=""  width={18}/>
      <div className='flex flex-1 w-full items-center justify-center max-sm:hidden'>
        {navLists.map((nav) => (
          <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' key={nav}>
            {nav}
          </div>
        ))}
      </div>

      <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
      <img src={searchImg} alt="" srcset=""  width={18} />
      <img src={bagImg} alt="" srcset=""  width={18} />
      </div>
    </nav>
   </header>
  )
}

export default NavBar