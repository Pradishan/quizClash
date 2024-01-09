import React from "react";
import "../../styles/Quiz.css";
import QuestionCard from "../../components/QuestionCard";
import img from "../../assets/demo.png";
export default function Questions() {
  const quizzes = [
    {
      id: "001",
      name: "tamil",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      level: "Hard",
      point: "200",
    },
    {
      id: "002",
      name: "maths",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      level: "Easy",
      point: "100",
    },
    {
      id: "003",
      name: "english",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      level: "Meadium",
      point: "200",
    },
    {
      id: "004",
      name: "science",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      level: "Hard",
      point: "200",
    },
    {
      id: "005",
      name: "ict",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      level: "Easy",
      point: "200",
    },
    {
      id: "006",
      name: "sinhala",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      level: "Meadium",
      point: "0",
    },
    {
      id: "007",
      name: "history",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      level: "Hard",
      point: "200",
    },
    {
      id: "008",
      name: "art",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      level: "Meadium",
      point: "200",
    },
  ];

  return (
    <div className="container vh-100">
      <div className="row">
        <div className="d-flex my-1">
          <button type="button" className="btn btn-dark ms-auto me-5">
            Create
          </button>
        </div>
      </div>
      <div
        className="row pt-2 pb-4 overflow-scroll h-100"
        style={{ height: "100%" }}
      >
        {quizzes.map((quiz, index) => (
          <div
            key={quiz.id}
            className="col-xxl-2 col-lg-4 col-md-6 col-sm-12  mb-3 d-flex justify-content-center"
          >
            <QuestionCard img={img} quiz={quiz} />
          </div>
        ))}
      </div>
    </div>
  );
}
