// import { Container } from '@mui/material'
import React from 'react'

// import Logo from "../image/asset 24.png"
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from '@mui/material/Link';
import AppsIcon from '@mui/icons-material/Apps';
import { Button, Drawer } from '@mui/material';
// import { Container } from '@mui/material';


const Navbar = () => {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <>
        
        <Drawer open={open} onClose={toggleDrawer(false)}  >
                <div className='nav-menu p-8 min-w-[280px] py-10'>
                    <ul className='uppercase flex flex-col gap-5 font-medium'>
                        <li><Link to="/" href='' color="inherit" >Home</Link></li>
                        <li><Link to="/about" href='' color="inherit" >About</Link></li>
                        <li><Link to="/services" href='' color="inherit" >Services</Link>
                        </li>
                        <li><Link to="/contact" href='' color="inherit" >Contact</Link></li>
                    </ul>
                    <br />
                    <br />
                    <button className='flex justify-center items-center w-full p-5 text-white  uppercase bg-primary border-none'>Get A quote</button>
                </div>
        </Drawer>
        
            <div className='xl:max-w-[1600px] md:max-w-[1170px] m-auto'>
                
                    <div className="bg-[#fff] flex justify-between ps-4 items-center w-full shadow-lg min-h-[80px]" >
                        <div className=' flex justify-between items-center gap-10'>
                           
                            <div className="logo p-2 uppercase flex items-center">
                            
                             <h1 className='text-2xl'><b>VRISE</b> <span className='text-primary'>FREIGHT</span> FZCO</h1>
                                {/* <img src={Logo} width={150} alt="" /> */}
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className='nav-menu p-5'>
                                <ul className='uppercase flex gap-5 font-medium'>
                                    <li><Link to="/" href='' color="inherit" >Home</Link></li>
                                    <li><Link to="/about" href='' color="inherit" >About</Link></li>
                                    <li><Link to="/services" href='' color="inherit" >Services</Link>
                                    </li>
                                    <li><Link to="/contact" href='' color="inherit" >Contact</Link></li>
                                </ul>

                                
                            </div>
                        </div>

                            <div className='flex items-center'>
                                <div className="block lg:hidden">
                                    <Button onClick={toggleDrawer(true)} className="rounded  bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="#212121"
                                            strokeWidth="2"
                                            className="w-[30px]"
                                            >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </Button>
                                </div>
                                <div className="hidden md:block">
                                    <button className='flex justify-center items-center  uppercase w-[250px] min-h-[80px] h-full bg-primary border-none'>Get A quote</button>
                                </div>
                            </div>
                       
                        
                    </div>
                
            </div>
        </>
    )
}

export default Navbar
