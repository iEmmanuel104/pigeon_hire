import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './auth.css';

const VerifyEmailModal = ({ showModal, handleModalClose, username, email }) => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your logic for handling the verification form submission
        console.log('Verification form submitted');
    };

    return (
        <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Verify Your Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                    <Form.Group controlId="formUsername" className="w-100">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} readOnly />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="w-100">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} readOnly />
                    </Form.Group>

                    <Form.Group controlId="formVerificationCode" className="w-100">
                        <Form.Label>Verification Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter verification code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default VerifyEmailModal;
