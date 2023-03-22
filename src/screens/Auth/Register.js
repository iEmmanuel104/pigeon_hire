import React, { useState } from 'react';
import './auth.css';
import { ToastifyContext } from '../../context/ToastifyContext';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { username, email, password, confirmPassword } = formData;

    const [showModal, setShowModal] = useState(false);
    const [verifyFormData, setVerifyFormData] = useState({
        // email: '',
        verificationCode: '',
    });
    const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);

    const { verificationCode } = verifyFormData;

    function handleChange(e, state) {
        if (state === 'formData') {
            setFormData(prevFormData => ({
                ...prevFormData,
                [e.target.name]: e.target.value,
            }));
        } else if (state === 'verifyFormData') {
            setVerifyFormData(prevFormData => ({
                ...prevFormData,
                [e.target.name]: e.target.value,
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // check if all fields are filled
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            setToastifyState({
                ...ToastifyState,
                message: 'Please fill in all fields',
                variant: 'error',
                open: true
            });
            return;
        }

        // check if passwords match
        if (formData.password !== formData.confirmPassword) {
            // alert('Passwords do not match');
            setToastifyState({
                ...ToastifyState,
                message: 'Passwords do not match',
                variant: 'info',
                open: true
            });
            return;
        }

        setShowModal(true);
        console.log(formData);
        console.log (verifyFormData);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => handleChange(e, 'formData')}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleChange(e, 'formData')}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => handleChange(e, 'formData')}
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                    type="password" 
                    id="confirm-password" 
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => handleChange(e, 'formData')}
                />

                <button type="submit">Register</button>
            </form>
            {showModal && (
                <div className="modal-background">
                    <div className="modal-content">
                        <form
                            onSubmit={handleModalClose}
                            className="modal-form"
                        >
                            <h2>Verify Email</h2>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => handleChange(e, 'verifyFormData')}
                            />

                            <label htmlFor="verification-code">
                                Verification Code
                            </label>
                            <input
                                type="text"
                                id="verification-code"
                                name="verificationCode"
                                value={verificationCode}
                                onChange={(e) => handleChange(e, 'verifyFormData')}
                            />

                            <div className="modal-buttons">
                                <button type="submit">Submit</button>
                                <button onClick={handleModalClose}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
