import React from 'react';

const AirlineModal = ({ airline, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="header">
          <h2>{airline.name}</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <ul>
          <li>
            <strong>Country:</strong> 
            <span className="value">{airline.country}</span>
          </li>
          <li>
            <strong>Headquarters:</strong> 
            <span className="value">{airline.head_quaters}</span>
          </li>
          <li>
            <strong>Website:</strong> 
            <span className="value">{airline.website}</span>
          </li>
          <li>
            <strong>Slogan:</strong> 
            <span className="value">{airline.slogan}</span>
          </li>
          <li>
            <strong>Established:</strong> 
            <span className="value">{airline.established}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AirlineModal;
