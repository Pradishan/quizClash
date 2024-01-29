import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { Modal } from "react-bootstrap";
import LodingSpinner from '../LodingSpinner';
import { formatQuestions } from '../../util/Utils';
import AddQuistion from './AddQuistion';

export default function QuestionsModel(props) {

    const { show, onHide, data } = props;

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);

    // fetch Questions
    const fetchQuestions = useCallback(async () => {
        setLoading(true);
        await axios
            .get(`quizzes/${data?.id}/questions/`)
            .then((response) => {
                if (response.status === 200) {
                    setQuestions(response.data);
                    // console.log(response.data)
                }
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setQuestions, setLoading, data?.id]);

    useEffect(() => {
        fetchQuestions()
    }, [fetchQuestions])
    if (loading) return <LodingSpinner />;

    return (
        <Modal size='xl' show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Question | {data?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {
                    questions.length > 0 ? (
                        formatQuestions(questions)?.map((formattedQuestion, index) => (
                            <div key={index}>
                                <p>Number: {formattedQuestion.numb}</p>
                                <p>Question: {formattedQuestion.question}</p>
                                <p>Answer: {formattedQuestion.answer}</p>
                                <p>Options:</p>
                                <ul>
                                    {formattedQuestion.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>{option}</li>
                                    ))}
                                </ul>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <div className="text-center mt-3">
                            <p>No questions available at the moment.</p>
                        </div>
                    )
                }

                <button type="button" className="btn btn-dark ms-auto me-5"
                    onClick={() => {
                        setShowAddModal(true)
                    }}
                >       Create
                </button>
                <AddQuistion show={showAddModal} onHide={() => setShowAddModal(false)} />
            </Modal.Body>
        </Modal>
    )
}

