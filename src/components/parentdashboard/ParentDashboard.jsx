// ParentDashboard.jsx

import React, { useState } from "react";
import avatar from "../../assets/avater1.jpg";
import "./parentdashboard.css";

const ParentDashboard = () => {
  const [selectedChild, setSelectedChild] = useState({
    id: 1,
    name: "John Doe",
    age: 8,
    location: "Playroom",
    activities: [
      { id: 1, name: "Math Quiz", time: "10:00 AM" },
      { id: 2, name: "Art Class", time: "02:00 PM" },
      // Add more activities as needed
    ],
    progress: {
      reading: 75, // Progress percentage
      gamePlaytime: "2 hours", // Total game playtime
      vocabularyExercises: 5, // Number of vocabulary exercises completed
      videoViewing: "3 hours", // Total video viewing time
      // Add more progress metrics as needed
    },
  });

  const renderProgressItem = (label, value, isProgressBar = false) => (
    <div className="progress-item" key={label}>
      <p>{label}:</p>
      {isProgressBar ? (
        <>
          <div className="progress-bar">
            <div style={{ width: `${value}%` }}></div>
          </div>
          <p>{value}%</p>
        </>
      ) : (
        <p>{value}</p>
      )}
    </div>
  );


  return (
    <div className="parent-dashboard">
      <div className="sidebar">
        <div className="logo">Your Dashboard</div>
        <div className="children-list">
          {/* For a single child dashboard, no need for child selection */}
          <div className="child selected">Child: {selectedChild.name}</div>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="user-profile">
            <img src={avatar} alt="User Avatar" />
            <span>Welcome, Parent Name</span>
          </div>
          <div className="logout">Logout</div>
        </div>
        <div className="child-details">
          <h2>{selectedChild.name}'s Dashboard</h2>
          <div className="progress-section">
            <h3>Progress Overview</h3>
            {renderProgressItem("Reading Progress", selectedChild.progress.reading, true)}
            {renderProgressItem("Game Playtime", selectedChild.progress.gamePlaytime)}
            {renderProgressItem("Vocabulary Exercises", `${selectedChild.progress.vocabularyExercises} completed`)}
            {renderProgressItem("Video Viewing Time", selectedChild.progress.videoViewing)}
          </div>
    
          <div className="activities">
            <h3>Upcoming Activities:</h3>
            <ul>
              {selectedChild.activities.map((activity) => (
                <li key={activity.id}>
                  {activity.name} at {activity.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
