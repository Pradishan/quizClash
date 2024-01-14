import React, { useState, useEffect, lazy, useCallback, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../styles/Quiz.css';
// import questions from '../data/questions';
import alarm from '../assets/alarm.mp3';

const Result = lazy(() => import('../components/Result'));
const RoundProgressBar = lazy(() => import('../components/RoundProgressBar'));

export default function Questions(props) {

    const { id } = useParams();

    let { state } = useLocation();

    const questions = props.question;

    const [index, setIndex] = useState(null);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(questions[0]);
    const [timeLeft, setTimeLeft] = useState(null);
    const [showStartButton, setShowStartButton] = useState(true);
    const [showScore, setShowScore] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);

    const alarmSound = useMemo(() => new Audio(alarm), []);

    const startQuiz = () => {
        setShowStartButton(false);
        setIndex(0);
        setLock(false);
        setQuestion(questions[0]);
        setScore(0);
        setTimeLeft(15)
        setShowScore(false);
        setShowQuestion(true)
        console.log(id)
    };

    const playAlarm = useCallback(() => {
        alarmSound.play();
    }, [alarmSound]);

    useEffect(() => {
        if (showQuestion && !lock) {
            const timer = setTimeout(() => {
                if (timeLeft > 0) {
                    setTimeLeft(timeLeft - 1);
                } else {
                    const correctAns = document.getElementById('answer');
                    if (correctAns) {
                        correctAns.classList.add('correct');
                        playAlarm();
                    }
                    setLock(true);
                }
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [lock, timeLeft, showQuestion, playAlarm]);

    const progressWidth = ((15 - timeLeft) / 15) * 100;

    const checkAnswer = (e, ans) => {
        if (!lock) {
            const correctAns = document.getElementById('answer');
            if (question.answer === ans) {
                e.target.classList.add('correct');
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add('wrong');
                correctAns.classList.add('correct');
                playAlarm();
            }
            setLock(true);
            setTimeLeft(15);
        }
    };

    const next = () => {
        if (lock) {
            if (index === questions.length - 1) {
                setShowScore(true);
                setShowQuestion(false)
            } else {
                setIndex((prevIndex) => prevIndex + 1);
                setQuestion(questions[index + 1]);
                setLock(false);
                setTimeLeft(15);
            }
        }
    };

    const renderStartButton = () => {
        if (showStartButton) {
            return (
                <>
                    <h2>Some Rules of this Quiz</h2>
                    <div className="d-flex flex-column justify-content-center mb-3">
                        <p className='m-0 fs-4' >1. You will have only <span className='text-primary fw-bold'>15 seconds</span> per each question.</p>
                        <p className='m-0 fs-4' >2. Once you select your answer, it can't be undone.</p>
                        <p className='m-0 fs-4' >3. You can't select any option once time goes off.</p>
                        <p className='m-0 fs-4' >4. You can't exit from the Quiz while you're playing.</p>
                        <p className='m-0 fs-4' >5. You'll get points on the basis of your correct answers.</p>
                    </div>
                    <button className='btn btn-dark px-5' onClick={startQuiz}>
                        Start
                    </button>
                </>
            );
        }
        return null;
    };

    return (
        <>
            <center>
                <h1>{state.some}</h1>
                <div className='quiz-container mt-3 p-4' key={question.number}>
                    {renderStartButton()}
                    {(showQuestion) ? (
                        <>
                            <div className='row'>

                                <div className='d-flex justify-content-center mx-0 mt-4 position-relative'>
                                    <p className='fs-4'>Time left <strong> {timeLeft} </strong> sec</p>
                                    <div className='position-absolute translate-middle d-sm-block d-none' style={{ top: '10px', right: '-14rem' }}><RoundProgressBar progress={(((index + 1) / questions?.length) * 100).toFixed(2)} strokeWidth={1} circleRadius={3} padding={10} /></div>
                                </div>
                                <hr
                                    className='mx-0 px-5'
                                    style={{
                                        height: '0.5rem',
                                        width: `${progressWidth}%`,
                                        border: 'none',
                                        background:
                                            'linear-gradient(127deg, rgba(233,105,162,0) 0%, rgba(215,98,219,1) 60%, rgba(255,114,93,1) 100%)',
                                        transition: '0.5s ease-out',
                                        opacity: '1'
                                    }}
                                />
                            </div>
                            <div className='row'>
                                {/* Question */}
                                <div className='d-flex'>
                                    <span className='fs-3 fw-bold m-0 me-2'>{index + 1}</span>
                                    <p className='fs-4 text-start text-justify'>{question.question}</p>
                                </div>
                            </div>
                            {/* answers */}
                            {question.options.map((option) => (
                                <div className='row'>
                                    <div key={option}>
                                        <p
                                            className='fs-3 text-start ms-4 text-justify option rounded p-1 '
                                            id={question.answer === option ? 'answer' : ''}
                                            onClick={(e) => checkAnswer(e, option)}
                                        >
                                            {`${question.options.indexOf(option) + 1}. ${option}`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <div className='row'>
                                <div className='d-flex justify-content-between p-3'>
                                    <p className='d-none d-md-block fs-5'>
                                        {index + 1} of {questions.length} Question
                                    </p>
                                    <p className='d-block d-md-none fs-5'>
                                        {index + 1} / {questions.length}
                                    </p>
                                    <button
                                        className='btn btn-dark px-5'
                                        onClick={next}
                                        disabled={!lock}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : null}
                    {
                        (showScore) ? <Result score={score} nOfQuiz={questions.length} /> : null
                    }

                </div>
            </center>
        </>
    );
}
