import { Grid } from '@mui/material';
import React from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PaymentIcon from '@mui/icons-material/Payment';
import AssignmentIcon from '@mui/icons-material/Assignment';

const CompanyHighlights = () => {

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

    return (
        <>
            <h2 className='mb-4'>Why Choose Us?</h2>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                {highlights.map((highlight, i) => {
                    return <Grid item key={i} sm={12} md={6}>
                        {highlight.icon}
                        <h3 className='my-1'>{highlight.title}</h3>
                        <p>{highlight.body}</p>
                    </Grid>;
                })}
            </Grid>
        </>
    )
}

export default CompanyHighlights