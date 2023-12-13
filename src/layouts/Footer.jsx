import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Box } from '@mui/material';

const Footer = () => {
    return (
        <div className='flex justify-around w-full bg-skin-bg'>
            {/* Column 1*/}
            <div className='text-white p-3'>
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Employment</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='text-white p-3'>
                <h2>Cleaning Services</h2>
                <ul>
                    <li>Recurring</li>
                    <li>Deep Cleaning</li>
                    <li>Move In/Out</li>
                </ul>
            </div>
            <div className='text-white p-3'>
                <h2>Service Areas</h2>
                <ul>
                    <li>Mahwah, NJ</li>
                    <li>Ramsey, NJ</li>
                    <li>Waldwick, NJ</li>
                    <li>Wyckoff, NJ</li>
                    <li>Oakland, NJ</li>
                    <li>Franklin Lakes, NJ</li>
                    <li>Midlank Park, NJ</li>
                    <li>Allendale, NJ</li>
                    <li>Pompton Lakes, NJ</li>
                </ul>
            </div>
            <div className='text-white p-3'>
                <h2>Contact Us</h2>
                <ul>
                    <li>
                        <div className='flex'>
                            <PhoneIcon className='mr-2' />
                            <p>(321)213-2131</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <EmailIcon className='mr-2' />
                            <p>info@condorcleaning.com</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <AccessTimeFilledIcon className='mr-2' />
                            <Box className='flex flex-col'>
                                <p>7:00am-7:00pm Mon-Fri</p>
                                <p>9:00am-6:00pm Sat-Sun</p>
                            </Box>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer