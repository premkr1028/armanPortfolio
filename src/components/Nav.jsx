import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
   return (
      <nav className='flex w-screen items-center justify-between p-3  text text-xl font-[500]'>
         <div className='flex w-full items-center justify-between navUnder'>
            <div className="mainNav flex gap-2 items-center">
               <img className='w-[35px] h-[35px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] rounded-[20px] ' src="/public/images/armanLogo.jpg" alt="" />
               <Link to='/'>Arman</Link>

            </div>
            <div className="contactNav flex gap-8">
               <p className='md:text-xl text-sm'>arman3ditz@gmail.com</p>
               {/* <Link to= '/Bio'>Bio</Link>
      <Link to= '/Works'>Works</Link>
   <Link to= '/Contact'>Contact</Link> */}
            </div>
         </div>
      </nav>
   )
}

export default Nav