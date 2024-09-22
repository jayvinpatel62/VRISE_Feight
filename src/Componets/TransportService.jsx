import { Container } from '@mui/material'
import React from 'react'
import TitleWithStroke from './TitleWithStroke';
import ServiceCard from './ServiceCard';
import EastIcon from '@mui/icons-material/East';
import icn1 from '../image/icon_new_1.png'
import icn2 from '../image/icon_new_2.png'
import icn3 from '../image/icon_new_3.png'


const TransportService = () => {
  return (
    <>
      <section className='pt-[140px] bg-[#F3F6F5] bg-grd-btm'>
        <Container>
          <div className='p-5'>
            <TitleWithStroke backText="Services" category="Services" title="Vrise Services" align='center'/>
          </div>

          <div className='min-h-10'></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            <ServiceCard 
            img={icn1} 
            title="Truck Freight" 
            num='01'
            desc="Facing driver shortages and increased demand, leading to delays." 
            />
            <ServiceCard 
            img={icn2} 
            title="Ship Freight" 
            num='02'
            desc="Port congestion and container shortages are major issues." 
            />

            <ServiceCard 
            img={icn3} 
            title="Air Freight" 
            num='03'
            desc="Limited capacity and high costs due to reduced passenger flights." 
            />
            
          </div>

        </Container>
      </section>
    </>
  )
}

export default TransportService
