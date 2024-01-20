import React, { useState } from 'react'
import axios from "axios";
import tostDefault from '../data/tostDefault';
import logo from '../assets/logo.png';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { initialNavigate, loadCridential, removeCookie, removeCridential, setCookie } from '../util/Authentication';

export default function Login() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        "email": "",
        "password": ""
    })

    const handlechange = ({ currentTarget: input }) => {
        let newData = { ...formData };
        newData[input.name] = input.value;
        setFormData(newData);
    }


    // contact form submition function
    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        const id = toast.loading("Please wait...", tostDefault);
        await axios
            .post("accounts/login/", formData)
            .then((response) => {
                setLoading(false);
                // console.log(response.data)
                if (response.status === 200) {

                    setCookie("TOKEN", response.data.token, 2)

                    loadCridential(response.data.user)

                    // console.log({ "Token": localStorage.getItem("Token") });
                    // console.log({ "id": localStorage.getItem("ID") });

                    navigate(initialNavigate());

                    toast.update(id, {
                        ...tostDefault,
                        render: "logedin",
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
                } else {
                    toast.update(id, {
                        ...tostDefault,
                        render: "Something went wrong",
                        type: "error",
                        isLoading: false,
                        closeButton: true,
                    });
                }

                removeCookie("TOKEN")
                removeCridential()

                setLoading(false);
                console.log({
                    message: error.message,
                    code: error.code,
                    response: error.response.data
                });
                setFormData({
                    "email": formData.email,
                    "password": ""
                })
            });
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container justify-content-center">
                    <a className="py-1" href="/"><img src={logo} alt='logo' height={'30rem'} /></a>
                </div>
            </nav>
            <center><div className='justify-cintent-center' style={{ maxWidth: '20rem', marginTop: '10rem' }}>
                <h2 className='m-2 py-2'>Login</h2>
                <form onSubmit={(e) => (submitForm(e))}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={formData.email} onChange={(e) => {
                            handlechange(e)
                        }} required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' value={formData.password} onChange={(e) => {
                            handlechange(e)
                        }} required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className='btn btn-dark w-100 p-2 my-3' type='submit' disabled={loading}>
                        Login
                        {loading && (
                            '...'
                        )}
                    </button>
                </form>
            </div>
            </center>
        </>
    )
}
