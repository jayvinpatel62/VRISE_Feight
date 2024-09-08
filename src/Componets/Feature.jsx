import { Container } from '@mui/material'
import React from 'react'
import WarehouseIcon from '@mui/icons-material/Warehouse';

const Feature = () => {
    return (
        <>
            <div className='bg-[#F3F6F5] pt-[100px]'>
                <Container>
                    <div >
                        <div className=" w-[40%]">
                            <p className='uppercase text-[#AAAEB3] text-[13px] font-bold tracking-[2px] '>Features</p>
                            <h1 className='text-[45px] font-bold text-[#6A6E76]'>Powerful Features
                                of <span className=' text-[#4EAE98]'> TransX</span> Warehouse</h1>
                        </div>

                        <div className="warehouse-cart flex gap-5 pt-[50px]">
                            <div className='bg bg-white py-[27px] pr-[30px] pl-[40px]'>
                                <h1 className=' font-bold text-[20px] text-[#434A53] pb-[10px]'>Warehouse</h1>
                                <p className='leading-7 text-[#6A6E8C]'>Kokanee sprat shrimpfish. Pacific hake false trevally queen parrotfish.</p>
                                <div className="icon pt-[20px]">
                                    <img className='text-[#003D90] ' src={require("../image/asset 38.png")} alt="" />
                                </div>
                            </div>
                            <div className='bg bg-white py-[27px] pr-[30px] pl-[40px]'>
                                <h2 className=' font-bold text-[20px] text-[#434A53] pb-[10px]'>Warehouse</h2>
                                <p className='leading-7 text-[#6A6E8C]'>Kokanee sprat shrimpfish. Pacific hake false trevally queen parrotfish.</p>
                                <div className="icon pt-[20px]">
                                    <img src={require("../image/asset 40.png")} alt="" />
                                </div>
                            </div>
                            <div className='bg bg-white py-[27px] pr-[30px] pl-[40px]'>
                                <h2 className=' font-bold text-[20px] text-[#434A53] pb-[10px]'>Warehouse</h2>
                                <p className='leading-7 text-[#6A6E8C]'>Kokanee sprat shrimpfish. Pacific hake false trevally queen parrotfish.</p>
                                <div className="icon pt-[20px]">
                                    <img src={require("../image/asset 42.png")} alt="" />
                                </div>
                            </div>
                            <div className='bg bg-white py-[27px] pr-[30px] pl-[40px]'>
                                <h2 className=' font-bold text-[20px] text-[#434A53] pb-[10px]'>Warehouse</h2>
                                <p className='leading-7 text-[#6A6E8C]'>Kokanee sprat shrimpfish. Pacific hake false trevally queen parrotfish.</p>
                                <div className="icon pt-[20px]">
                                    <img src={require("../image/asset 44.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='pb-[100px]'>
                            <button className='uppercase py-[14px] px-[40px] mt-[40px] leading-[24px]  rounded-br-2xl border-2 hover:bg-[#4EAE98] bg-transparent border-[#4EAE98] transition-all text-black '>Explore More</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Feature
