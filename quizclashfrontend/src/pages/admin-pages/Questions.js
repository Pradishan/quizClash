import React, { useCallback, useEffect, useState } from "react";
import "../../styles/Quiz.css";
import QuestionCard from "../../components/QuestionCard";
import img from "../../assets/demo.png";
import axios from "axios";
import LodingSpinner from "../../components/LodingSpinner";
import QuestionsModel from "../../components/Models/QuestionsModel";
import CreateQuiz from "../../components/Models/CreateQuiz";
export default function Questions() {

  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const fetchQuiz = useCallback(async () => {
    setLoading(true);
    await axios
      .get("quiz/")
      .then((response) => {
        if (response.status === 200) {
          setQuizzes(response.data);
        }
      })
      .catch((error) => {
        console.log("Error Occur", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setQuizzes, setLoading]);
  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);


  const openModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  return (<>
    <div className="m-4">
      <div className="row">
        <div className="d-flex my-1">
          <h3>Questions</h3>
          <button type="button" className="btn btn-dark ms-auto me-5"
            onClick={() => {
              setShowCreateModal(true)
            }}
          >
            Create
          </button>
        </div>
      </div>

      <div className='container' style={{ marginTop: '4rem' }}>
        {(loading) ? (<LodingSpinner />) : (
          <div className='row'>
            {
              quizzes && quizzes.length > 0 ? (
                quizzes.map((quiz, index) => (
                  <div key={quiz.id} className='col-xxl-4 col-lg-5 col-md-6 col-sm-12 mb-3 d-flex justify-content-center'>
                    <button className="btn " onClick={() => openModal({id:quiz?.id,name:quiz?.name})}><QuestionCard img={img} quiz={quiz} /> </button>
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
    </div>
    {
      selectedData ? (<QuestionsModel show={showModal} onHide={() => setShowModal(false)} data={selectedData} />) : (null)
    }
    <CreateQuiz show={showCreateModal} onHide={() => setShowCreateModal(false)} fetchQuiz={fetchQuiz}/>

  </>
  );
}
