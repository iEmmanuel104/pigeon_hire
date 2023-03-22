import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Toastify from './components/Toastify';
import ToastifyComponent from './context/ToastifyContext';
import Header from './components/Header/Header';
import Register from './screens/Auth/Register';
import Login from './screens/Auth/Login';
import Dashboard from './screens/Dashboard/Dashboard';
import Leaderboard from './screens/Dashboard/Leaderboard';


function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  const handleLogin = (user) => {
    setisAuthenticated(true);
  };

  const handleLogout = () => {
    setisAuthenticated(false);
  };

  // const location = useLocation();

  // useEffect(() => {
  //   setCurrentPath(location.pathname);
  // }, [location]);

  return (

    <ToastifyComponent>
        <div style={{ position: "fixed", zIndex: "1000000" }}>
          <Toastify />
        </div>    
        <Router>
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='login' element={<Login handleLogin={handleLogin} />} />
          {isAuthenticated ? (
            <>
              <Route path='dashboard' element={<Dashboard isAuthenticated={isAuthenticated} />} />
              <Route path='leaderboard' element={<Leaderboard isAuthenticated={isAuthenticated} />} />

            </>
          ) : (
            <Route path='*' element={<Navigate to='/login' />} />
          )}

        </Routes>
      </Router>
    </ToastifyComponent>
  );
}

export default App;
