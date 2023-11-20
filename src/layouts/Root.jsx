import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'

const Root = () => {
    return (
        <div className='flex flex-col flex-1 min-w-0 h-full'>
            <Topbar />
            <div className=' flex flex-1 w-auto pt-11'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root