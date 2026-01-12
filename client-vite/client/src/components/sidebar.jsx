import React, { useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContent } from '../context/appContext'

const sidebar = () => {

    const { userData } = useContext(AppContent)
    
    return (
        <div>
            <p>menu lateral</p>
        </div>
    )
}

export default sidebar