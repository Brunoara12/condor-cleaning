import React from 'react'
import { Box, Button, Grid } from '@mui/material'
import BackgroundImage from '../../src/assets/living-room.jpg'
import AssignmentIcon from '@mui/icons-material/Assignment';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PaymentIcon from '@mui/icons-material/Payment';

const highlights = [
    {
        icon: <AccessTimeFilledIcon className='text-9xl' />,
        title: "Save Time, Sparkle Every Time",
        body: "We're your shortcut to reclaimed time. Our expert team handles the dirty work efficiently, allowing you to focus on what matters most. Experience the peace of mind that comes with delegating your cleaning needs to professionals."
    },
    {
        icon: <AssignmentIcon className='text-9xl' />,
        title: "Easy and Quick Estimates",
        body: "Experience the speed of simplicity with our Quick Online Estimate service! Get a precise estimate for your cleaning needs in just a few clicks. Time-saving convenience meets accurate pricing—your path to a cleaner space starts here."
    },
    {
        icon: <ModelTrainingIcon className='text-9xl' />,
        title: "Trained and Vetted Employees",
        body: "Trust is our foundation. Rest easy knowing your space is in capable hands. We hire and train vetted professionals, ensuring a reliable and secure cleaning experience. Your satisfaction and peace of mind are our top priorities."
    },
    {
        icon: <ElectricBoltIcon className='text-9xl' />,
        title: "Rapid and Efficient Results",
        body: "Our team of trained professionals is not only fast but also incredibly efficient. Experience rapid, top-quality cleaning services that leave your space sparkling in no time. Swift and exceptional results – that's the hallmark of our service."
    },
    {
        icon: <Diversity1Icon className='text-9xl' />,
        title: "Family-Owned, Clean Approved",
        body: "We're more than a service – we're family. As a family-owned and operated business, our commitment goes beyond cleanliness; it's about trust and personalized care. Experience the difference that comes from our family to yours – where every space is treated with the warmth and attention it deserves."
    },
    {
        icon: <PaymentIcon className='text-9xl' />,
        title: "Seamless Payment Options",
        body: "We believe in convenience for our clients. That's why we proudly accept all types of payments. Seamless transactions meet spotless spaces – experience cleaning services tailored to your needs, with payment options as flexible as our service."
    }
]

const HomePage = () => {
    return (
        <div className='flex flex-col flex-1'>
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
                <Box className='flex flex-col bg-opacity-60 bg-black rounded-lg py-5 px-10 ml-6 my-20 text-skin-base basis-1/3 items-center justify-around'>
                    <h1>House & Small Office Cleaning Services</h1>
                    <h2 className='text-skin-prim'>Serving North Jersey</h2>
                    <h2>Purity Unleashed, Cleaning Excellence Achieved.</h2>
                    <Box className='flex justify-around'>
                        <button className="mx-2 btn-primary">
                            <AssignmentIcon className='mr-2' />
                            Online Estimate
                        </button>
                        <button className='mx-2 btn-primary'>
                            <SendToMobileIcon className='mr-2' />
                            Call or Text
                        </button>
                    </Box>
                </Box>
            </Box>

            <Box>
                Estimate Form
            </Box>

            <Box className='bg-skin-bgAccent'>
                <Box className='mx-[25%] my-10'>
                    <h2 className='mb-4'>Why Choose Us?</h2>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        {highlights.map((highlight, i) => {
                            return <Grid item key={i} sm={12} md={6}>
                                {highlight.icon}
                                <h3 className='my-1'>{highlight.title}</h3>
                                <p>{highlight.body}</p>
                            </Grid>
                        })}
                    </Grid>
                </Box>
            </Box>

            <Box className='bg-skin-bg'>
                <Box className='bg-skin-buttPrim h-4' />
                <Box className='my-10'>
                    <h2 className='text-skin-base'>Over 20 years of experience</h2>
                    <button className='btn-primary hover:bg-skin-buttPrimHover'>Learn More</button>
                </Box>
            </Box>

            <Box>
                Services
            </Box>

            <Box>
                Map Service Area
            </Box>
        </div >
    )
}

export default HomePage