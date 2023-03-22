import React, { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';
// toastify imports
import { ToastifyContext } from '../../context/ToastifyContext';


const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            // toastify error
            setToastifyState({
                ...ToastifyState,
                message: 'Please fill in all fields',
                variant: 'error',
                open: true
            });
            // setError('Please fill in all fields');
            return;
        }
        // Here you can add your logic for handling the login form submission
        console.log('Login form submitted');
        handleLogin();
        navigate('/dashboard');
    };

    return (
        <div className='login-container'>
            <h1>Login</h1>
            {/* {ToastifyState && <div className="error">{ToastifyState.toastifyMessage}</div>} */}
            <form onSubmit={handleSubmit} className='login-form'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
