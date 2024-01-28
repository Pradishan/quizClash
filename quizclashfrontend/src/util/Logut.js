import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import tostDefault from '../data/tostDefault';
import { removeCookie, removeCridential } from './Authentication';
import { useNavigate } from 'react-router-dom';

export default function Logut() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const logout = async (e) => {
        setLoading(true);
        const id = toast.loading("logut...", tostDefault);
        await axios
            .post("accounts/logout/")
            .then((response) => {
                setLoading(false);
                if (response.status === 204) {

                    removeCookie("TOKEN")
                    removeCridential()

                    navigate("/");

                    toast.update(id, {
                        ...tostDefault,
                        render: "logout",
                        type: "success",
                        isLoading: false,
                        closeButton: true,
                    });
                }

            })
            .catch((error) => {
                if (error?.response?.status === 400) {
                    toast.update(id, {
                        ...tostDefault,
                        render: "Invaild Credential",
                        type: "error",
                        isLoading: false,
                        closeButton: true,
                    });
                } else if (error?.code === "ERR_NETWORK") {
                    toast.update(id, {
                        ...tostDefault,
                        render: "Network Error",
                        type: "error",
                        isLoading: false,
                        closeButton: true,
                    });
                } else {
                    toast.update(id, {
                        ...tostDefault,
                        render: "Something went wrong",
                        type: "error",
                        isLoading: false,
                        closeButton: true,
                    });
                }
                setLoading(false);
                console.log({
                    message: error.message,
                    code: error.code,
                    response: error.response?.data
                });

            });
    };

    return (
        <div className='p-2' typeof='button' onClick={(e) => {
            logout(e)
        }} style={{cursor:'pointer'}}><i className="bi bi-box-arrow-right me-2"></i>Logut{loading && ("...")}</div>
    )
}
