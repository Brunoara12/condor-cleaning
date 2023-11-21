import React from 'react'
import { Box, Button } from '@mui/material'
import BackgroundImage from '../../src/assets/living-room.jpg'


const HomePage = () => {
    return (
        <div className='flex flex-col flex-1'>
            <h2>HomePage</h2>


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
                <Box className='flex flex-col bg-opacity-50 bg-black rounded-lg ml-6 my-3 text-white basis-1/3 items-center justify-around'>
                    <img src='src/assets/condor-cleaning_p4.png' className='max-w-[180px]' />
                    <h1>Best House Cleaning</h1>
                    <h2>Exceptional Quality Cleaning</h2>
                    <Box className='flex justify-around'>
                        <Button sx={{ marginLeft: '8px', marginRight: '8px' }} variant='contained'>Request a Quote</Button>
                        <Button className='!mx-2' variant='contained'>Call or Text</Button>
                    </Box>
                </Box>
            </Box>



        </div >
    )
}

export default HomePage