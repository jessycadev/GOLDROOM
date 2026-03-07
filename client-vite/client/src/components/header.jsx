import React, { useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContent } from '../context/appContext'

const header = () => {

    const { userData } = useContext(AppContent)
    
    return (
        ''
        // <div className='flex flex-col items-center px-4 text-center text-gray-800'>
        //     <img src={assets.header_img} alt='' className='w-36 h-36 rounded-full mb-6' />
        // </div>
    )
}

export default header