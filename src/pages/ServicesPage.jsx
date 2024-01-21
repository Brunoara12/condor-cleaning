import React from 'react'
import { Box, Button } from '@mui/material'
import { LockOpenOutlined } from '@mui/icons-material';
import ServicesGrid from '../components/ServicesGrid';
import Window from '../../src/assets/window-clean.svg?react'
import Fridge from "../../src/assets/fridge-clean.svg?react"
import Oven from "../../src/assets/oven-clean.svg?react"
import Cabinets from "../../src/assets/cabinets-clean.svg?react"
import InitialEstimateForm from '../components/InitialEstimateForm';
import DiscountSection from '../components/DiscountSection';

import BathroomImage from '../../src/assets/bathroom.jpg'

const ServicesPage = () => {
    return (
        <div className='flex flex-col flex-1'>
            {/*Page Title*/}
            <Box
                sx={{
                    backgroundImage: `url(${BathroomImage})`,
                    backgroundPositionX: '50%',
                    backgroundPositionY: "center",
                    height: '450px',
                    backgroundSize: 'cover',
                }}
                className='p-3 flex'>
                <Box className='flex flex-col bg-opacity-50 bg-black rounded-lg my-3 m-auto text-white basis-2/5 items-center justify-around'>
                    <h1>Residential Cleaning Services That You Can Trust</h1>
                    <h3>We understand your home is important to you. That’s why we focus on the quality of the clean. Our cleaners aren’t contract workers - they are employees. They care as much as we do.</h3>
                </Box>
            </Box>

            {/*Social Media Links*/}
            {/*
            <Box className='p-7 flex'>
                <Box className='flex my-3 m-auto w-60 items-center justify-around text-white' >
                    <Box className='bg-yellow-300 rounded-full w-8 h-8 items-center'>
                        <LockOpenOutlined />
                    </Box>

                    <Box className="bg-yellow-300 rounded-full w-8 h-8 items-center">
                        <LockOpenOutlined />
                    </Box>

                    <Box className="bg-yellow-300 rounded-full w-8 h-8 items-center">
                        <LockOpenOutlined />
                    </Box>

                    <Box className="bg-yellow-300 rounded-full w-8 h-8 items-center">
                        <LockOpenOutlined />
                    </Box>
                </Box>
            </Box>
            */}

            <Box className='bg-skin-bg h-6' />

            <Box className='flex slanted m-auto justify-center w-full h-[180px]'>
                <Box className='slanted w-[90%] text-skin-bg'>
                    <Box className='absolute h-[100px] left-[0%] w-[25%]'>
                        <Box className='flex flex-col translate-y-[25px] h-[100%]'>
                            <Fridge className='h-[100%] w-full' />
                            <p className='h-auto'>Inside Fridge</p>
                        </Box>
                    </Box>
                    <Box className='absolute h-[100px] left-[25%] w-[25%]'>
                        <Box className='flex flex-col translate-y-[25px] h-[100%]'>
                            <Oven className='h-[100%] w-full' />
                            <p className='h-auto'>Inside Oven</p>
                        </Box>
                    </Box>
                    <Box className='absolute h-[100px] left-[50%] w-[25%]'>
                        <Box className='flex flex-col translate-y-[25px] h-[100%]'>
                            <Cabinets className='h-[100%] w-full' />
                            <p className='h-auto'>Inside Cabinets</p>
                        </Box>
                    </Box>
                    <Box className='absolute h-[100px] left-[75%] w-[25%]'>
                        <Box className='flex flex-col translate-y-[25px] h-[100%]'>
                            <Window className='h-[100%] w-full' />
                            <p className='h-auto'>Inside Window</p>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/*Page Description*/}
            <Box className='w-full bg-skin-bg p-1'>
                <Box className='flex w-[80%] m-auto my-12'>
                    <Box className='my-3 mr-4 items-center text-white basis-1/2'>
                        <h1 className='mb-6'>Elevate Your Space with Professional Cleaning Services</h1>
                        <p>{`Our cleaning services company is dedicated to providing unparalleled cleanliness and hygiene
                        solutions for homes and businesses alike. With a commitment to excellence, our professional
                        team ensures that every space we touch is transformed into a spotless haven. Whether it's
                        routine maintenance, deep cleaning, or specialized services, we pride ourselves on delivering
                        meticulous attention to detail. Our well-trained and vetted staff employs the latest industry
                        techniques and environmentally friendly products to guarantee a pristine outcome. As a
                        customer-centric company, we prioritize transparency, reliability, and client satisfaction.
                        We understand that a clean environment contributes to overall well-being, and our mission is
                        to make that a reality for every client. From dusting to disinfecting, we go beyond
                        surface-level cleaning, leaving behind a refreshed and welcoming space. Choose our cleaning
                        services company for a seamless experience where cleanliness meets expertise.`}</p>
                    </Box>

                    <Box className='my-auto mx-auto pl-4'>
                        <img src='/src/assets/PureHousekeepingRectangle_WhFu.png' className='scale-[1.25] max-w-[450px]' />
                    </Box>
                </Box>
            </Box>

            {/*Services Provided*/}
            <Box>
                <ServicesGrid />
            </Box>

            {/*Form*/}
            <Box className='bg-skin-bg'>
                <Box className='mx-[30%] my-10'>
                    <InitialEstimateForm />
                </Box>
            </Box>

            <DiscountSection />

        </div >
    )
}

export default ServicesPage