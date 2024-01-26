import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, useMediaQuery } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios'
import PropTypes from 'prop-types';

import React, { useEffect } from 'react'

const apiBaseURL = import.meta.env.VITE_BACKEND_API

const initialValues = {
    firstName: "",
    serviceType: "",
    email: "",
    phoneNumber: "",
    bedrooms: "",
    bathrooms: "",
    zipCode: ""
}

const phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,4}$/
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    serviceType: yup.string().required("Required"),
    email: yup.string().matches(emailRegExp, "Invalid email").required("Required"),
    phoneNumber: yup.string().nullable().transform((curr, orig) => (orig === "" ? null : curr))
        .matches(phoneRegExp, "Phone number is not valid").required("Required"),
    bedrooms: yup.string().required("Required"),
    bathrooms: yup.string().required("Required"),
    zipCode: yup.string().required("Required"),
}).required()


const InitialEstimateForm = ({ whiteBackground = false }) => {

    const isNonMobile = useMediaQuery("(min-width:600px)")
    const { register,
        handleSubmit,
        control,
        formState: {
            errors,
            touchedFields
        },
        reset,
        trigger } = useForm(
            {
                resolver: yupResolver(userSchema),
                defaultValues: initialValues,
                mode: "onChange"
            })

    const formSubmitHandler = (data) => {

        axios.post(apiBaseURL + "/leads",
            {
                ...data,
                leadMethod: 'Website'
            })
        console.log(data)
        reset()
    }

    const errSubmitHandler = (data, err) => {
        for (let e in err) {
            console.log(e)
            touchedFields[e] = true
        }
    }

    useEffect(() => {
        trigger()
    }, [trigger])

    return (
        <form onSubmit={handleSubmit(formSubmitHandler, errSubmitHandler)}>
            <Box
                className={whiteBackground ? `text-skin-prim` : 'text-skin-base'}
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0,1fr))"
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
            >
                <Box className='ml-5' sx={{ gridColumn: "span 4" }}>
                    <h3 className='text-left'>Your Info</h3>
                </Box>
                <TextField
                    className='text-skin-prim'
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onChange={() => {
                        console.log("TRIGGER")
                        trigger()
                    }}
                    error={!!touchedFields.firstName && !!errors.firstName}
                    helperText={touchedFields.firstName && errors.firstName?.message}
                    sx={{
                        gridColumn: "span 2",
                        "& .MuiFormLabel-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                    }}
                    {...register('firstName')} />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Phone Number"
                    error={!!touchedFields.phoneNumber && !!errors.phoneNumber}
                    helperText={touchedFields.phoneNumber && errors.phoneNumber?.message}
                    sx={{
                        gridColumn: "span 2",
                        "& .MuiFormLabel-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                    }}
                    {...register('phoneNumber')}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    error={!!touchedFields.email && !!errors.email}
                    helperText={touchedFields.email && errors.email?.message}
                    sx={{
                        gridColumn: "span 4",
                        "& .MuiFormLabel-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                    }}
                    {...register('email')}
                />
                <Box className='ml-5' sx={{ gridColumn: "span 4" }}>
                    <h3 className='text-left'>Service</h3>
                </Box>
                <TextField
                    select
                    fullWidth
                    className='white-background'
                    variant="filled"
                    defaultValue=""
                    label="Service Type"
                    inputProps={register('serviceType', {
                        required: 'Please enter Service Type',
                        classes: {
                            icon: { fill: "#ff0" },
                        },
                    })}
                    MenuProps={{
                        disableScrollLock: false,
                    }}
                    error={!!touchedFields.serviceType && !!errors.serviceType}
                    helperText={touchedFields.serviceType && errors.serviceType?.message}
                    sx={{
                        gridColumn: "span 4",
                        "& .MuiSvgIcon-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                        "& .MuiFormLabel-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                    }}
                >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="One Time Cleaning">One Time Cleaning</MenuItem>
                    <MenuItem value="Recurring Cleaning">Recurring Cleaning</MenuItem>
                </TextField>


                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Zip Code"
                    error={!!touchedFields.zipCode && !!errors.zipCode}
                    helperText={touchedFields.zipCode && errors.zipCode?.message}
                    sx={{
                        gridColumn: "span 2",
                        "& .MuiFormLabel-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                    }}
                    {...register('zipCode')}
                />

                <TextField
                    select
                    fullWidth
                    variant="filled"
                    defaultValue=""
                    label="Bedrooms"
                    inputProps={register('bedrooms', {
                        required: 'Please enter bedrooms',
                    })}
                    MenuProps={{
                        disableScrollLock: false,
                    }}
                    error={!!touchedFields.bedrooms && !!errors.bedrooms}
                    helperText={touchedFields.bedrooms && errors.bedrooms?.message}
                    sx={{
                        gridColumn: "span 1",
                        "& .MuiSvgIcon-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                        "& .MuiFormLabel-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                    }}
                >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8+">8+</MenuItem>

                </TextField>

                <TextField
                    select
                    fullWidth
                    variant="filled"
                    defaultValue=""
                    label="Bathrooms"
                    inputProps={register('bathrooms', {
                        required: 'Please enter bathrooms',
                    })}
                    error={!!touchedFields.bathrooms && !!errors.bathrooms}
                    helperText={touchedFields.bathrooms && errors.bathrooms?.message}
                    sx={{
                        gridColumn: "span 1",
                        "& .MuiSvgIcon-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                        "& .MuiFormLabel-root": {
                            color: whiteBackground ? "black" : "white",
                        },
                    }}
                >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8+">8+</MenuItem>
                </TextField>
            </Box>
            <Box className="flex justify-end mt-5">
                <button type='submit' className='btn-primary hover:bg-skin-bgAccent'>Get Estimate</button>
            </Box>
        </form>
    )
}

InitialEstimateForm.propTypes = {
    whiteBackground: PropTypes.boolean
}

export default InitialEstimateForm