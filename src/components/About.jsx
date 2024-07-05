import React from 'react'
import Image from "../assets/car1.jpg"

function About() {
  return (
    <div id="about" className="h-full flex flex-col md:flex-row items-center justify-center gap-10 md:mx-36 mx-12">
       <img src={Image} alt="Car" className="md:w-4/12 w-[1000px]  border-[6px] rounded-xl border-primary" />
       <div>
        <h3 className='md:text-[20px] text-[16px] font-normal'>About</h3>
        <h1 className='md:text-5xl text-2xl font-semibold py-5'>Bringing Professional Vision To Every Shot</h1>
        <p className='md:text-[20px] text-[14px] md:font-light font-normal pb-10'>At FA Visuals, creating stunning visual content that brings your vision to life. Specializing in videography, photography, and editing, I deliver professional, high-quality services tailored to your needs. My passion for creativity and commitment to excellence ensure that every project leaves a lasting impression. Partner with FA Visuals to elevate your brand with compelling visuals.</p>
        <button className='md:h-20 h-14 bg-primary text-black lg:w-[500px] w-[256px] md:text-3xl text-md font-semibold rounded-xl' disabled>Ferdaws Amini</button>
       </div>
    </div>
  )
}

export default About