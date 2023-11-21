import React from 'react'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='flex justify-around w-full bg-black'>
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
                    <li>Midlank Park, NJ</li>
                    <li>Allendale, NJ</li>
                </ul>
            </div>
            <div className='text-white p-3'>
                <h2>Contact Us</h2>
                <ul>
                    <li>
                        <div className='flex'>
                            <AdminPanelSettingsOutlined />
                            <p>(321)213-2131</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <LockOpenOutlined />
                            <p>info@condorcleaning.com</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <SecurityOutlined />
                            <p>7:00am-9:00pm Mon-Sun</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer