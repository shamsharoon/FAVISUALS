import React from 'react'
import Image from "../assets/car1.jpg"

function About() {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:mx-36 mx-12">
       <img src={Image} alt="Car" className="md:w-4/12 w-[1000px]  border-[6px] rounded-xl border-primary" />
       <div>
        <h3 className='md:text-[20px] text-[16px] font-normal'>About</h3>
        <h1 className='md:text-5xl text-2xl font-semibold py-5'>Bringing Professional Vision To Every Shot</h1>
        <p className='md:text-[20px] text-[14px] md:font-light font-normal pb-10'>Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum. Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum. </p>
        <button className='md:h-20 h-14 bg-primary text-black md:w-3/12 w-[256px] md:text-3xl text-xl font-semibold rounded-xl'>@_FA.VISUALS_</button>
       </div>
    </div>
  )
}

export default About