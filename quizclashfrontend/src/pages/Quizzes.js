import axios from 'axios'
import React, { lazy, useCallback, useEffect, useState } from 'react';
import '../styles/Quiz.css';
import img from '../assets/demo.png';
import { Link } from 'react-router-dom'
import LodingSpinner from '../components/LodingSpinner';


const Navbar = lazy(() => import('../components/Navbar'))
const QuestionCard = lazy(() => import('../components/QuestionCard'))

export default function Quizzes() {

  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState(null);


  // fetch Quiz
  const fetchQuiz = useCallback(async () => {
    setLoading(true);
    await axios
      .get("quiz/")
      .then((response) => {
        if (response.status === 200) {
          setQuizzes(response.data);
          // console.log(response.data) 
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setQuizzes, setLoading]);

  useEffect(() => {
   fetchQuiz();
  }, [fetchQuiz]);

  return (
    <>
      <Navbar page={'quizzes'} />
      <div className='container'>
        {(loading) ? (<LodingSpinner />) : (
          <div className='row'>
            {
              quizzes && quizzes.length > 0 ? (
                quizzes.map((quiz, index) => (
                  <div key={quiz.id} className='col-xxl-3 col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center'>
                    <Link to={`/quiz/${quiz.id}`} state={{ some: `${quiz.name}` }} style={{ textDecoration: 'none' }}>
                      <QuestionCard img={img} quiz={quiz} />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="text-center mt-5">
                  <p>No quizzes available at the moment.</p>
                </div>
              )
            }

          </div>
        )}
      </div>
    </>

  );
}
