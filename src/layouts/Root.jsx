import React from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import { ColorThemeContext, useTheme } from '../theme'
import Topbar from './Topbar'
import Footer from './Footer'

const Root = () => {
    const [theme, colorTheme] = useTheme();

    console.log(theme)
    return (
        <ThemeProvider theme={theme}>
            <div className='flex flex-col flex-1 min-w-0 h-full'>
                <Topbar />
                <div className=' flex flex-1 w-auto pt-[100px]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Root