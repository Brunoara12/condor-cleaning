import { Box } from '@mui/material'
import React from 'react'

const ServicesGrid = () => {
    return (
        <Box className='flex flex-col mb-5'>
            <Box className='my-3 m-auto items-center' >
                <h1>Commercial And Residential Cleaning Services</h1>
                <h2>Serving The Entire Greater Seattle Area</h2>
            </Box>

            <Box className='flex w-full  mb-5'>
                <Box className='m-auto items-center max-w-[180px]'>
                    <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]' />
                    <h3>Housekeeping & Maid Services</h3>
                    <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                        Learn More
                    </button>
                </Box>

                <Box className='m-auto items-center max-w-[180px]'>
                    <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]' />
                    <h3>Deep House Cleaning Services</h3>
                    <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                        Learn More
                    </button>
                </Box>

                <Box className='m-auto items-center max-w-[180px]'>
                    <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]' />
                    <h3>Carpet Cleaning Services</h3>
                    <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                        Learn More
                    </button>
                </Box>
            </Box>

            <Box className='flex w-full  mb-5'>
                <Box className='m-auto items-center max-w-[180px]'>
                    <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]' />
                    <h3>Office Cleaning Services</h3>
                    <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                        Learn More
                    </button>
                </Box>

                <Box className='m-auto items-center max-w-[180px]'>
                    <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]' />
                    <h3>Commercial Janitorial Services</h3>
                    <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                        Learn More
                    </button>
                </Box>

                <Box className='m-auto items-center max-w-[180px]'>
                    <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]' />
                    <h3>Move In/Out Cleaning Services</h3>
                    <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                        Learn More
                    </button>
                </Box>
            </Box>
        </Box>
    )
}

export default ServicesGrid