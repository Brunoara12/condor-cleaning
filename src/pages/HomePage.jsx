import React from 'react';
import { Box, Grid } from '@mui/material';
import ServicesGrid from '../components/ServicesGrid';
import InitialEstimateForm from '../components/InitialEstimateForm';
import CompanyHighlights from '../components/CompanyHighlights';
import { DrawingManagerF, GoogleMap, LoadScript, Marker, Polygon, useLoadScript } from '@react-google-maps/api';
import { color } from '@mui/system';
import ServiceAreasPolygons from '../components/ServiceAreasPolygons';

import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import AssignmentIcon from '@mui/icons-material/Assignment';

import BackgroundImage from '../../src/assets/living-room.jpg';
import DiscountSection from '../components/DiscountSection';


const libraries = ['places'];
const mapContainerStyle = {

    height: '100%',
    width: '65%',
    maxWidth: '750px',
    maxHeight: '750px'

};
const center = {
    lat: 41.034256,  // default latitude
    lng: -74.146363 // default longitude
};


export const HomePage = () => {

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

    const PageContents = <div></div>

    if (loadError) {
        return <div className='flex flex-col flex-1'>
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPositionX: '50%',
                    backgroundPositionY: '-600px',
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

            <Box className='bg-skin-bg'>
                <Box className='mx-[30%] my-10'>
                    <InitialEstimateForm />
                </Box>
            </Box>

            <Box className='bg-skin-bgAccent'>
                <Box className='mx-[25%] my-10'>
                    <CompanyHighlights />
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
                <ServicesGrid />
            </Box>
            <Box className='bg-skin-bgAccent flex p-14 '>
                <Box className='flex flex-1 h-[40vh] gap-20 justify-center'>
                    <div>Error loading maps</div>
                    <Box className='w-[35%] text-left flex flex-col gap-5'>
                        <h2>Best House Cleaning and Housekeeping Services in North Jersey</h2>
                        <p><b>Our Service Area</b>: Mahwah, Ramsey, Waldwick, Wyckoff, Oakland, Franklin Lakes, Midland Park, Allendale, Pompton Lakes</p>
                        <p>{`We're constantly growing and are taking on new surrounding areas, put in your zip code to see if we're in your area!`}</p>
                        <input></input>
                        <button className='btn-primary'>Search</button>
                    </Box>
                </Box>
            </Box>

            <DiscountSection />
        </div>;
    }

    if (!isLoaded) {
        return <div className='flex flex-col flex-1'>
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPositionX: '50%',
                    backgroundPositionY: '-600px',
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

            <Box className='bg-skin-bg'>
                <Box className='mx-[30%] my-10'>
                    <InitialEstimateForm />
                </Box>
            </Box>

            <Box className='bg-skin-bgAccent'>
                <Box className='mx-[25%] my-10'>
                    <CompanyHighlights />
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
                <ServicesGrid />
            </Box>
            <Box className='bg-skin-bgAccent flex p-14 '>
                <Box className='flex flex-1 h-[40vh] gap-20 justify-center'>
                    <div>Loading maps</div>
                    <Box className='w-[35%] text-left flex flex-col gap-5'>
                        <h2>Best House Cleaning and Housekeeping Services in North Jersey</h2>
                        <p><b>Our Service Area</b>: Mahwah, Ramsey, Waldwick, Wyckoff, Oakland, Franklin Lakes, Midland Park, Allendale, Pompton Lakes</p>
                        <p>{`We're constantly growing and are taking on new surrounding areas, put in your zip code to see if we're in your area!`}</p>
                        <input></input>
                        <button className='btn-primary'>Search</button>
                    </Box>
                </Box>
            </Box>

            <DiscountSection />
        </div>;
    }

    return (
        <div className='flex flex-col flex-1'>
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPositionX: '50%',
                    backgroundPositionY: '-600px',
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

            <Box className='bg-skin-bg'>
                <Box className='mx-[30%] my-10'>
                    <InitialEstimateForm />
                </Box>
            </Box>

            <Box className='bg-skin-bgAccent'>
                <Box className='mx-[25%] my-10'>
                    <CompanyHighlights />
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
                <ServicesGrid />
            </Box>
            <Box className='bg-skin-bgAccent flex p-14 '>
                <Box className='flex flex-1 h-[40vh] gap-20 justify-center'>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={11}
                        center={center}
                    >
                        <ServiceAreasPolygons />
                    </GoogleMap>
                    <Box className='w-[35%] text-left flex flex-col gap-5'>
                        <h2>Best House Cleaning and Housekeeping Services in North Jersey</h2>
                        <p><b>Our Service Area</b>: Mahwah, Ramsey, Waldwick, Wyckoff, Oakland, Franklin Lakes, Midland Park, Allendale, Pompton Lakes</p>
                        <p>{`We're constantly growing and are taking on new surrounding areas, put in your zip code to see if we're in your area!`}</p>
                        <input></input>
                        <button className='btn-primary'>Search</button>
                    </Box>
                </Box>
            </Box>

            <DiscountSection />
        </div>
    );
};

export default HomePage