import React from 'react'
import pythonimg from '../assets/python.png';

export default function QuizMarkDetailsCard() {
  return (
  <div className="col-sm-6 mb-3">
    <div className="card h-100">
      <div className="card-body">
        <h4 className="d-flex align-items-center mb-3">Previous Quizzzes</h4>
        { /*Quiz Card */}
        <div className="quiz-card">
          <div className="row">
            <div className="col-md-6">
              <img className="card-img" src={pythonimg} alt="QuizImage" />
            </div>
            <div className="col-md-6">
              <div className="card-details">
                <div className="card-title">Python</div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
                </div>
                <div className="card-description"></div>Your score: 20%</div>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
  )
}
