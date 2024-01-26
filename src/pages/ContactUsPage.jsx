import { Box } from '@mui/material'
import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import ServiceAreasPolygons from '../components/ServiceAreasPolygons'
import InitialEstimateForm from '../components/InitialEstimateForm';

const libraries = ['places']
const mapContainerStyle = {

    height: '100%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '750px'

};
const center = {
    lat: 41.034256,  // default latitude
    lng: -74.146363 // default longitude
};

const ContactUsPage = () => {
    const [state, setState] = React.useState({
        drawingMode: "polygon",
    });

    const noDraw = () => {
        setState(function set(prevState) {
            return Object.assign({}, prevState, {
                drawingMode: "maker",
            });
        });
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
        libraries: ["drawing"],
    });

    return (
        <Box className='w-full'>
            <Box className='bg-skin-bg py-32 px-[10%] text-white'>
                <h1>Contact Us</h1>
            </Box>

            <Box className='justify-center'>
                <Box className='flex mx-[10%]'>
                    <Box className='flex-[2]'>
                        <Box className='flex flex-col justify-center items-center h-full'>
                            <h2 className='mb-8 text-skin-prim'>Reach Out!</h2>
                            <ul className=''>
                                <li>
                                    <div className='flex'>
                                        <PhoneIcon className='mr-2 text-skin-prim' />
                                        <p>(321)213-2131</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <EmailIcon className='mr-2 text-skin-prim' />
                                        <p>info@purehousekeeping.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex'>
                                        <AccessTimeFilledIcon className='mr-2 text-skin-prim' />
                                        <Box className='flex flex-col text-left
                                        '>
                                            <p>7:00am-7:00pm Mon</p>
                                            <p>7:00am-7:00pm Tues</p>
                                            <p>7:00am-7:00pm Wed</p>
                                            <p>7:00am-7:00pm Thurs</p>
                                            <p>7:00am-7:00pm Fri</p>
                                            <p>9:00am-6:00pm Sat</p>
                                            <p>9:00am-6:00pm Sun</p>
                                        </Box>
                                    </div>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                    <Box className='flex-[3]'>
                        <Box className='mx-[5%] my-10'>
                            <InitialEstimateForm whiteBackground />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className='bg-skin-bgAccent flex flex-col py-7 '>
                <Box className='flex h-[40vh] gap-20 justify-center'>
                    {loadError ?
                        <div>Error loading maps</div> :
                        !isLoaded ?
                            <div>Loading maps</div> :
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                zoom={11}
                                center={center}
                            >
                                <ServiceAreasPolygons />
                            </GoogleMap>
                    }

                </Box>
                <Box className='text-left flex flex-col gap-5 p-14 m-auto max-w-[1500px]'>
                    <h2>Best House Cleaning and Housekeeping Services in North Jersey</h2>
                    <p><b>Our Service Area</b>: Mahwah, Ramsey, Waldwick, Wyckoff, Oakland, Franklin Lakes, Midland Park, Allendale, Pompton Lakes</p>
                    <p>{`We're constantly growing and are taking on new surrounding areas, put in your zip code to see if we're in your area!`}</p>
                    <input></input>
                    <button className='btn-primary hover:text-white'>Search</button>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactUsPage