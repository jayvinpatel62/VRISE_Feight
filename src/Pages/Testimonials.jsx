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

const Testimonials = () => {
    return (
        <>
            <div className='bg-[#32373F]'>
                <div className='bg_img py-[100px]'>
                    <Container>
                    
                        <div className=''>
                            <TitleWithStroke backText="People" category="Testimonials" title="What People Say About Us" align='center' color="white"/>
                            <br />
                            <div className="testimonial-slider">
                                <Swiper
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                              
                                scrollbar={{ draggable: true }}
                                modules={[
                                    Autoplay,
                                    Scrollbar,
                                ]}
                                slidesPerView={1}
                                >
                                <SwiperSlide>
                                    <div className='testimonial-item'>
                                        <div className='text-center text-white px-5 px-5 md:px-[100px] py-10'>
                                            <p>Dogteeth tetra; sea catfish jack, golden trout. Marblefish spotted dogfish, mako shark anglerfish, "sharksucker swordtail northern pike." Shell-ear mud minnow Blobfish, candlefish; plownose chimaera bala shark southern sandfish lungfish longfin smelt. limbing perch sea bream bleak seascolar Cherubfish pleco jewelfish threadfin, bala shark crocodile shark bleak Asian carps trout cod. Chubsucker lighthousefish prickly shark mackerel shark golden loach plunderfish; stingfish midshipman golden loach dragon goby sculpin. California halibutscup. w Blobfish, candlefish; plownose chimaera bala shark southern sandfish lungfish longfin smelt. limbing perch sea bream bleak seascolar Cherubfish pleco jewelfish threadfin, bala sh</p>
                                        </div>
                                        <div className='author_container'>
                                            <div className="author before:text-primary">
                                                <h5 className='text-[18px] text-[#fff] font-bold'>Alice Johnson</h5>
                                                <p className='text-[18px] text-[#73787F]'>Service Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='testimonial-item'>
                                            <div className='text-center text-white px-5 md:px-[100px] py-10'>
                                                <p>Dogteeth tetra; sea catfish jack, golden trout. Marblefish spotted dogfish, mako shark anglerfish, "sharksucker swordtail northern pike." Shell-ear mud minnow Blobfish, candlefish; plownose chimaera bala shark southern sandfish lungfish longfin smelt. limbing perch sea bream bleak seascolar Cherubfish pleco jewelfish threadfin, bala shark crocodile shark bleak Asian carps trout cod. Chubsucker lighthousefish prickly shark mackerel shark golden loach plunderfish; stingfish midshipman golden loach dragon goby sculpin. California halibutscup. w Blobfish, candlefish; plownose chimaera bala shark southern sandfish lungfish longfin smelt. limbing perch sea bream bleak seascolar Cherubfish pleco jewelfish threadfin, bala sh</p>
                                            </div>
                                            <div className='author_container'>
                                                <div className="author before:text-primary">
                                                    <h5 className='text-[18px] text-[#fff] font-bold'>Alice Johnson</h5>
                                                    <p className='text-[18px] text-[#73787F]'>Service Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className='testimonial-item'>
                                        <div className='text-center text-white px-5 md:px-[100px] py-10'>
                                            <p>Dogteeth tetra; sea catfish jack, golden trout. Marblefish spotted dogfish, mako shark anglerfish, "sharksucker swordtail northern pike." Shell-ear mud minnow Blobfish, candlefish; plownose chimaera bala shark southern sandfish lungfish longfin smelt. limbing perch sea bream bleak seascolar Cherubfish pleco jewelfish threadfin, bala shark crocodile shark bleak Asian carps trout cod. Chubsucker lighthousefish prickly shark mackerel shark golden loach plunderfish; stingfish midshipman golden loach dragon goby sculpin. California halibutscup. w Blobfish, candlefish; plownose chimaera bala shark southern sandfish lungfish longfin smelt. limbing perch sea bream bleak seascolar Cherubfish pleco jewelfish threadfin, bala sh</p>
                                        </div>
                                        <div className='author_container'>
                                            <div className="author before:text-primary">
                                                <h5 className='text-[18px] text-[#fff] font-bold'>Alice Johnson</h5>
                                                <p className='text-[18px] text-[#73787F]'>Service Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                </Swiper>
                            </div>
                          
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Testimonials
