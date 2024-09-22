import { Container, FormControlLabel } from '@mui/material'
import React from 'react'
import BgContactBack from "../image/BgContactBack.jpg";
import { CheckBox } from '@mui/icons-material';


const Contact_Home = () => {
    return (
        <>
            {/* <div className='content_img object-cover ' > */}
            <div className="bg-contactHome after:bg-[#F3F6F5] pt-[150px] pb-[50px]">
            {/* <div className=' py-[100px]' > */}
                <Container>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[70px]'>
                        <div className='form bg-white'>
                            <form action="" className='border p-10 border-dark-light'>
                                <div className='grid gap-5 pb-8'>
                                    <p className=' pb-[20px] font-bold '>Personal data</p>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                        <input type="text" placeholder='Full Name' className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="text" placeholder='Subject' className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="email" placeholder='Email' className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="text" placeholder='Phone Number' className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                    </div>
                                </div>
                                <div className='grid gap-5 pb-8'>
                                    <p className='font-bold '>Shipment data</p>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                        <input type="text" placeholder='Delivery City'  className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="text" placeholder='City of departure' className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="" placeholder='Freight type'  className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="text" placeholder='Incoterms' className=' py-3 px-3 border border-dark-light' />
                                    </div>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                                        <input type="text" placeholder='Weight'   className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="text" placeholder='Height'  className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="text" placeholder='Weight'  className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                        <input type="text" placeholder='Height'  className='py-3 px-4 border border-dark-light placeholder-dark-light text-sm' />
                                    </div>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                                        <div><input type="checkbox" name="" id="check1" className='me-2' /><label htmlFor="check1" className='text-dark-light text-sm'>Fragile</label></div>
                                        <div><input type="checkbox" name="" id="check2" className='me-2' /><label htmlFor="check2" className='text-dark-light text-sm'>Express</label></div>
                                        <div><input type="checkbox" name="" id="check3" className='me-2' /><label htmlFor="check3" className='text-dark-light text-sm'>Insurance</label></div>
                                        <div><input type="checkbox" name="" id="check4" className='me-2' /><label htmlFor="check4" className='text-dark-light text-sm'>Packaging</label></div>
                                    </div>
                                    <div className='pt-6'>
                                        <button className=' w-full uppercase py-[14px] px-[40px]  leading-[24px]  rounded-br-2xl border-2 
                                            text-sm bg-transparent hover:text-[#414A53] border-[#54CA98] transition-all  hover:bg-[#54CA98] hover:text-white '>Request a Quote</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-white">
                            {/* <p className='uppercase font-bold text-[12px]'>Calculator</p> */}
                            <h1 className=' text-[45px] font-bold py-[10px] leading-10'>Estimate your transportation costs in advance with our easy-to-use freight cost calculator.  </h1>
                            <p className=' text-[16px] py-[10px]'>Get a clear understanding of the expenses for your shipment, tailored to meet the specific requirements of your goods.</p>
                            <p className=' text-[16px] py-[10px]'>Whether you're shipping locally or internationally, our calculator simplifies the process, providing you with a quick and accurate quote. Start planning your freight journey with confidence and efficiency today.</p>
                            <div className='gap-10 py-[30px] flex'>
                                <div className=''>
                                    <div class="icon">
                                        <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg"><path d="M160 0C93.726 0 40 53.726 40 120v88c.035 30.913 25.087 55.965 56 56h8v-16h-8c-22.08-.026-39.974-17.92-40-40v-88c0-57.438 46.562-104 104-104s104 46.562 104 104v88c-.026 22.08-17.92 39.974-40 40h-8v16h8c30.913-.035 55.965-25.087 56-56v-88C280 53.726 226.274 0 160 0zM65.928 377.032l5.848-9.208-13.512-8.576-5.848 9.216c-17.687 27.872-16.374 63.76 3.304 90.264V480h16v-24a7.999 7.999 0 00-1.752-5c-17.008-21.262-18.631-50.98-4.04-73.968zM440 0H336c-22.08.026-39.974 17.92-40 40v80c.026 22.08 17.92 39.974 40 40h16v32a8 8 0 0013.656 5.656L403.312 160H440c22.08-.026 39.974-17.92 40-40V40c-.026-22.08-17.92-39.974-40-40zm24 120c0 13.255-10.745 24-24 24h-40a8 8 0 00-5.656 2.344L368 172.688V152a8 8 0 00-8-8h-24c-13.255 0-24-10.745-24-24V40c0-13.255 10.745-24 24-24h104c13.255 0 24 10.745 24 24v80z"></path><path d="M336 40h56v16h-56zm72 0h32v16h-32zm-72 32h104v16H336zm0 32h56v16h-56zm-68.416 264.464l-5.848-9.216-13.512 8.576 5.848 9.216c14.592 22.985 12.969 52.701-4.04 73.96a7.999 7.999 0 00-1.752 5v24h16v-21.272c19.678-26.504 20.991-62.392 3.304-90.264z"></path><path d="M472 272h-72c-30.016.035-54.666 23.729-55.888 53.72L320 369.128V336c-.035-30.913-25.087-55.965-56-56h-29.24l-.216-.168-.144.168H216c-8.837 0-16-7.163-16-16v-18.824A80.002 80.002 0 00240 176v-64a80.165 80.165 0 00-9.6-37.968 8 8 0 00-10.4-3.44L84.592 134.304a8 8 0 00-4.592 7.24V176a80.002 80.002 0 0040 69.176V264c0 8.837-7.163 16-16 16H56c-30.913.035-55.965 25.087-56 56v144h16V336c.026-22.08 17.92-39.974 40-40h25.456l72.04 100.656a8 8 0 006.4 3.344H160a8.002 8.002 0 006.4-3.2l76-100.8H264c22.08.026 39.974 17.92 40 40v64a8 8 0 0014.992 3.88L356.704 336h45.864l-78 144h18.2L420.8 336h3.2c30.913-.035 55.965-25.087 56-56a8 8 0 00-8-8zM96 176v-29.376l123.528-58.128A64 64 0 01224 112v64c0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64zm64.168 202.496L135.48 344h50.688l-26 34.496zM198.272 328H124l-22.904-32H104c17.673 0 32-14.327 32-32v-11.688a79.94 79.94 0 0048 0V264c0 17.673 14.327 32 32 32h6.4l-24.128 32zM424 320h-63.2c3.825-18.613 20.198-31.979 39.2-32h63.2c-3.825 18.613-20.198 31.979-39.2 32z"></path></svg>
                                    </div>
                                    <p className=' text-center pt-[20px]'>Support 24/7</p>
                                </div>
                                <div>
                                    <div class="icon">
                                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M59 2H39a3 3 0 00-3 3v20a3 3 0 003 3h20a3 3 0 003-3V5a3 3 0 00-3-3zm-8 2v9.131l-1.445-.963a1 1 0 00-1.11 0L47 13.131V4zm9 21a1 1 0 01-1 1H39a1 1 0 01-1-1V5a1 1 0 011-1h6v11a1 1 0 001.555.832L49 14.2l2.445 1.63A1 1 0 0053 15V4h6a1 1 0 011 1zM13 62a1 1 0 01-.754-.343C11.828 61.177 2 49.831 2 44a11 11 0 0122 0c0 5.831-9.828 17.177-10.246 17.657A1 1 0 0113 62zm0-27a9.011 9.011 0 00-9 9c0 3.875 5.926 11.775 9 15.458 3.073-3.684 9-11.585 9-15.458a9.011 9.011 0 00-9-9z"></path><path d="M13 49a5 5 0 115-5 5.006 5.006 0 01-5 5zm0-8a3 3 0 103 3 3 3 0 00-3-3z"></path><path d="M57 62H18a1 1 0 010-2h39a3 3 0 000-6H32a5 5 0 010-10h15a3 3 0 000-6H32a5.006 5.006 0 01-5-5v-4a3 3 0 00-3-3H9a7 7 0 010-14h24a1 1 0 010 2H9a5 5 0 000 10h15a5.006 5.006 0 015 5v4a3 3 0 003 3h15a5 5 0 010 10H32a3 3 0 000 6h25a5 5 0 010 10z"></path></svg>
                                    </div>
                                    <p className=' text-center pt-[20px]'>Online Tracking
                                    </p>
                                </div>
                                <div >
                                   <div class="icon">
                                   <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M20 44h-2a1 1 0 010-2h2a1 1 0 010 2zm19 0H24a1 1 0 010-2h15a1 1 0 010 2zm0 4H18a1 1 0 010-2h21a1 1 0 010 2zm0 4H18a1 1 0 010-2h21a1 1 0 010 2zm-3 4H18a1 1 0 010-2h18a1 1 0 010 2zM19 32h-1a1 1 0 010-2h1a1 1 0 010 2zm25 0H23a1 1 0 010-2h21a1 1 0 010 2zm-21 4h-5a1 1 0 010-2h5a1 1 0 010 2zm21 0H27a1 1 0 010-2h17a1 1 0 010 2z"></path><path d="M52.707 10.293l-8-8A1 1 0 0044 2H10a1 1 0 00-1 1v58a1 1 0 001 1h36a1 1 0 000-2H11V4h31v7a1 1 0 001 1h8v23a1 1 0 002 0V11a1 1 0 00-.293-.707zM44 4.414L49.586 10H44z"></path><path d="M25 8a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V11a3 3 0 00-3-3zm7 2v5.382l-.553-.277a1 1 0 00-.894 0l-.553.277V10zm6 1v12a1 1 0 01-1 1H25a1 1 0 01-1-1V11a1 1 0 011-1h3v7a1 1 0 001.447.895L31 17.118l1.553.777A1 1 0 0034 17v-7h3a1 1 0 011 1zm2 29H18a1 1 0 010-2h22a1 1 0 010 2zm12 22a1 1 0 01-.555-.168L47.789 59.4A12.973 12.973 0 0142 48.578V43a1 1 0 01.594-.914l9-4a1 1 0 01.812 0l9 4A1 1 0 0162 43v5.578A12.973 12.973 0 0156.211 59.4l-3.656 2.437A1 1 0 0152 62zm-8-18.35v4.928a10.976 10.976 0 004.9 9.152L52 59.8l3.1-2.068a10.976 10.976 0 004.9-9.154V43.65l-8-3.556z"></path><path d="M50 54a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L50 51.586l6.293-6.293a1 1 0 011.414 1.414l-7 7A1 1 0 0150 54z"></path></svg>
                                   </div>
                                    <p className=' text-center pt-[20px]'>Cargo Insurance </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* </div> */}
        </>
    )
}

export default Contact_Home
