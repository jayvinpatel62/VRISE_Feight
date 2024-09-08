import { Container } from '@mui/material'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {
  Autoplay,
  Scrollbar,
} from "swiper/modules";

import TitleWithStroke from '../Componets/TitleWithStroke';
import Blog_Item from './Blog_Item';

import Blog_img1 from '../image/asset 15.jpeg'
import Blog_img2 from '../image/asset 16.jpeg'
import Blog_img3 from '../image/asset 17.jpeg'
import Blog_img4 from '../image/asset 18.jpeg'


const Blog = () => {
    return (
        <>
            <div className=' bg-[#F3F6F5]'>
                <div className=' py-[150px]'>
                    <Container>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                            <div className="lg:w-[300px] ">
                                <TitleWithStroke backText="Blog" category="Blog" title="Our latest articles daily update" align='left'/>
                                <div className=''>
                                    <button className='uppercase py-[14px] px-[40px] mt-[40px] leading-[24px]  rounded-br-2xl border-2 hover:bg-[#4EAE98] text-sm bg-transparent border-[#4EAE98] transition-all text-black '>view More</button>
                                </div>
                            </div>
                            <div className='col-span-2 gap-5'>
                                <div className="blog-slider">
                                    <Swiper
                                    autoplay={{
                                        delay: 1500,
                                    }}
                                
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    scrollbar={{ draggable: true }}
                                    modules={[
                                        Autoplay,
                                        Scrollbar,
                                    ]}
                                    >
                                        <SwiperSlide>
                                            <Blog_Item
                                            img={Blog_img1}
                                            category="Transport"
                                            date="June 24, 2021"
                                            creator="Artureanec"
                                            title="Maintains Positive momentum"
                                            desc="Weever gray reef shark cardinalfish fierasfer Gila trout. Whitefish orangespine unicorn fish mola mola..."
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Blog_Item
                                                img={Blog_img2}
                                                category="Transport"
                                                date="June 24, 2021"
                                                creator="Artureanec"
                                                title="Big convenient warehouses"
                                                desc="Whitefish orangespine unicorn fish mola mola sunfish eucla cod muskellunge ghost flathead pompano bream..."
                                                />
                                            
                                        </SwiperSlide>
                                        <SwiperSlide >
                                                <Blog_Item
                                                img={Blog_img3}
                                                category="Transport"
                                                date="Apr 24, 2021"
                                                creator="Artureanec"
                                                title="Transportation in our World"
                                                desc="Whitefish orangespine unicorn fish mola mola sunfish eucla cod muskellunge ghost flathead pompano bream..."
                                                />
                                        </SwiperSlide>
                                        <SwiperSlide >
                                                <Blog_Item
                                                img={Blog_img4}
                                                category="Transport"
                                                date="Jun 24, 2021"
                                                creator="Artureanec"
                                                title="New subway line"
                                                desc="Whitefish orangespine unicorn fish mola mola sunfish eucla cod muskellunge ghost flathead pompano bream..."
                                                />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Blog
