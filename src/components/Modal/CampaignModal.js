import React, { useState, useContext } from "react";
import { ToastifyContext } from '../../context/ToastifyContext';
import './modal.css';

const CampaignDetailModal = ({ show, onHide, campaign }) => {
    const { type, _id, name, unit, lowRatio } = campaign;
    const [editCampaign, setEditCampaign] = useState(campaign);
    const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);

    const handleEditCampaign = (e) => {
        e.preventDefault();
        // API call to edit campaign details
        // Upon successful editing, display toast message
        setToastifyState({
            ...ToastifyState,
            message: 'Campaign details edited successfully',
            variant: 'success',
            open: true
        });
        onHide();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditCampaign({ ...editCampaign, [name]: value });
    };

    return (
        <div className={`modal ${show ? "show" : ""}`}>
            <div className="modal__container">
                <div className="modal__header">
                    <div className="modal__title">Campaign Details</div>
                    <button className="modal__button" onClick={onHide}>
                        Close
                    </button>
                </div>
                <div className="modal__body">
                    <form onSubmit={handleEditCampaign}>
                        <div className="modal__content">
                            <div className="modal__row">
                                <div className="modal__label">Type:</div>
                                <div className="modal__value">{type}</div>
                            </div>
                            <div className="modal__row">
                                <div className="modal__label">ID:</div>
                                <div className="modal__value">{_id}</div>
                            </div>
                            <div className="modal__row">
                                <div className="modal__label">Name:</div>
                                <input
                                    type="text"
                                    name="name"
                                    value={editCampaign.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="modal__row">
                                <div className="modal__label">Unit:</div>
                                <input
                                    type="number"
                                    name="unit"
                                    value={editCampaign.unit}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="modal__row">
                                <div className="modal__label">Low Ratio:</div>
                                <input
                                    type="number"
                                    name="lowRatio"
                                    value={editCampaign.lowRatio}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="modal__footer">
                            <button className="modal__button success" type="submit">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetailModal;
