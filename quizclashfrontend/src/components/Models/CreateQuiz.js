import axios from 'axios';
import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import { toast } from 'react-toastify';
import tostDefault from '../../data/tostDefault';

export default function CreateQuiz(props) {

    const { show, onHide } = props;

    const [formData, setFormData] = useState({
        "name": '',
        "description": '',
        "level": '',
        "xp": '',
    })
    console.log(formData)

    const [loading, setLoading] = useState(false)

    const handlechange = ({ currentTarget: input }) => {
        let newData = { ...formData };
        newData[input.name] = input.value;
        setFormData(newData);
    }


    const submitForm = async (e) => {
        e.preventDefault();
        const id = toast.loading("Please wait...", tostDefault);
        setLoading(true)
        await axios
            .post(`quiz/`, formData)
            .then((response) => {
                // console.log(response.data)
                if (response.status === 201) {

                    toast.update(id, {
                        ...tostDefault,
                        render: "created",
                        type: "success",
                        isLoading: false,
                        closeButton: true,
                    });
                }
                onHide();
                setFormData({
                    "name": '',
                    "description": '',
                    "level": '',
                    "xp": '',
                })
                setLoading(false)
            })
            .catch((error) => {
                if (error?.response?.status === 400) {
                    toast.update(id, {
                        ...tostDefault,
                        render: "Invaild input",
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

                console.log({
                    message: error.message,
                    code: error.code,
                    response: error.response?.data
                });

                setLoading(false)

            })
            .finally(() => {
                setLoading(false)
            });
    };

    // if data is fetching show loading spinner for user
    if (loading) return;

    return (
        <Modal size='xl' show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Create Quizz </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <form onSubmit={(e) => (submitForm(e))}>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingphone" placeholder="" name='name' value={formData?.name} onChange={(e) => {
                            handlechange(e)
                        }} required />
                        <label htmlFor="floatingphone">name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "100px" }} name='description' required onChange={(e) => { handlechange(e) }} defaultValue={formData?.description}></textarea>
                        <label htmlFor="floatingTextarea">description</label>
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <div className="form-floating mb-3 w-50">
                            <select
                                className={`form-select`}
                                id="floatingphone"
                                name="level"
                                value={formData?.level}
                                onChange={(e) => {
                                    handlechange(e);
                                }}
                                required
                            >
                                <option value="Hard" className="text-danger">
                                    Hard
                                </option>
                                <option value="Medium" className="text-primary">
                                    Medium
                                </option>
                                <option value="Easy" className="text-success">
                                    Easy
                                </option>
                            </select>
                            <label htmlFor="floatingphone">Level</label>
                        </div>


                        <div className="form-floating mb-3 w-50">
                            <input type="number" className="form-control" id="floatingphone" placeholder="" name='xp' value={formData?.xp} onChange={(e) => {
                                handlechange(e)
                            }} required />
                            <label htmlFor="floatingphone">XP</label>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-dark"
                        data-bs-dismiss="modal">
                        Save quiz
                    </button>

                </form>

            </Modal.Body>
        </Modal>
    )
}
