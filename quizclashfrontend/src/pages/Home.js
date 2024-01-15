import React, { lazy } from 'react'

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));

export default function Home() { 
    return (
        <>
            <Navbar page={'home'} />

            home
            <center>
                <div className='quiz-container mt-5 p-4' style={{
                    borderRadius: '1.5625rem',
                    background: ' #FFF',
                    boxShadow: '-20px 40px 100px 0px rgba(0, 0, 0, 0.10)',
                    width: 'auto',
                    margin: ' auto 10rem',
                }}>

                 </div>
            </center>

            <Footer />
        </>
    )
}
