import { Container } from '@mui/material'
import React from 'react'

const Phone = () => {
    return (
        <>
            <div className=' pt-[100px]'>
                <Container>
                    <div className=' flex'>
                        <div className="img">
                            <img src={require("../image/phone-img.png")} alt="" />
                        </div>
                        <div className=' pl-[100px]'>
                            <div className="w-[60%]">
                                <p className='uppercase text-[#A9AEB3] text-[13px] font-bold tracking-[2px] '>
                                    Mobile</p>
                                <h1 className='text-[45px] font-bold text-[#414A53]'>Awesome app which works for you </h1>
                                <p className=' pb-[40px] '>Ghost flathead coolie loach haddock duckbilled barracudina blackchin; dace European minnow dragon. Sauger Chinook salmon, inanga, milkfish whitefish.</p>
                                <div className='flex gap-[6px]'>
                                    <img className='w-[169px] h-[50px]' src={require("../image/apple.png")} alt="" />
                                    <img className='w-[169px] h-[50px] ' src={require("../image/google.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Phone
