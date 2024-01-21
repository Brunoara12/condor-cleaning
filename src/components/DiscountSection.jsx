import { Box } from '@mui/material'
import React from 'react'

import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';

import CleaningImage from '../../src/assets/cleaning-wiping.jpg';

const DiscountSection = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${CleaningImage})`,
                backgroundPositionX: '50%',
                backgroundPositionY: '100%',
                height: '750px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            className='p-3 flex'>
            <Box className='flex flex-col  rounded-lg py-5 px-10 ml-6 my-20 text-skin-base basis-1/3 items-center justify-around'>
                <h1 className='text-7xl'>{`Here's $35 Off Your First Cleaning`}</h1>
                <Box className='flex justify-around'>
                    <button className="mx-2 btn-primary">
                        <LoyaltyIcon className='mr-2' />
                        Discount
                    </button>
                    <button className='mx-2 btn-primary'>
                        <SendToMobileIcon className='mr-2' />
                        Call or Text
                    </button>
                </Box>
            </Box>
        </Box>
    )
}

export default DiscountSection