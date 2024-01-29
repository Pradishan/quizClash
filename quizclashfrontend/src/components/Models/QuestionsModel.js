import React from 'react'
import { Modal } from "react-bootstrap";

export default function QuestionsModel(props) {

    const { show, onHide, data } = props;
    // console.log(data)
    return (
        <Modal size='xl' show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Question | {data}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <p>{data}</p>

            </Modal.Body>
        </Modal>
    )
}

