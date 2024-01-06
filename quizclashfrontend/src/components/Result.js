import React, { lazy } from 'react'
import { Link } from 'react-router-dom';

const RoundProgressBar = lazy(() => import('./RoundProgressBar'))


export default function Result(props) {

    const percentage = (((props?.score ?? 0) / (props?.nOfQuiz ?? 1)) * 100).toFixed(2);




    const getMessage  = () => {
        if (100 >= percentage && percentage >= 75) {
            return {
                emoji: '🤩',
                phrase: 'Amazing!',
                text: 'Congratulations! You\'re doing fantastic!'
            }
        } else {
            if (percentage >= 50) {
                return {
                    emoji: '😃',
                    phrase: 'Great Job!',
                    text: 'Well done! Keep up the good work!'
                }
            } else {
                if (percentage >= 30) {
                    return {
                        emoji: '🙂',
                        phrase: 'Good Effort!',
                        text: 'You\'re making progress! Keep it up!'
                    }
                } else {
                    if (percentage >= 0) {
                        return {
                            emoji: '😉',
                            phrase: 'Nice Try!',
                            text: 'Don\'t give up! Keep pushing forward!'
                        }
                    }
                }
            }
        }
    }


    return (
        <div className='' style={{ maxWidth: '30rem', margin: '0 auto' }}>

            <h2 className='mb-5'>Your Score</h2>
            <center>
                <div class="ring p-1"
                    style={{
                        width: '260px',
                        height: '260px',
                        border: '23px solid #ccc',
                        borderRadius: '100%',
                        boxSizing: 'border-box',
                        position: 'relative'
                    }}>
                    <RoundProgressBar progress={percentage} strokeWidth={15} circleRadius={100} padding={10} />
                    <div className='rounded-circle m-0 p-0 p-1' style={{ position: 'absolute', top: '-3rem', left: '-2rem' }} >
                        <span className='' style={{ fontSize: '4rem' }}>{getMessage()?.emoji}</span>
                    </div>
                </div>
            </center>

            <div className="container row text-center my-4 ">
                <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">{props?.nOfQuiz}</div>
                    <span className="small text-gray">Questions</span>
                </div>
                <div className="col-6">
                    <div className="h4 font-weight-bold mb-0 text-success">{props?.score}</div>
                    <span className="small text-gray">Correct Answers</span>
                </div>

                <p className='my-1 fs-3'>{getMessage().phrase}</p>

                <div className='bg-body-secondary rounded d-flex flex-column align-items-center mt-3 pb-2'>
                    <p className='my-1 fs-4 text-muted'>{getMessage().text}</p>
                    <p className='my-1 fs-5'>You are earning <span className="fs-4 font-weight-bold mb-0 text-primary ms-2">{props?.score * 10}XP</span><i class="bi bi-star-fill text-warning fs-4"></i></p>
                </div>

            </div>


            <Link to={'/quizzes'}>  <button className='btn btn-dark px-5'>
                GO Home
            </button></Link>
        </div>
    )
}

