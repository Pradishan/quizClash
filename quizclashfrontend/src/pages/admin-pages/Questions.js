import React, { useCallback, useEffect, useState } from "react";
import "../../styles/Quiz.css";
import QuestionCard from "../../components/QuestionCard";
import img from "../../assets/demo.png";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Questions() {
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState(null);

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
  return (
    <div className="">
      <div className="row">
        <div className="d-flex my-1">
          <button type="button" className="btn btn-dark ms-auto me-5">
            Create
          </button>
        </div>
      </div>
      {/* quizess lit */}
      <div
        className="row pt-2 pb-4 overflow-scroll h-100"
        style={{ height: "100%" }}
      >
        {quizzes && quizzes.length > 0 ? (
          quizzes.map((quiz, index) => (
            <div
              key={quiz.id}
              className="col-xxl-2 col-lg-4 col-md-6 col-sm-12  mb-3 d-flex justify-content-center"
            >
              <Link
                to={`/quiz/${quiz.id}`}
                state={{ some: `${quiz.name}` }}
                style={{ textDecoration: "none" }}
              >
                <QuestionCard img={img} quiz={quiz} />
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <p>No quizzes available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
