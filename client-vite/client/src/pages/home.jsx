import React, { useContext } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { AppContent } from '../context/appContext'

const home = () => {

    const { userData } = useContext(AppContent)

    if (userData) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
                <Navbar />
                <Header />
                <Sidebar />
            </div>
        )
    } else {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
                <Navbar />
                <Header />
            </div>
        )
    }


}

export default home