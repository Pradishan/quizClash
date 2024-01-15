import React, { lazy, useCallback, useEffect, useState } from 'react'
import LodingSpinner from '../components/LodingSpinner';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Navbar = lazy(() => import('../components/Navbar'));
const Questions = lazy(() => import('./Questions'));

export default function Quiz() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState(null);

    // Function to convert API response to the desired format
    const formatQuestions = (apiQuestions) => {
        return apiQuestions.map((question) => ({
            numb: question?.number,
            question: question?.question,
            answer: question?.answer,
            options: [
                question?.option1,
                question?.option2,
                question?.option3,
                question?.option4,
            ],
        }));
    };

    // fetch Questions
    const fetchQuestions = useCallback(async () => {
        setLoading(true);
        await axios
            .get(`quizzes/${id}/questions/`)
            .then((response) => {
                if (response.status === 200) {
                    setQuestions(response.data);
                }
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setQuestions, setLoading, id]);

    useEffect(() => {
        fetchQuestions()
    }, [fetchQuestions]);

    return (
        <>
            <Navbar />
            {(loading) ? (
                <LodingSpinner />
            ) : (
                <>
                    {questions && questions.length > 0 ? (
                        <Questions question={formatQuestions(questions)} />
                    ) : (
                        <div className='text-center mt-5'>No questions available for this quiz.</div>
                    )}
                </>
            )}
        </>
    )
}
