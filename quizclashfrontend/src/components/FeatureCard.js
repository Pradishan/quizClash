import React from 'react'
import '../styles/featurecard.css';

export default function FeatureCard({data}) {
    return (
        <div className='featurecard p-5'>
           <center> <img src={data?.image} alt="feature card" className="img-fluid mb-3" /></center>
            <p className='text-center mt-2'>
                {data?.text}
            </p>
        </div>
    )
}
