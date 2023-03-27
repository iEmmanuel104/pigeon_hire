import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import BarData from '../../components/Charts/BarChart';
import LineData from '../../components/Charts/LineChart';
import data from '../../components/data';
import UserDetailModal from '../../components/Modal/UserModal';
const { users, campaigns } = data;

const Dashboard = () => {

    const [totalUsers, setTotalUsers] = useState(0);
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);


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

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className="dashboard-content">
            <div className="dashboard-container">
                <Sidebar users={users} campaigns={campaigns} />
            </div>

            <div className="container mt-3">

                <Row className="card-container justify-content-top">
                    <Col md={3} sm={6} className="card-col">
                        <Card className="card-box bg-info">
                            <Card.Body>
                                <FontAwesomeIcon icon={faUsers} className="icon text-light card-icon" size="6x" />
                                <Card.Title className="text-light card-title">Total Users</Card.Title>
                                <Card.Text className="text-light card-text">500</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="card-col">
                        <Card className="card-box bg-success">
                            <Card.Body>
                                <FontAwesomeIcon icon={faGlobe} className="icon text-light card-icon" size="6x" />
                                <Card.Title className="text-light card-title">Succesful Transactions</Card.Title>
                                <Card.Text className="text-light card-text">100</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="card-col">
                        <Card className="card-box bg-info">
                            <Card.Body>
                                <FontAwesomeIcon icon={faDollarSign} className="icon text-light card-icon" size="6x" />
                                <Card.Title className="text-light card-title">Failed Transactions</Card.Title>
                                <Card.Text className="text-light card-text">$10000</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="card-col">
                        <Card className="card-box bg-success">
                            <Card.Body>
                                <FontAwesomeIcon icon={faClock} className="icon text-light card-icon" size="6x" />
                                <Card.Title className="text-light card-title">Pending Promoters</Card.Title>
                                <Card.Text className="text-light card-text">20</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} className="card-col">
                        <Card className="card-box bg-info">
                            <Card.Body>
                                <FontAwesomeIcon icon={faUsers} className="icon text-light card-icon" size="6x" />
                                <Card.Title className="text-light card-title">Total Brands</Card.Title>
                                <Card.Text className="text-light card-text">500</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <div className="pending-verify">
                    <h2 className="pending-verify__title">Users with Pending Verifications</h2>
                    <table className="pending-verify__table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Signup Completion Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} onClick={() => handleUserClick(user)} className="pending-verify__row">
                                    <td className="pending-verify__cell">{user.fullname}</td>
                                    <td className="pending-verify__cell">
                                        {user.isOnBoarded
                                            ? "Signup Completed"
                                            : user.emailVerified
                                                ? "Onboarding Not Completed"
                                                : "Email Not Verified"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedUser && (
                        <UserDetailModal
                            show={showModal}
                            user={selectedUser}
                            handleEnableUser={() => { }}
                            handleDisableUser={() => { }}
                            onHide={handleModalClose}
                        />
                    )}
                </div>

                <div className="dashboard-stats">
                    <LineData /> 
                    <BarData />
                </div>

                <div className="user-container">

                </div>
            </div>
        </div>
    );
};

            export default Dashboard;
                            
   
