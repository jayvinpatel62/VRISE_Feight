import { Container } from '@mui/material'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Main_footer = () => {
    return (
        <>
            <div className='bg-[#32373F]'>
                <div className='bg_img pt-[100px]'>
                    <Container>
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10'>
                            <div>
                                <div className="logo p-2 uppercase">
                                <h1 className='text-2xl text-white'><b>VRISE</b> <span className='text-primary'>FREIGHT</span> FZCO</h1>
                                </div>
                                <div className='flex text-[#fff] gap-5 text-[20px] pt-[40px]'>
                                    <div>
                                        <YouTubeIcon className='hover:text-[#009B7C]  transition-all ' />
                                    </div>
                                    <div>
                                        <TwitterIcon className='hover:text-[#009B7C]  transition-all ' />
                                    </div>
                                    <div>
                                        <LinkedInIcon className='hover:text-[#009B7C]  transition-all ' />
                                    </div>
                                    <div>
                                        < InstagramIcon className='hover:text-[#009B7C]  transition-all  ' />
                                    </div>
                                </div>
                            </div>

                            <div className=' text-white'>
                                <div>
                                    <h1 className=' font-bold pb-[15px]'>Dubai Office</h1>
                                    <span className=''>Warehouse No E17,</span>
                                    <p>Dubai Airport Free Zone,</p>
                                    <p>Dubai</p>
                                </div>
                                {/* <div className='pt-[30px]'>
                                    <h1 className=' font-bold pb-[15px]'>New Mexico Office </h1>
                                    <span>10 Maggie Valleys,</span>
                                    <p>United States </p>
                                </div> */}
                            </div>

                            <div className=' text-white'>
                                <div>
                                    <h1 className=' font-bold pb-[15px]'>Work Inquiries</h1>
                                    <span>Interested in</span><span className=' text-[#4EAD97] underline'> working with us?</span>
                                    <p>admin@vrisefreight.com</p>
                                </div>
                                <div className='pt-[30px]'>
                                    <h1 className=' font-bold pb-[15px]'>Phone</h1>
                                    <span>+971 50 582 0577</span>
                                </div>
                            </div>

                            <div>
                                <h2 className='font-bold pb-[20px] text-white'>Stay In Touch</h2>
                                <div className='flex gap-3 max-w-[200px]' >
                                    <input className='h-[50px] pl-[10px] flex-1' type="email" placeholder='Email Address' />
                                    <button className='border-2 rounded-br-lg px-5 border-primary  hover:bg-primary text-white transition-all duration-500' >< MailOutlineIcon /></button>
                                </div>
                                <p className='text-[#96999E] pt-[20px] text-[16px]'>Stay tuned for our latest news</p>
                            </div>
                        </div>
                        <div className='py-10'>
                            <hr className='border-dark-light' />
                        </div>
                        <p className='last_p py-[20px] text-[#96999E]'>Terms & Conditions |
                            Privacy Policy |
                            Cookies</p>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Main_footer
