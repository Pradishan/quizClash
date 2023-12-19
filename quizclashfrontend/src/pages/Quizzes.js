import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Quiz.css'

export default function Quizzes ()
{
  return (
    <>
      <Navbar page={ 'quizzes' } />
      <center><h1>Quiz Name</h1>
        <div className='quiz-container mt-3' style={ { width: '70rem' } }>
          <div className='row'>
            <div className='d-flex justify-content-center mt-4'>
              <p className='fs-4'>Time left <strong> 12 </strong> sec</p>
            </div>
            <hr className='mx-5' style={{height:'0.5rem',width:'80%',border:'none' ,background: 'linear-gradient(270deg, #1CB722 49.99%, rgba(0, 0, 0, 0.00) 100.57%, rgba(20, 56, 185, 0.00) 100.57%)'}}/>
          </div>
        </div>
      </center>
    </>
  )
}
