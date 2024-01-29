import axios from 'axios';
import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import { toast } from 'react-toastify';
import tostDefault from '../../data/tostDefault';

export default function AddQuistion(props) {
  const { show, onHide, data ,number,id } = props;

  const nextQuestionNumber = number ? number + 1 : 1;

  const [formData, setFormData] = useState({
    "number": nextQuestionNumber,
    "question": '',
    "answer": '',
    "option1": '',
    "option2": '',
    "option3": '',
    "option4": '',
    "quiz": id,
  })

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
      .post(`question/`, formData)
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
          "number": nextQuestionNumber,
          "question": '',
          "answer": '',
          "option1": '',
          "option2": '',
          "option3": '',
          "option4": '',
          "quiz": id,
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

  const handleRadioChange = (selectedOption) => {
    setFormData({ ...formData, answer: selectedOption });
  };

  // if data is fetching show loading spinner for user
  if (loading) return;
  return (
    <>
      <Modal className='mt-5 shadow' size='lg' show={show} onHide={onHide} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Question | {data?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={(e) => (submitForm(e))}>

            <div className="form-floating mb-3">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "100px" }} name='question' required onChange={(e) => { handlechange(e) }} defaultValue={formData?.question}></textarea>
              <label htmlFor="floatingTextarea">Question</label>
            </div>


            {/* Radio buttons for options */}
            <div className="mb-3">
              {['option1', 'option2', 'option3', 'option4'].map((option, index) => (
                <div key={index} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id={`radioOption${index + 1}`}
                    value={formData[option]}
                    checked={formData?.answer === option}
                    onChange={() => handleRadioChange(option)}
                  />
                  <label className="form-check-label" htmlFor={formData[option]}>{formData[option]}</label>
                </div>
              ))}
            </div>

            {/* Input fields for options */}
            {['option1', 'option2', 'option3', 'option4'].map((option, index) => (
              <div key={index} className="form-floating mb-3">
                <input type="text" className="form-control" id={`floatingOption${index + 1}`} placeholder="" name={option} value={formData[option]} onChange={(e) => handlechange(e)} required />
                <label htmlFor={`floatingOption${index + 1}`}>{`Option ${index + 1}`}</label>
              </div>
            ))}


            <button type="submit" className="btn btn-dark"
              data-bs-dismiss="modal">
              Save quiz
            </button>

          </form>



        </Modal.Body>
      </Modal>
    </>
  )
}
