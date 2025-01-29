// Popup.js
import React from 'react';
import './Popup.css'; // Optional: if you want to style the popup

const Popup = ({ message, onClose }) =>
{
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>{message}</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
