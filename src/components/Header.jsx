import { React, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import Hero from './Hero'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'






const Header = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify between cursor: pointer items-center h-24 max-w-[1240px]  text-white'>
        <h1 className='w-full text-3xl font-bold text-blue-400 ml-3'>GREYBOX LEARN</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 font-semibold'><Link smooth to="#home" >HOME</Link></li>
            <li className='p-4 font-semibold'><Link smooth to="#services">PROGRAMS</Link></li>
            <li className='p-4 font-semibold'><Link smooth to="#about">MODULES</Link></li>
            <li className='p-4 font-semibold'><Link smooth to="#contact">LESSONS</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden mr-2'>
            {nav? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            
        </div>
        <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] md:hidden ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#e922cf] m-3'>GREYBOX LEARN</h1>
            <ul>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} smooth to="#home" >HOME</Link></li>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} smooth to="#services">PROGRAMS</Link></li>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} smooth to="#about">MODULES</Link></li>
                <li className='p-4 border-b border-b-gray-500'><Link onClick={handleNav} smooth to="#contact">LESSONS</Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header