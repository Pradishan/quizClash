import React from 'react'
import { Modal } from "react-bootstrap";

export default function UserData(props) {
    const { show, onHide, data } = props;
    // console.log(data)
    return (
        <Modal size='xl' show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Medical Records | {data?.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>user name</h5>
                <p>{data?.username}</p>
                <h5>email</h5>
                <p>{data?.email}</p>
                <hr />
            </Modal.Body>
        </Modal>
    )
}
