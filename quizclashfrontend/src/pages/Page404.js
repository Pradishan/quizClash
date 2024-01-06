import React, { lazy } from 'react';
import img from '../assets/Error-404.svg';


const Navbar = lazy(()=> import('../components/Navbar'))

export default function Page404() {
  return (
    <><Navbar />
      <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="col-md-4 text-center">
          <img src={img} alt='error 404' className='img-fluid' />
        </div>
      </div>
    </>
  )
}