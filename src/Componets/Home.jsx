import React from 'react'
import MainSilder from './MainSilder'
import TransportService from './TransportService'
import Feature from './Contact_Office'
import AbouHome from '../Pages/AbouHome'
import Price from './Price'
import Delivery from '../Pages/Delivery'
import Steps from './Steps'
import Testimonials from '../Pages/Testimonials'
import Company from './Company'
import Blog from './Blog'
import Phone from './Phone'
import Contact_Office from './Contact_Office'
import Main_footer from './Main_footer'
import Contact_Home from '../Pages/Contact_Home'

const Home = () => {
    return (
        <>
            <MainSilder />

            <TransportService />

            <AbouHome />

            <Steps />

            <Delivery />
           

            {/* <Phone /> */}

            <Contact_Home />

            <Price />

            <Testimonials />

            <Blog />

            <Company />

            <Contact_Office />

            <Main_footer />

            

        </>
    )
}

export default Home
