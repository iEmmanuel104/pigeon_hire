import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [onlineUsers, setOnlineUsers] = useState(0);

    useEffect(() => {
        // Get the stored values from local storage
        const storedTotalUsers = localStorage.getItem('totalUsers');
        const storedOnlineUsers = localStorage.getItem('onlineUsers');

        // Set the initial state of the dashboard
        if (storedTotalUsers) {
            setTotalUsers(parseInt(storedTotalUsers));
        }
        if (storedOnlineUsers) {
            setOnlineUsers(parseInt(storedOnlineUsers));
        }
    }, []);

    useEffect(() => {
        // Store the current values in local storage whenever they change
        localStorage.setItem('totalUsers', totalUsers);
        localStorage.setItem('onlineUsers', onlineUsers);
    }, [totalUsers, onlineUsers]);

    return (
        <div className="container mt-3">
            <Row className="card-container justify-content-center">
                <Col md={3} sm={6}>
                    <Card className="card-box bg-info">
                        <Card.Body>
                            <FontAwesomeIcon icon={faUsers} className="icon text-light card-icon" size="6x" />
                            <Card.Title className="text-light card-title">Total Users</Card.Title>
                            <Card.Text className="text-light card-text">500</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="card-box bg-success">
                        <Card.Body>
                            <FontAwesomeIcon icon={faGlobe} className="icon text-light card-icon" size="6x" />
                            <Card.Title className="text-light card-title">Total Online Users</Card.Title>
                            <Card.Text className="text-light card-text">100</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="card-box bg-warning">
                        <Card.Body>
                            <FontAwesomeIcon icon={faDollarSign} className="icon text-light card-icon" size="6x" />
                            <Card.Title className="text-light card-title">Total Income</Card.Title>
                            <Card.Text className="text-light card-text">$10,000</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="card-box bg-danger">
                        <Card.Body>
                            <FontAwesomeIcon icon={faClock} className="icon text-light card-icon" size="6x" />
                            <Card.Title className="text-light card-title">Pending Verifications</Card.Title>
                            <Card.Text className="text-light card-text">20</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="card-box bg-info">
                        <Card.Body>
                            <FontAwesomeIcon icon={faUsers} className="icon text-light card-icon" size="6x" />
                            <Card.Title className="text-light card-title">Total Users</Card.Title>
                            <Card.Text className="text-light card-text">500</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="card-box bg-success">
                        <Card.Body>
                            <FontAwesomeIcon icon={faGlobe} className="icon text-light card-icon" size="6x" />
                            <Card.Title className="text-light card-title">Total Online Users</Card.Title>
                            <Card.Text className="text-light card-text">100</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="card-box bg-warning">
                        <Card.Body>
                            <FontAwesomeIcon icon={faDollarSign} className="icon text-light card-icon" size="6x" />
                            <Card.Title className="text-light card-title">Total Income</Card.Title>
                            <Card.Text className="text-light card-text">$10,000</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="card-box bg-danger">
                        <Card.Body>
                            <FontAwesomeIcon icon={faClock} className="icon text-light card-icon" size="6x" />
                            <Card.Title className="text-light card-title">Pending Verifications</Card.Title>
                            <Card.Text className="text-light card-text">20</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
