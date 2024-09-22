import { Container } from '@mui/material'
import React from 'react'

import DeliverImg1 from '../image/Delivery-1.png'
import DeliverImg2 from '../image/Delivery-2.png'
import DeliverImg3 from '../image/Delivery-3.png'


const Delivery = () => {
    return (
        <>
            <div className='py-[150px]' >
                <Container>
                    <div className="relative titleWithStroke py-5 theme-dark text-center">
                        <h4 className="font-bold text-xl theme-dark uppercase category">
                        What We Do
                        </h4>
                        <h2 className="font-bold text-5xl theme-dark">
                            We Provide Future of Delivery
                        </h2>
                        <div className="backTextStroke font-bold theme-dark">
                        Features
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-3  gap-10 '>
                        <div className='delivery_main_part'>
                            <div className="img py-10">
                                <img className='m-auto' src={DeliverImg1} alt="" />
                            </div>
                            <div className="title">
                                <h1 className='text-[42px] font-bold pb-3 text-[#015BAC]'>5 million</h1>
                                <p className=' text-[#414A53] font-bold text-[20px] pb-5'>Delivered packages</p>
                            </div>
                            <div className="content">
                                <p className=' text-[#696E76] font-normal leading-normal'>Old World knifefish crestfish, jellynose fish; algaee eater swordtail, carp atka mackerel graess carped yellowfin</p>
                            </div>
                        </div>
                        <div className='delivery_main_part'>
                            <div className="img  py-10">
                                <img className='m-auto' src={DeliverImg2} alt="" />
                            </div>
                            <div className="title">
                                <h1 className='text-[42px] font-bold pb-3 text-[#015BAC]'>12 million</h1>
                                <p className=' text-[#414A53] font-bold text-[20px] pb-5'>Miles driven</p>
                            </div>
                            <div className="content">
                                <p className=' text-[#696E76] font-normal leading-normal'>Combfish armorhead catfish medaka-snubnose parasitic eel Black scabbardfish cownose ryolden shiner tunfir</p>
                            </div>
                        </div>
                        <div className='delivery_main_part'>
                            <div className="img  py-10">
                                <img className='m-auto' src={DeliverImg3} alt="" />
                            </div>
                            <div className="title">
                                <h1 className='text-[42px] font-bold pb-3 text-[#015BAC]'>2 million</h1>
                                <p className=' text-[#414A53] font-bold text-[20px] pb-5'>Stored in stock</p>
                            </div>
                            <div className="content">
                                <p className=' text-[#696E76] font-normal leading-normal'>Noodlefish, dwarf gourami lake whitefish Jack Dempsey yellow bass monkeyface prickleback Pacific viperfish</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Delivery
