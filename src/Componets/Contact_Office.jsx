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
                               
                                <p className=' text-[#fff] py-[20px]'>Bramble shark slickhead archerfish Black angelfish marblefish bigeye walleye fire bar danio silver driftfish pelagic cod. Wolf-herring spaghetti eel, ocean sunfish, sergeant major codling naked-back knifefish peamouth snubnose parasitic.</p>
                                <div className=''>
                                    <button className='uppercase py-[14px] px-[40px] mt-[40px] leading-[24px]  rounded-br-2xl border-2 hover:bg-[#fff] text-sm bg-transparent border-[#fff] hover:text-[#414A53] transition-all text-white '>get startred</button>
                                </div>
                            </div>
                            <div className=''>
                                <div className='w-full footer_bg bg-[#2B5BAC] text-white py-[30px] px-[30px]'>
                                    <h4 className=' font-bold pb-3 text-xl'>USA office</h4>
                                    <div className='flex gap-2'>
                                        <p className=' font-bold'>Location:</p>
                                        <span>av. Washington 165, NY CA 54003</span>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <p className=' font-bold'>Phone:</p>
                                        <span>+31 85 964 47 25 +31 65 792 63 11</span>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <p className=' font-bold'>Email:</p>
                                        <span>info@transporteriumusa.com</span>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <p className='font-bold'>Opening hours:</p>
                                        <span>9:00 AM - 5:00 PM</span>
                                    </div>
                                </div>
                                <div className='footer_bg mt-[20px] bg-[#2B5BAC] text-white  py-[30px] px-[30px]'>
                                    <h4 className=' font-bold pb-3 text-xl'>Germany office</h4>
                                    <div className=' flex gap-2'>
                                        <p className=' font-bold'>Location:</p>
                                        <span>Anhalter Strasse 3641 Standenbühl</span>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <p className=' font-bold'>Phone:</p>
                                        <span>+433267 57 506 +423454 22 639</span>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <p className=' font-bold'>Email:</p>
                                        <span> info@transporteriumde.com</span>
                                    </div>
                                    <div className=' flex gap-2'>
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
