import React from 'react'
import { Box, Button } from '@mui/material'
import BackgroundImage from '../../src/assets/living-room.jpg'
import { LockOpenOutlined } from '@mui/icons-material';

const ServicesPage = () => {
    return (
        <div className='flex flex-col flex-1'>
            <h2>Services Page</h2>

                {/*Page Title*/}
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPositionX: '50%',
                    backgroundPositionY: "center",
                    height: '350px',
                    backgroundSize: 'cover',
                }}
                className='p-3 flex'>
                <Box className='flex flex-col bg-opacity-50 bg-black rounded-lg my-3 m-auto text-white basis-2/5 items-center justify-around'>
                    <h1>Trusted Commercial & Residential Cleaning Services</h1>
                    <h2>Queen Bee offers exceptional commercial and residential cleaning services in Seattle, Bellevue, Lynnwood, Shoreline & surrounding communities. Our professional cleaning technicians are 100% committed to your satisfaction!</h2>
                </Box>
            </Box>

                {/*Social Media Links*/}
            <Box className='p-7 flex'>
                <Box className='flex my-3 m-auto w-60 items-center justify-around text-white' >
                    <Box className='bg-yellow-300 rounded-full w-8 h-8 items-center'>
                        <LockOpenOutlined/>
                    </Box>

                    <Box className="bg-yellow-300 rounded-full w-8 h-8 items-center">
                        <LockOpenOutlined/>
                    </Box>

                    <Box className="bg-yellow-300 rounded-full w-8 h-8 items-center">
                        <LockOpenOutlined/>
                    </Box>

                    <Box className="bg-yellow-300 rounded-full w-8 h-8 items-center">
                        <LockOpenOutlined/>
                    </Box>
                </Box>
            </Box>

                {/*Page Description*/}
            <Box className='flex w-full bg-black p-1'>
                <Box className='my-3 m-auto items-center text-white basis-1/2'>
                    <h1>Cleaning Services Designed To WOW</h1>
                    <h2>Experience a new era in cleaning services as we revolutionize the industry. Our commitment to a seamless online experience sets us apart. Discover the buzz surrounding our innovative approach and embrace the future of cleanliness today. Our convenient online platform allows you to schedule services effortlessly. We combine cutting-edge technology with skilled professionals to elevate cleanliness standards. Meticulous attention to detail ensures spotless results using eco-friendly solutions. Exceptional customer service is our priority, with a dedicated team ready to assist you. Personalized cleaning solutions cater to your unique needs. Join us in embracing the future of cleaning by scheduling your cleaning session with us today.</h2>
                </Box>

                <Box className='my-3 m-auto items-center'>
                    <img src='/src/assets/condor-cleaning-p4.png' className='max-w-[180px]'/>
                </Box>
            </Box>

                {/*Services Provided*/}
            <Box className='flex flex-col mb-5'>
                <Box className='my-3 m-auto items-center' >
                    <h1>Commercial And Residential Cleaning Services</h1>
                    <h2>Serving The Entire Greater Seattle Area</h2>
                </Box>

                <Box className='flex w-full  mb-5'>
                    <Box className='m-auto items-center max-w-[180px]'>
                        <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]'/>
                        <h3>Housekeeping & Maid Services</h3>
                        <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button> 
                    </Box>

                    <Box className='m-auto items-center max-w-[180px]'>
                        <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]'/>
                        <h3>Deep House Cleaning Services</h3>
                        <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button> 
                    </Box>

                    <Box className='m-auto items-center max-w-[180px]'>
                        <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]'/>
                        <h3>Carpet Cleaning Services</h3>
                        <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button> 
                    </Box>
                </Box>

                <Box className='flex w-full  mb-5'>
                    <Box className='m-auto items-center max-w-[180px]'>
                        <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]'/>
                        <h3>Office Cleaning Services</h3>
                        <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button> 
                    </Box>
                    
                    <Box className='m-auto items-center max-w-[180px]'>
                        <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]'/>
                        <h3>Commercial Janitorial Services</h3>
                        <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button> 
                    </Box>

                    <Box className='m-auto items-center max-w-[180px]'>
                        <img src='/src/assets/Condor Cleaning_WhBg.png' className='max-w-[180px]'/>
                        <h3>Move In/Out Cleaning Services</h3>
                        <button className="bg-white border border-yellow-500 text-black hover:text-yellow-500 font-bold py-2 px-4 rounded-full">
                            Learn More
                        </button> 
                    </Box>
                </Box>
            </Box>

                {/*Form*/}
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPositionX: '50%',
                    backgroundPositionY: '-300px',
                    height: '600px',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                }}
                className='p-3 flex'>
                <Box className='flex flex-col my-3 m-auto text-black basis-1/3 items-center justify-around'>
                    Request Your Free Quote Now
                    <form className="max-w-lg">
                        <Box className='flex mb-2'>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="First Name"/>

                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"/>
                        </Box>
                        <Box className='flex mb-2'>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone-number" type="text" placeholder="Phone Number"/>

                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Email"/>
                        </Box>
                        <Box className='flex mb-2'>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mr-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Zip Code"/>

                            <select className="block appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-service">
                                <option>Desired Service</option>
                                <option>Housekeeping & Maid Services</option>
                                <option>Deep House Cleaning Services</option>
                                <option>Carpet Cleaning Services</option>
                                <option>Office Cleaning Services</option>
                                <option>Commercial Janitorial Services</option>
                                <option>Move In/Out Cleaning Services</option>
                            </select>
                        </Box>
                        <button className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Sign Up
                        </button>
                    </form>
                </Box>
            </Box>

                {/*Map*/}
            <Box className='flex w-full my-3 mx-500 m-auto items-center justify-around'>
                <Box>
                    map
                </Box>
                <Box className='flex flex-col max-w-[200]'>
                    <Box className='m-auto items-center'>
                        Most Trusted Commercial & Residential Cleaning Services In The Greater Seattle Metro Area.
                    </Box>

                    <Box className='m-auto items-center max-w-[200]'>
                        Service Area: Bellevue, Bothell, Edmonds, Everett, Issaquah, Kirkland, Lynnwood, Marysville, Mercer Island, Mukilteo, North Creek, Redmond, Renton, Sammamish, Shoreline, Seattle, Smokey Point, and surrounding communities.
                    </Box>

                    <Box className='m-auto items-center max-w'>
                        Find Us On Google Maps
                    </Box>

                    <Box className='m-auto items-center max-w'>
                        info@qbclean.com
                    </Box>

                    <Box className='m-auto items-center max-w'>
                        (123) 456-7890
                    </Box>

                    <Box className='m-auto items-center max-w'>
                        123 56th Rd Nametown, NJ 66542
                    </Box>

                    <Box className='m-auto items-center max-w'>
                        7:00am - 9:00pm Mon - Sun
                    </Box>
                </Box>
            </Box>

        </div >
    )
}

export default ServicesPage