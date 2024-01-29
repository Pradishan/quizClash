import React, { lazy, useCallback, useEffect, useState } from 'react'
import LodingSpinner from '../components/LodingSpinner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatQuestions } from '../util/Utils';

const Navbar = lazy(() => import('../components/Navbar'));
const Questions = lazy(() => import('./Questions'));

export default function Quiz() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState(null);

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
