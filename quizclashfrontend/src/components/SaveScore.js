import React, { useCallback } from 'react'
import { getUserID, getUserScore } from '../util/Authentication';
import axios from 'axios';
import tostDefault from '../data/tostDefault';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SaveScore(props) {

    const navigate = useNavigate()
    const score = parseInt(((props?.score ?? 0)*10),10)


    const save = useCallback(async () => {

        const id = toast.loading('Saving...', tostDefault);

        try {
            const response = await axios.put(`/accounts/update-score/${getUserID()}/`, {
                score_value: score ,
            });

            console.log(response);
      

            if (response.status === 200) {

                console.log(score)

                navigate('/profile');

                toast.update(id, {
                    ...tostDefault,
                    render: `You earned ${(props?.score ?? 0)*10} ⭐`,
                    type: 'success',
                    isLoading: false,
                    closeButton: true,
                });
            }
        } catch (error) {
            console.log(score);
            console.log(getUserScore());
            toast.update(id, {
                ...tostDefault,
                render: 'Something went wrong',
                type: 'error',
                isLoading: false,
                closeButton: true,
            });

            console.error({
                message: error.message,
                code: error.code,
                response: error.response?.data,
            });
        }
    }, [navigate, props?.score,score]);

    return (
        <button className='btn btn-dark px-5 m-2' onClick={save}>
            Save Score 
        </button>
    )
}
