// import { Container } from '@mui/material'
import React from 'react'

// import Logo from "../image/asset 24.png"
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from '@mui/material/Link';
import AppsIcon from '@mui/icons-material/Apps';
// import { Container } from '@mui/material';

const Navbar = () => {
    return (
        <>
            <div className='xl:max-w-[1600px] md:max-w-[1170px] m-auto bg-none'>
                {/* <Container> */}
                    <div className="bg-[#fff] flex justify-between ps-4 items-center w-full shadow-lg  z-[9999]" >
                        <div className=' flex justify-between items-center gap-10'>
                            {/* <button>
                               <AppsIcon/>
                            </button> */}
                            <div className="logo p-2 uppercase">
                                <h1 className='text-2xl'><b>Vrise</b> <span className='text-primary'>Fieght</span></h1>
                                {/* <img src={Logo} width={150} alt="" /> */}
                            </div>
                        </div>
                        <div className='nav-menu p-5'>
                            <ul className='uppercase flex gap-5 font-medium'>
                                <li><Link to="/" href='' color="inherit" >Home</Link></li>
                                <li><Link to="/about" href='' color="inherit" >About</Link></li>
                                <li><Link to="/services" href='' color="inherit" >Services</Link></li>
                                <li><Link to="/contact" href='' color="inherit" >Contact</Link></li>
                            </ul>
                        </div>
                        <button className='flex justify-center items-center  uppercase w-[250px] min-h-[80px] h-full bg-primary border-none'>Get A quote</button>
                    </div>
                {/* </Container> */}
            </div>
        </>
    )
}

export default Navbar
