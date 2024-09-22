import { Container } from '@mui/material'
import React from 'react'

const Contact_Office = () => {
    return (
        <>
            <div className='bg-[#32373F]'>
                <div className='bg_img py-[100px]'>
                    <Container>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div className=''>
                                <div className="relative titleWithStroke py-5 theme-white text-left">
                                    <h2 className="font-bold text-5xl white">
                                       Contact us if you have any <span className='text-primary'>query </span> about our service
                                    </h2>
                                    <div className="backTextStroke font-bold white">
                                    Contacts
                                    </div>
                                </div>
                               
                                <p className=' text-[#fff] py-[20px]'>If you have any questions about our services or need assistance with your freight needs, please don't hesitate to contact us. Our team is ready to provide you with all the information and support you require. Whether you're inquiring about specific details of our logistics solutions or seeking guidance on the best options for your shipment, we are here to help.</p>
                                <div className=''>
                                    <button className='uppercase py-[14px] px-[40px] mt-[40px] leading-[24px]  rounded-br-2xl border-2 hover:bg-[#fff] text-sm bg-transparent border-[#fff] hover:text-[#414A53] transition-all text-white '>get startred</button>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex flex-col gap-2 w-full footer_bg bg-[#2B5BAC] text-white py-[30px] px-[30px]'>
                                    <h4 className=' font-bold pb-3 text-xl'>Dubai office</h4>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className='font-bold'>Location:</p>
                                        <span>Warehouse No E17 - Dubai Airport Free Zone - Dubai</span>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className=' font-bold'>Phone:</p>
                                        <span>+971 50 582 0577</span>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className=' font-bold'>Email:</p>
                                        <a href='mailto:admin@vrisefreight.com'>admin@vrisefreight.com</a>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className='font-bold'>Opening hours:</p>
                                        <span>9:00 AM - 5:00 PM</span>
                                    </div>
                                </div>
                                <div className='footer_bg flex flex-col gap-2 mt-[20px] bg-[#2B5BAC] text-white  py-[30px] px-[30px]'>
                                    <h4 className=' font-bold pb-3 text-xl'>Germany office</h4>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className=' font-bold'>Location:</p>
                                        <span>Anhalter Strasse 3641 Standenbühl</span>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className=' font-bold'>Phone:</p>
                                        <span>+433267 57 506 +423454 22 639</span>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className=' font-bold'>Email:</p>
                                        <span> info@transporteriumde.com</span>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        <p className='font-bold'>Opening hours:</p>
                                        <span>9:00 AM - 5:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Contact_Office
