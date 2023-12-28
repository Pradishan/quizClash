import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Quiz.css';
import { questions } from '../data/questions';
import alarm from '../assets/alarm.mp3';

export default function Quizzes() {
  const [index, setIndex] = useState(null);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(questions[0]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [showStartButton, setShowStartButton] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const alarmSound = new Audio(alarm);

  const startQuiz = () => {
    setShowStartButton(false);
    setIndex(0);
    setLock(false);
    setQuestion(questions[0]);
    setScore(0);
    setTimeLeft(15)
    setShowScore(false);
    setShowQuestion(true)
  };

  const playAlarm = () => {
    alarmSound.play();
  };

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
  }, [lock, timeLeft, showQuestion]);

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
        <button className='btn btn-dark px-5' onClick={startQuiz}>
          Start
        </button>
      );
    }
    return null;
  };

  const renderScore = () => {
    if (showScore) {
      return (
        <div>
          <p>Total Score: {score}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Navbar page={'quizzes'} />
      <center>
        <h1>Quiz Name</h1>
        <div className='quiz-container mt-3 p-4' key={index}>
          {renderStartButton()}
          {(showQuestion) ? (
            <>
              <div className='row'>
                <div className='d-flex justify-content-center mt-4'>
                  <p className='fs-4'>Time left <strong> {timeLeft} </strong> sec</p>
                </div>
                <hr
                  className='mx-0 px-5'
                  style={{
                    height: '0.5rem',
                    width: `${progressWidth}%`,
                    border: 'none',
                    background:
                      'linear-gradient(270deg, #1CB722 79.99%, rgba(0, 0, 0, 0.00) 100.57%, rgba(20, 56, 185, 0.00) 100.57%)',
                    transition: '0.2s ease-out',
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
                  <p className='fs-5'>
                    {index + 1} of {questions.length} Question
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
          ):null}
          {renderScore()}
        </div>
      </center>
    </>
  );
}
