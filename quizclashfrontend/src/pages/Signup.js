import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import tostDefault from '../data/tostDefault';

export default function Signup() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        "username":'',
        "email":'',
        "first_name":'',
        "last_name":'',
        "phone":'',
        "address":'',
        "password":'',
    })

   // form submition function
   const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const id = toast.loading("Please wait...", tostDefault);
    await axios
        .post("accounts/create-user/", formData)
        .then((response) => {
            setLoading(false);
            // console.log(response.data)
            if (response.status === 201) {

                toast.update(id, {
                    ...tostDefault,
                    render: "Registered",
                    type: "success",
                    isLoading: false,
                    closeButton: true,
                });

                navigate("/login")
            }

        })
        .catch((error) => {
            if (error?.response?.status === 400) {

                let  message = 'input error'
                if(error?.response?.data?.username){
                    message = error?.response?.data?.username[0];
                }else if(error?.response?.data?.email){
                    message = error?.response?.data?.email[0];
                }

                toast.update(id, {
                    ...tostDefault,
                    render: message,
                    type: "error",
                    isLoading: false,
                    closeButton: true,
                });
            } else if(error?.code === "ERR_NETWORK"){
                toast.update(id, {
                    ...tostDefault,
                    render: "Network Error",
                    type: "error",
                    isLoading: false,
                    closeButton: true,
                });
            }else {
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

                let data = {...formData};
                data["password"] = "";
                setFormData(data)
            
        });
};


    const handlechange = ({ currentTarget: input }) => {
        let newData = { ...formData };
        newData[input.name] = input.value;
        setFormData(newData);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container justify-content-center">
                    <a className="py-1" href="/"><img src={logo} alt='logo' height={'30rem'} /></a>
                </div>
            </nav>
            <center><div className='justify-cintent-center' style={{ maxWidth: '30rem', }}>
                <h2 className='m-2 py-2'>Signup</h2>
                <form onSubmit={(e) => (submitForm(e))} className=''>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingusename" placeholder="Username" name='username' value={formData.username} onChange={(e) => {
                            handlechange(e)
                        }} required />
                        <label htmlFor="floatingusename">Username</label>
                    </div>
                    <div className='d-flex'>
                        <div className="form-floating mb-3 w-100 me-1">
                            <input type="text" className="form-control" id="floatingfirstname" placeholder="Username" name='first_name' value={formData.first_name} onChange={(e) => {
                                handlechange(e)
                            }} required />
                            <label htmlFor="floatingfirstname">First name</label>
                        </div>
                        <div className="form-floating mb-3 w-100 ms-1">
                            <input type="text" className="form-control" id="floatinglastname" placeholder="Username" name='last_name' value={formData.last_name} onChange={(e) => {
                                handlechange(e)
                            }} required />
                            <label htmlFor="floatinglastname">Last name</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingemail" placeholder="name@example.com" name='email' value={formData.email} onChange={(e) => {
                            handlechange(e)
                        }} required />
                        <label htmlFor="floatingemail">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "100px" }} name='address' required onChange={(e) => {handlechange(e)}} defaultValue={formData.address}></textarea>
                        <label htmlFor="floatingTextarea">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="phone" className="form-control" id="floatingphone" placeholder="name@example.com" name='phone' value={formData.phone} onChange={(e) => {
                            handlechange(e)
                        }} required />
                        <label htmlFor="floatingphone">Phone</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' value={formData.password} onChange={(e) => {
                            handlechange(e)
                        }} required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className='btn btn-dark w-100 p-2 my-3' type='submit' disabled={loading}>
                        Signup
                        {loading && (
                            '...'
                        )}
                    </button>
                </form>
                Already have an account? <Link to={'/signup'} style={{ textDecoration: 'none' }}>Login</Link>
            </div>
            </center>
        </>
    )
}
