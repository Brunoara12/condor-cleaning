import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, useMediaQuery } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import React, { useEffect } from 'react'
import ReactHookFormSelect from './ReactHookFormSelect'


const initialValues = {
    name: "",
    serviceType: "",
    email: "",
    contact: "",
    bedrooms: "",
    bathrooms: "",
}

const phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,4}$/
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = yup.object().shape({
    name: yup.string().required("Required"),
    serviceType: yup.string().required("Required"),
    email: yup.string().matches(emailRegExp, "Invalid email").required("Required"),
    contact: yup.string().nullable().transform((curr, orig) => (orig === "" ? null : curr))
        .matches(phoneRegExp, "Phone number is not valid"),
    bedrooms: yup.string().required("Required"),
    bathrooms: yup.string().required("Required"),
}).required()


const InitialEstimateForm = () => {

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
                className='text-skin-base'
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
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Name"
                    onChange={() => {
                        console.log("TRIGGER")
                        trigger()
                    }}
                    error={!!touchedFields.name && !!errors.name}
                    helperText={touchedFields.name && errors.name?.message}
                    sx={{ gridColumn: "span 2" }}
                    {...register('name')} />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Phone Number"
                    error={!!touchedFields.contact && !!errors.contact}
                    helperText={touchedFields.contact && errors.contact?.message}
                    sx={{ gridColumn: "span 2" }}
                    {...register('contact')}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    error={!!touchedFields.email && !!errors.email}
                    helperText={touchedFields.email && errors.email?.message}
                    sx={{ gridColumn: "span 4" }}
                    {...register('email')}
                />
                <Box className='ml-5' sx={{ gridColumn: "span 4" }}>
                    <h3 className='text-left'>Service</h3>
                </Box>
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Service Type"
                    error={!!touchedFields.serviceType && !!errors.serviceType}
                    helperText={touchedFields.serviceType && errors.serviceType?.message}
                    sx={{ gridColumn: "span 4" }}
                    {...register('serviceType')}
                />


                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 1"
                    error={!!touchedFields.address1 && !!errors.address1}
                    helperText={touchedFields.address1 && errors.address1?.message}
                    sx={{ gridColumn: "span 2" }}
                    {...register('address1')}
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
                    error={!!touchedFields.bedrooms && !!errors.bedrooms}
                    helperText={touchedFields.bedrooms && errors.bedrooms?.message}
                    sx={{ gridColumn: "span 1" }}
                >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
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
                    sx={{ gridColumn: "span 1" }}
                >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                </TextField>
            </Box>
            <Box className="flex justify-end mt-5">
                <button type='submit' className='btn-primary'>Get Estimate</button>
            </Box>
        </form>
    )
}

export default InitialEstimateForm