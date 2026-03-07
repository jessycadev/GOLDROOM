import React, { useContext } from 'react'
import { AppContent } from '../context/appContext'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Layout from '../components/layout'


const home = () => {

    const { userData } = useContext(AppContent)

    if (userData) {
        return (
            // CONTROLE DE LAYOUT DE PAGINA
            <Layout />
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