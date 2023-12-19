import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Quiz.css'

export default function Quizzes ()
{
  return (
    <>
      <Navbar page={ 'quizzes' } />
      <center><h1>Quiz Name</h1>
        <div className='quiz-container mt-3 p-4' style={ { width: '70rem' } }>
          <div className='row'>
            <div className='d-flex justify-content-center mt-4'>
              <p className='fs-4'>Time left <strong> 12 </strong> sec</p>
            </div>
            <hr className='mx-5' style={ { height: '0.5rem', width: '80%', border: 'none', background: 'linear-gradient(270deg, #1CB722 79.99%, rgba(0, 0, 0, 0.00) 100.57%, rgba(20, 56, 185, 0.00) 100.57%)' } } />
          </div>
          <div className='row' >
            {/* Question */ }
            <div className='d-flex'>
              <span className='fs-3 fw-bold m-0 me-2'>1 </span>
              <p className='fs-4 text-start text-justify'>
                Lorem ipsum dolor sit amet consectetur. Commodo aliquam faucibus auctor elit urna aliquam cras. Placerat neque risus convallis eget.
              </p>
            </div>
          </div>
          {/* answers */ }
          <div className='row'>
            <div>
              <p className='fs-3 text-start ms-5 text-justify'>A. option one </p>
            </div>
            <div>
              <p className='fs-3 text-start ms-5 text-justify'>B. option two </p>
            </div>
            <div>
              <p className='fs-3 text-start ms-5 text-justify'>C. option three </p>
            </div>
            <div>
              <p className='fs-3 text-start ms-5 text-justify'>D. option four </p>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-between p-3'>
              <p className='fs-5'>1 of 20 Question</p>
              <button className='btn btn-dark w-25'>Next</button>
            </div>
          </div>
        </div>
      </center>
    </>
  )
}
