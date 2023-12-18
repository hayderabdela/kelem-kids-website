import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avater1.jpg";
import "./parentdashboard.css";

const ParentDashboard = () => {
  const navigate = useNavigate();
  // Simulating authentication check using a token stored in localStorage
  const handleLogout = () => {
    // Perform logout actions (e.g., clear localStorage, reset state, etc.)
    localStorage.removeItem("token");
    // Redirect to the login/signup page
    navigate("/login-signup");
  }; 

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
      reading: 50,
      gamePlaytime: "2 hours",
      vocabularyExercises: 5,
      videoViewing: "3 hours",
      // Add more progress metrics as needed
    },
  });


  const renderProgressItem = (label, value, isProgressBar = false) => (
  <div className="progress-item" key={label}>
    <div className="progress-item-content">
      <p>{label}:</p>
      {isProgressBar ? (
        <>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${value}%` }}></div>
          </div>
          <p className="progress-value">{value}%</p>
        </>
      ) : (
        <p>{value}</p>
      )}
    </div>
  </div>
);


  return (
    <div className="parent-dashboard">
      <div className="sidebar">
        <div className="logo">Your Dashboard</div>
        <div className="children-list">
          <div className="child selected">Child: {selectedChild.name}</div>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="user-profile">
            <img src={avatar} alt="User Avatar" />
            <span>Welcome, Parent Name</span>
          </div>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
        <div className="child-details">
          <h2>{selectedChild.name}'s Dashboard</h2>
          <h3>Progress Overview</h3>
          <div className="progress-section">
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
