import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home ()
{
    return (
        <>
            <Navbar page={ 'home' } />
            <div className='vh-100'>
                home
            </div>
            <Footer />
        </>
    )
}
