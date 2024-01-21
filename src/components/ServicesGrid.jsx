import { Box } from '@mui/material'
import React, { useState } from 'react'

const ServicesGrid = () => {
    const [activeServices, setActiveServices] = useState({
        recurringClean: true,
        deepClean: true,
        movingClean: true,
        officeClean: true,
        carpetClean: false,
        commercialClean: false
    })

    const gridItem = (imgUrl, heading) => {
        return <Box className='m-auto items-center max-w-[400px]'>
            <img src={`/src/assets/${imgUrl}`} className='object-cover w-[340px] h-[340px]' />
            <h3 className='my-4'>{heading}</h3>
            <a href="/services">
                <button className='font-semibold btn-secondary'>
                    Learn More
                </button>
            </a>
        </Box>
    }

    return (
        <Box className='flex flex-col mb-5'>
            <Box className='mt-5 mb-12 m-auto items-center' >
                <h1>Specialized Residential Cleaning Services</h1>
                <h2 className='text-skin-prim'>Serving The Entire North Jersey Area</h2>
            </Box>


            <Box className='flex w-full  mb-10'>
                {activeServices.recurringClean &&
                    gridItem('recurring-clean.jpg', 'Housekeeping & Maid Services')
                }

                {activeServices.deepClean &&
                    gridItem('deep-clean.jpg', 'Deep House Cleaning Services')
                }

            </Box>

            <Box className='flex w-full  mb-5'>

                {activeServices.movingClean &&
                    gridItem('moving-clean.jpg', 'Move In/Out Cleaning Services')
                }

                {activeServices.officeClean &&
                    gridItem('office-clean.jpg', 'Office Cleaning Services')
                }


                {activeServices.commercialClean &&
                    <Box className='m-auto items-center max-w-[180px]'>
                        <img src='/src/assets/PureHousekeeping.jpg' className='max-w-[180px]' />
                        <h3>Commercial Janitorial Services</h3>
                        <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button>
                    </Box>}

                {activeServices.carpetClean &&
                    <Box className='m-auto items-center max-w-[180px]'>
                        <img src='/src/assets/PureHousekeeping.jpg' className='max-w-[180px]' />
                        <h3>Carpet Cleaning Services</h3>
                        <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button>
                    </Box>}
            </Box>
        </Box>
    )
}

export default ServicesGrid