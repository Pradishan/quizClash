import React from 'react'
import logo from '../assets/logo.png';
import SocialMedia from './SocialMedia';

export default function Footer() {
    return (
        <>
            <footer className='mt-auto' style={{ backgroundColor: '#F3F3F3' }}>
                <div className='d-flex justify-content-between mx-3'>
                    <div className='p-2'>
                        <p className='m-0 text-muted' style={{ fontSize: 'small' }}>Quizclash@info.com</p>
                        <p className='m-0 text-muted' style={{ fontSize: 'small' }}>+9401234567</p>
                    </div>
                    <div className='d-none d-md-block'>
                        <div className='d-flex align-items-center mt-3'>
                            <p className='m-0 text-muted'><a className="" href="/"><img src={logo} alt='logo' height={'18rem'} /></a> copyright©  2023</p>
                        </div>
                    </div>
                    <SocialMedia />
                </div>
            </footer>
        </>
    )
}
