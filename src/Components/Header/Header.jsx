import React from 'react'
import Menuitems from './Menuitems'
import { HiHome } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { RiContactsBook3Fill } from "react-icons/ri";



function Header() {
  return (
    <>
        <div className='bg-black h-auto'>
            {/* <div className=' bg-black p-2  '>
                <div className='justify-start'>
                    <img className="h-20" src="https://static.vecteezy.com/system/resources/thumbnails/027/927/578/small_2x/coffee-logo-ai-generative-free-png.png"/> 
                </div>
                
            </div> */}

            <div className='text-white text-xl font-mono flex gap-x-10 p-3 pr-10 justify-end'>
                <span className='p-2 flex items-center hover:bg-gray-600 rounded-xl cursor-pointer'>
                    <HiHome className='size-7 text-white mr-2'/>
                    <Menuitems linkName="Home" url="/"/>
                </span>
                <span className='p-2 flex items-center hover:bg-gray-600 rounded-xl cursor-pointer'>
                    <TbListDetails className='size-7 text-white mr-2'/>
                    <Menuitems linkName="About" url="/about"/>
                </span>
                <span className='p-2 flex items-center hover:bg-gray-600 rounded-xl cursor-pointer '>
                    <GiCoffeeCup className='size-7 text-white mr-2'/>
                    <Menuitems linkName="Shop" url="shop"/>
                </span>
                <span className='p-2 flex items-center hover:bg-gray-600 rounded-xl cursor-pointer'>
                    <RiContactsBook3Fill className='size-7 text-white mr-2'/>
                    <Menuitems linkName="Contact" url="contact"/>
                </span>
            </div>
        </div>
    </>
  )
}

export default Header
