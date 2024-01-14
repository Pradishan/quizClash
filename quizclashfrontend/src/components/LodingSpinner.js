import React from 'react'

export default function LodingSpinner() {
    return (
        <div className='position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
            <div className="spinner-border text-dark fs-2" style={{ height: '5rem', width: '5rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
