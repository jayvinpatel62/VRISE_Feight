import { Container } from '@mui/material'
import React from 'react'
import StepsCard from './StepsCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {
  Autoplay,
  Scrollbar,
} from "swiper/modules";
import TitleWithStroke from './TitleWithStroke';

const Steps = () => {
    return (
        <>
            <div className='bg-[#F2F6F5] py-[100px]'>
                <Container>
                    <TitleWithStroke backText="Steps" category="How We Work" title="Steps of Cooperation" align='left' offset="10"/>
                    <br />
                    <br />
                    <div className="step_grid">
                        <div className="space"></div>

                        <div className="steps_slider" >
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
                            slidesPerView={3}
                            >
                                 <SwiperSlide>
                                    <StepsCard 
                                     day="01"
                                    month="06"
                                    title="Thinking strategy" 
                                    desc="Temperate ocean-bass, hussar Steve fish combtail gourami arrowtooth eel, blue whiting."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <StepsCard 
                                     day="02"
                                    month="06"
                                    title="Choice of solutions" 
                                    desc="Golden trout giant gourami Celebes rainbowfish straptail electric catfish zebrafish batfish."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <StepsCard 
                                     day="03"
                                    month="06"
                                    title="Analysis of solutions" 
                                    desc="Pacific hake false trevally queen parrotfish Black prickleback mosshead warbonnet sweeper!"
                                    />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <StepsCard 
                                    day="04"
                                    month="06"
                                    title="Route building" 
                                    desc="Australian lungfish southern Dolly Varden? Black angelfish discus zebrafish thornyhead Antarctic."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <StepsCard 
                                     day="05"
                                    month="06"
                                    title="Cargo preparation" 
                                    desc="Temperate ocean-bass, hussar Steve fish combtail gourami arrowtooth eel, blue whiting."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <StepsCard 
                                    day="06"
                                    month="06"
                                    title="Analysis of solutions" 
                                    desc="Golden trout giant gourami Celebes rainbowfish straptail electric catfish zebrafish batfish."
                                    />
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                    </div>
                </Container>

                    

                    
                    
               
            </div>
        </>
    )
}

export default Steps
