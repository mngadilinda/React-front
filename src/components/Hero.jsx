import React from 'react'
import pro_img from '../Assets/professional.jpg'

const Hero = () => {
  return (
    <div className='text-white mt-[-8px]' style={{ backgroundImage: `url(${pro_img})`, backgroundPosition:`center`, backgroundSize:'cover' }}>
      <div className="w-full h-screen mx-auto text-center bg-[rgba(0,0,0,0.3)]">
        <h1 className='md:text-7xl mt-4 sm:text-6xl text-4xl'>LEARN IN YOU OWN COMFORT</h1>
        {/* <img src={pro_img} alt="" /> */}
      </div>
    </div>
  )
}

export default Hero