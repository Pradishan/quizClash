import React from 'react'
import Navbar from '../components/Navbar'

export default function Leaderboard ()
{
  let l = [ '', '', '', '' ];
  return (
    <>
      <Navbar page={ 'leaderboard' } />
      <center>
        <h1>Leader Board</h1>
        <div className='quiz-container mt-3 p-4' style={ { width: '70%' } }>
          { l.map( i => (
            < div key={ i } className='row p-3' >
              <div className='d-flex justify-content-between p-2 mx-3 align-items-center' >
                <div className='d-flex ms-3'>
                  <span>1</span>
                  <p className='m-0 p-0 ms-2'>Name</p>
                </div>
                <div className='ms-0 me-3'>
                  <p className='m-0 p-0'>200XP</p>
                </div>
              </div>
              <hr />
            </div>
          ) ) }

        </div>
      </center >
      
    </>
  )
}
