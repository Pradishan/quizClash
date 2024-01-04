import React, { lazy } from 'react';
import '../styles/Quiz.css';
import img from '../assets/demo.png';
import {Link} from 'react-router-dom'

const Navbar = lazy(() => import('../components/Navbar'))
const QuestionCard = lazy(() => import('../components/QuestionCard'))

export default function Quizzes() {

const quizzes = [
  {id:'001',name:'tamil',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",level:'Hard',point:"200"},
  {id:'002',name:'maths',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",level:'Easy',point:"100"},
  {id:'003',name:'english',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",level:'Meadium',point:"200"},
  {id:'004',name:'science',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",level:'Hard',point:"200"},
  {id:'005',name:'ict',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",level:'Easy',point:"200"},
  {id:'006',name:'sinhala',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",level:'Meadium',point:"0"},
  {id:'007',name:'history',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",level:'Hard',point:"200"},
  {id:'008',name:'art',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",level:'Meadium',point:"200"},
];

  return (
    <>
    <Navbar page={'quizzes'} />
    <div className='container'>
      <div className='row'>
        {quizzes.map((quiz, index) => (
          <div key={quiz.id} className='col-xxl-3 col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center'>
            <Link to={`/quiz/${quiz.id}`}  state={{ some: `${quiz.name}` }} style={{ textDecoration: 'none' }}>
              <QuestionCard img={img} quiz={quiz} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
  
  );
}
