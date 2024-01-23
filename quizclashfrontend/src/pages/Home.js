import React, { lazy } from 'react'

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));

export default function Home() { 
    return (
        <>
            <Navbar page={'home'} />

            home
            <center className=''>
            {/* Settings  */}
                        <div class="p-3">
                            <h2 class="ms-2 mx-4">
                                <span data-bs-toggle="tooltip" data-bs-title="account settings"><i
                                        class="fa-solid fa-gear me-2"></i>Settings</span>
                            </h2>
                        </div>
            </center>

            <Footer />
        </>
    )
}
