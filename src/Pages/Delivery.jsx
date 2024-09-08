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
                    <div className="price-heading ">
                        <p className='uppercase text-[#AAAEB3] text-[13px] font-bold tracking-[2px] '>What We Do</p>
                        <h1 className='text-[45px] font-bold text-[#6A6E76]'>We Provide Future of Delivery </h1>
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
                                <h1 className='text-[42px] font-bold pb-3 text-[#015BAC]'>5 million</h1>
                                <p className=' text-[#414A53] font-bold text-[20px] pb-5'>Delivered packages</p>
                            </div>
                            <div className="content">
                                <p className=' text-[#696E76] font-normal leading-normal'>Old World knifefish crestfish, jellynose fish; algaee eater swordtail, carp atka mackerel graess carped yellowfin</p>
                            </div>
                        </div>
                        <div className='delivery_main_part'>
                            <div className="img  py-10">
                                <img className='m-auto' src={DeliverImg3} alt="" />
                            </div>
                            <div className="title">
                                <h1 className='text-[42px] font-bold pb-3 text-[#015BAC]'>5 million</h1>
                                <p className=' text-[#414A53] font-bold text-[20px] pb-5'>Delivered packages</p>
                            </div>
                            <div className="content">
                                <p className=' text-[#696E76] font-normal leading-normal'>Old World knifefish crestfish, jellynose fish; algaee eater swordtail, carp atka mackerel graess carped yellowfin</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Delivery
