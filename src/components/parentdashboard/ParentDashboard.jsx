// ParentDashboard.jsx

import React, { useState } from "react";
import avater from "../../assets/avater1.jpg"
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
            <img src={avater} alt="User Avatar" />
            <span>Welcome, Parent Name</span>
          </div>
          <div className="logout">Logout</div>
        </div>
        <div className="child-details">
          <h2>{selectedChild.name}'s Dashboard</h2>
          <div className="progress-section">
            <h3>Progress Overview</h3>
            <div className="progress-item">
              <p>Reading Progress:</p>
              <div className="progress-bar">
                <div style={{ width: `${selectedChild.progress.reading}%` }}></div>
              </div>
              <p>{selectedChild.progress.reading}%</p>
            </div>
            <div className="progress-item">
              <p>Game Playtime:</p>
              <p>{selectedChild.progress.gamePlaytime}</p>
            </div>
            <div className="progress-item">
              <p>Vocabulary Exercises:</p>
              <p>{selectedChild.progress.vocabularyExercises} completed</p>
            </div>
            <div className="progress-item">
              <p>Video Viewing Time:</p>
              <p>{selectedChild.progress.videoViewing}</p>
            </div>
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
