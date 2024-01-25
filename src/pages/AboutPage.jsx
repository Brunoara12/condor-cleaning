import { Box } from '@mui/material'
import React from 'react'

import WaveDesign from '../../src/assets/wave-opacity.svg?react';
import BackgroundBubbles from '../../src/assets/circle-scatter-haikei.svg';

const AboutPage = () => {
    return (
        <Box className='w-full'>
            <Box className='bg-skin-buttPrim h-4' />
            <Box sx={{
                backgroundImage: `url(${BackgroundBubbles})`,
                backgroundSize: 'cover',
            }} >
                <Box className='py-16 px-[10%]'>
                    <Box className='p-5 bg-white bg-opacity-95 border-skin-hover rounded-2xl border-2 drop-shadow-2xl'>
                        <h1>About Pure Housekeeping</h1>
                        <p className='text-lg mt-5'>Your trusted partner for pristine spaces, our cleaning company in the Northern Jersey area that
                            delivers top-notch services with expertise, efficiency, and a commitment to excellence.</p>
                    </Box>
                </Box>
                <Box className='custom-shape-divider-bottom relative'>
                    <WaveDesign />
                </Box>
            </Box >

            <Box className='bg-skin-bgAccent py-9'>
                <h1>Our Purpose</h1>
                <Box className='flex mx-auto py-8 justify-center'>
                    <img src='/src/assets/PureHousekeepingRectangle.png' className='scale-[1.25] max-h-[150px] mt-16 mr-7' />
                    <Box className='text-left max-w-[950px]'>
                        <p className='mb-2'>{`At Pure Housekeeping, we pride ourselves on delivering a superior level of quality 
                        and efficiency in every cleaning service we provide. Our commitment to excellence is woven into the 
                        fabric of our company, ensuring that your space receives meticulous attention, thorough cleaning, 
                        and unparalleled results.`}</p>

                        <h5 className='font-bold text-lg'>1. Trained Professionals:</h5>
                        <p>{`Our team consists of highly trained and vetted professionals who bring expertise and 
                        dedication to every cleaning project. We understand that the quality of our service is only 
                        as good as the skills of our team, so we invest in continuous training to stay updated with 
                        the latest industry standards.`}</p>

                        <h5 className='font-bold text-lg'>2. Industry-Approved Products and Techniques:</h5>
                        <p>{`We believe in delivering not just a clean space but a safe and healthy one. That's why 
                        we exclusively use industry-approved, eco-friendly cleaning products and cutting-edge 
                        techniques to ensure the highest level of cleanliness without compromising on your well-being 
                        or the environment.`}</p>

                        <h5 className='font-bold text-lg'>3. Personalized Cleaning Solutions:</h5>
                        <p>{`No two spaces are the same, and neither are their cleaning needs. We take a personalized 
                        approach to understand your specific requirements and tailor our services accordingly. This 
                        ensures that every nook and cranny is attended to, providing a customized cleaning experience 
                        that goes beyond your expectations.`}</p>

                        <h5 className='font-bold text-lg'>4. Advanced Equipment:</h5>
                        <p>{`To enhance efficiency, we invest in state-of-the-art cleaning equipment designed to 
                        optimize our workflow and deliver faster, more effective results. Our commitment to using the 
                        latest technology ensures that your space receives a thorough cleaning in a timely manner.`}</p>

                        <h5 className='font-bold text-lg'>5. Transparent Communication:</h5>
                        <p>{`We prioritize clear and transparent communication with our clients. From the initial 
                        consultation to the completion of the service, we keep you informed every step of the way. 
                        Our aim is to build trust through open dialogue, ensuring your peace of mind throughout the 
                        cleaning process.`}</p>

                        <p className='mt-2'>{`At Pure Housekeeping, we understand that quality and efficiency go hand in hand. It's 
                        not just about cleaning; it's about creating an experience where excellence meets expediency. 
                        Trust us to elevate your cleaning experience and bring a new standard of quality and 
                        efficiency to your space..`}</p>
                    </Box>
                </Box>
            </Box>

            <Box className='bg-skin-bg py-16 px-[10%] text-white'>
                <h1>Enjoy More. Clean Less. Give us a try!</h1>
                <Box className='flex justify-between w-[500px] m-auto mt-5'>
                    <button className='btn-primary hover:bg-skin-buttPrimHover'>Call For An Estimate</button>
                    <button className='btn-primary hover:bg-skin-buttPrimHover'>Online Estimate</button>
                </Box>
            </Box>
            <Box className='bg-skin-buttPrim h-4' />
        </Box >
    )
}

export default AboutPage