import React,{lazy} from 'react'

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));

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
