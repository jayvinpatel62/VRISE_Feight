import React from 'react'

export default function Slider_Content(prop) {
  return (
    <div className='sldrContentWrapper'>
        <div className='lg:max-w-[1170px] text-white h-auto z-10 text-center p-10 relative'>
            <div className="backTextStroke">Vrise</div>
            <h2 className=' text-6xl leading-[60px] mb-5 font-semibold animeslide-06s' data-animate="bottom"> {prop.title} </h2>
            <p className='leading-[30px] mt-[14px] animeslide-1s' data-animate="bottom">{prop.desc}
            </p>
            <button className='uppercase py-[16px] px-[40px] mt-[46px] leading-[24px]  rounded-br-2xl border-2 bg-[#E8734A]  hover:bg-transparent border-[#E8734A] transition-all text-black animeslide-2s' data-animate="bottom">{prop.btnNname}</button> 
        </div>
    </div>
  )
}
