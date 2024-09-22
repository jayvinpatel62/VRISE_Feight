import { Container } from '@mui/material'
import React from 'react'

const Company = () => {
    return (
        <>
            <div>
                <Container>
                    <div className=' py-[120px]'>
                        
                    <div className="relative titleWithStroke py-5 theme-dark text-center">
                        <h4 className="font-bold text-xl theme-dark uppercase category">
                        Partners
                        </h4>
                        <h2 className="font-bold text-5xl theme-dark">
                            Companies Who <span className='text-primary'>Trust </span> Us
                        </h2>
                        <div className="backTextStroke font-bold theme-dark">
                        Partners
                        </div>
                    </div>
                    <div className=' flex flex-wrap w-full gap-10 pt-[50px] justify-center'>
                        <div className='border py-7 px-10 flex items-center'>
                            <img src={require("../image/asset 19.png")} alt="" className='max-w-[120px]'/>
                        </div>
                        <div  className='border py-5 px-10 flex items-center'>
                            <img src={require("../image/asset 22.png")} alt="" className='max-w-[120px]' />
                        </div>
                        <div  className='border py-5 px-10 flex items-center'>
                            <img src={require("../image/asset 21.png")} alt="" className='max-w-[120px]' />
                        </div>
                        <div  className='border py-5 px-10 flex items-center'>
                            <img src={require("../image/asset 20.png")} alt="" className='max-w-[120px]' />
                        </div>
                    </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Company
