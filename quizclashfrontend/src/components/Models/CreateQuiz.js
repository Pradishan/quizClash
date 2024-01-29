import React from 'react'
import { Modal } from "react-bootstrap";

export default function CreateQuiz(props) {
    const { show, onHide } = props;
    return (
        <Modal size='xl' show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Create Quizz </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <p>TEST</p>

            </Modal.Body>
        </Modal>
    )
}
