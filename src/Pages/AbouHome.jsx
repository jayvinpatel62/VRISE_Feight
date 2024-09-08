import { Container } from '@mui/material'
import React from 'react'
import TitleWithStroke from '../Componets/TitleWithStroke'

const AbouHome = () => {
    return (
        <>
            <section className='aboutHomeSection'>
                <div className='pt-[200px]'>
                    <Container>
                        <div className='bgcolor text-white flex flex-col  lg:flex-row gap-[90px] pb-10'>
                            <div className='flex justify-between md:flex-col items-start gap-10 min-w-[350px]' >
                                <div>
                                <TitleWithStroke backText="About" category="About" title="Powerfull Features of Vrise" align='left' color="white"/>
                                </div>
                                <img src={require('../image/video-block_2-370x460.jpg')} alt="" className='w-full' />
                            </div>

                            <div className='flex-grow-1 pb-10'>
                                <div className=' pb-7'>
                                    <p>
                                        Giant gourami grunt sculpin yellowfin cutthroat trout rocket danio rockling scythe butterfish shortnose sucker zebra bullhead shark?
                                    </p>
                                </div>
                                <div className=' pb-7'>
                                    <p>
                                        Zingel stonefish barb-cherry salmon rudderfish whale catfish pink salmon brook lamprey European perch yellow bass spookfish Blacksmelt airbreathing catfishevil ray.
                                    </p>
                                </div>
                                <div className=' pb-7'>
                                    <p>
                                        Coelacanth loosejaw lefteye flounder slipmouth airsac catfish slender barracudina jack. Hillstream loach tadpole cod orangestriped triggerfish zebra pleco gurnard tadpole cod. Round whitefish, “burrowing goby shark. Queen stingfish midshipman golden loach
                                    </p>
                                </div>
                                <div>
                                    <button className='uppercase py-[14px] px-[40px] mt-[40px] leading-[24px]  rounded-br-2xl border-2 hover:bg-[#4EAE98] bg-transparent border-[#4EAE98] transition-all text-white '>Read More</button>
                                </div>
                                <div className="flex gap-[50px] pt-[50px]">
                                    <div>
                                        <p className=' font-bold'> Delivered packeges</p>
                                        <h1 className='numStorke'>50 k</h1>
                                    </div>
                                    <div>
                                        <p>New equipment</p>
                                        <h1 className='numStorke'>100</h1>
                                    </div>
                                    <div>
                                        <p>Closed deal</p>
                                        <h1 className='numStorke'>12 k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default AbouHome
