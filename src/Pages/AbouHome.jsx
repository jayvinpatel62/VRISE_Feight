import { Container } from '@mui/material'
import React from 'react'
import TitleWithStroke from '../Componets/TitleWithStroke'
import img1 from '../image/aboutHome.jpg'

const AbouHome = () => {
    return (
        <>
            <section className='aboutHomeSection'>
                <div className='pt-[200px]'>
                    <Container>
                        <div className='bgcolor text-white flex flex-col  lg:flex-row gap-[90px] pb-10'>
                            <div className='flex justify-between flex-col items-start gap-10 md:min-w-[350px]' >
                                <div>
                                    <TitleWithStroke backText="About" category="About" title="Powerfull Features of Vrise" align='left' color="white"/>
                                </div>
                                
                                <div className='imgbox md:max-w-[350px] h-[450px]'>
                                    <img src={img1} alt="" className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='flex-grow-1 pb-10'>
                                <div className=' pb-7'>
                                    <p>
                                    Welcome to VRISE FREIGHT FZCO Your gateway to streamlined and efficient logistics solutions across land, sea, and air. Based in Dubai, UAE, VRISE FREIGHT FZCO is committed to delivering excellence and reliability in freight forwarding, harnessing our strategic location to enhance your supply chain and distribution needs globally.
                                    </p>
                                </div>
                                <div className=' pb-7'>
                                    <p>
                                    Customized Routing: Optimized routes for timely and safe delivery. Flexible Capacity: We handle varying sizes from small cargoes to oversized loads. Real-Time Tracking: State-of-the-art GPS tracking for visibility and security.

                                    </p>
                                </div>
                               
                                <div>
                                    <button className='uppercase py-[14px] px-[40px] mt-[40px] leading-[24px]  rounded-br-2xl border-2 hover:bg-[#4EAE98] bg-transparent border-[#4EAE98] transition-all text-white '>Read More</button>
                                </div>
                                <div className="flex flex-wrap gap-[50px] pt-[50px]">
                                    <div>
                                        <p className=' font-bold'> Delivered packeges</p>
                                        <h1 className='numStorke'>50 k</h1>
                                    </div>
                                    <div>
                                        <p>New equipment</p>
                                        <h1 className='numStorke'>100</h1>
                                    </div>
                                    <div>
                                        <p>Closed deal</p>
                                        <h1 className='numStorke'>12 k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default AbouHome
