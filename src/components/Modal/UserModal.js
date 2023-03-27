import React from "react";
import './modal.css'

const UserDetailModal = ({ show, onHide, user }) => {
    const { _id, fullname, email, phone, roles, isOnBoarded } = user;

    const handleEnableUser = () => {
        console.log("Enable User");
    };

    const handleDisableUser = () => {
        console.log("Disable User");
    };

    return (
        <div className={`modal ${show ? "show" : ""}`}>
            <div className="modal__container">
                <div className="modal__header">
                    <div className="modal__title">User Details</div>
                    <button className="modal__button" onClick={onHide}>
                        Close
                    </button>
                </div>
                <div className="modal__body">
                    <div className="modal__content">
                        <div className="modal__row">
                            <div className="modal__label">ID:</div>
                            <div className="modal__value">{_id}</div>
                        </div>
                        <div className="modal__row">
                            <div className="modal__label">Name:</div>
                            <div className="modal__value">{fullname}</div>
                        </div>
                        <div className="modal__row">
                            <div className="modal__label">Email:</div>
                            <div className="modal__value">{email}</div>
                        </div>
                        <div className="modal__row">
                            <div className="modal__label">Phone:</div>
                            <div className="modal__value">{phone}</div>
                        </div>
                        <div className="modal__row">
                            <div className="modal__label">Roles:</div>
                            <div className="modal__value">{roles}</div>
                        </div>
                        <div className="modal__row">
                            <div className="modal__label">Onboarded:</div>
                            <div className="modal__value">{isOnBoarded ? "Yes" : "No"}</div>
                        </div>
                    </div>
                    <div className="modal__footer">
                        <button className="modal__button success" onClick={handleEnableUser}>
                            Enable User
                        </button>
                        <button className="modal__button danger" onClick={handleDisableUser}>
                            Disable User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailModal;
