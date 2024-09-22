import { Container } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import TitleWithStroke from './TitleWithStroke';


const Price = () => {
    return (
        <>
            <div className='bg-[#F3F6F5] ' >
                <Container>
                    <div>
                        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10 py-[100px]'>
                            <div className="">
                                <TitleWithStroke backText="Price" category="Pricing" title="Fair Pricing Tailored to Your Needs
" align='left'/>
                                <p>Experience competitive and transparent pricing with our freight services. Whether you are shipping domestically or internationally, we offer rates that match the value and efficiency of our logistics solutions. Enjoy straightforward pricing without any hidden costs, tailored to fit the unique requirements of your cargo and shipping preferences. Plan your budget with confidence and benefit from our commitment to affordability and quality service.</p>
                            </div>
                            <div className='bg bg-white '>
                                <h1 className=' text-[25px] font-bold'>Regular <span className=' text-[#4EAE98]'>Pack</span></h1>
                                <h1 className=' text-[70px] font-bold tracking-wider '>
                                    150
                                    <span className=' text-[40px]'>USD</span>
                                </h1>
                                <div className="content leading-8">
                                    <div>
                                        <CheckIcon className=' text-[#4EAE98]' />
                                        <span>1 warehouse</span>
                                    </div>
                                    <div>
                                        <CheckIcon className=' text-[#4EAE98]' />
                                        <span>Custom business rules</span>
                                    </div>
                                    <div>
                                        <CheckIcon className=' text-[#4EAE98]' />
                                        <span className=' '>Real-time rate shopping</span>
                                    </div>
                                    <div>
                                        <CheckIcon className=' text-[#C4E7E0]' />
                                        <span className=' text-[#D7D8DA]'>100 freight shipments</span>
                                    </div>
                                    <div className=''>
                                        <button className='uppercase py-[14px] px-[40px] mt-[40px] leading-[24px]  rounded-br-2xl border-2 hover:bg-[#4EAE98] 
                                        text-sm bg-transparent border-[#4EAE98] transition-all text-black '>get startred</button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg bg-[#015BAC] text-[#fff]'>
                                <h1 className=' text-[25px] font-bold'>  Premium <span className=' text-[#4EAE98]'>Pack</span></h1>
                                <h1 className=' text-[70px] font-bold tracking-wider'>
                                    255
                                    <span className=' text-[40px]'>USD</span>
                                </h1>
                                <div className="content leading-8">
                                    <div>
                                        <CheckIcon className=' text-[#4EAE98]' />
                                        <span>1 warehouse</span>
                                    </div>
                                    <div>
                                        <CheckIcon className=' text-[#4EAE98]' />
                                        <span>Custom business rules</span>
                                    </div>
                                    <div>
                                        <CheckIcon className=' text-[#4EAE98]' />
                                        <span className=' '>Real-time rate shopping</span>
                                    </div>
                                    <div>
                                        <CheckIcon className=' text-[#4EAE98]' />
                                        <span className=' '>100 freight shipments</span>
                                    </div>
                                    <div className=''>
                                        <button className='uppercase py-[14px] px-[40px] mt-[40px] leading-[24px]  rounded-br-2xl border-2 hover:bg-[#fff]
                                        text-sm bg-transparent border-[#fff] hover:text-[#414A53] transition-all text-white '>get startred</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Price
