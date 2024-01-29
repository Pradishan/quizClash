import React from 'react'
import { Modal } from "react-bootstrap";

export default function AddQuistion(props) {
    const { show, onHide, data } = props;
  return (
    <>
         <Modal className='mt-5 shadow' size='lg' show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add Question | {data?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

        
            

            </Modal.Body>
        </Modal>
    </>
  )
}
