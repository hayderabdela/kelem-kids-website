import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avater1.jpg";
import "./parentdashboard.css";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [parentName, setParentName] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login-signup");
  };

  // eslint-disable-next-line no-unused-vars
  const [childrenList, setChildrenList] = useState([
    {
      id: 1,
      name: "Abdu hayder",
      age: 8,
      location: "Playroom",
      activities: [
        { id: 1, name: "Math Quiz", time: "10:00 AM" },
        { id: 2, name: "Art Class", time: "02:00 PM" },
      ],
      progress: {
        reading: 50,
        gamePlaytime: "2 hours",
        vocabularyExercises: 5,
        videoViewing: "3 hours",
      },
    },
    {
      id: 2,
      name: "Mohammed hayder",
      age: 9,
      location: "Classroom",
      activities: [
        { id: 1, name: "Science Experiment", time: "09:30 AM" },
        { id: 2, name: "Music Practice", time: "03:30 PM" },
      ],
      progress: {
        reading: 75,
        gamePlaytime: "1.5 hours",
        vocabularyExercises: 8,
        videoViewing: "2 hours",
      },
    },
    {
      id: 3,
      name: "Harun hayder",
      age: 7,
      location: "Art Room",
      activities: [
        { id: 1, name: "Drawing Class", time: "11:15 AM" },
        { id: 2, name: "Storytime", time: "04:45 PM" },
      ],
      progress: {
        reading: 60,
        gamePlaytime: "2.5 hours",
        vocabularyExercises: 6,
        videoViewing: "1.5 hours",
      },
    },
  ]);

  const [selectedChildIndex, setSelectedChildIndex] = useState(0);

  const handleChildSelection = (index) => {
    setSelectedChildIndex(index);
  };

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

  useEffect(() => {
    // Retrieve the parent's name from localStorage
    const storedParentName = localStorage.getItem("username");
    setParentName(storedParentName || "Parent"); // Set a default value if not found
  }, []);

  return (
    <div className="parent-dashboard">
      <div className="sidebar">
        <div className="logo">Your Dashboard</div>
        <div className="children-list">
          {childrenList.map((child, index) => (
            <div
              key={child.id}
              className={`child ${index === selectedChildIndex ? "selected" : ""}`}
              onClick={() => handleChildSelection(index)}
            >
              Child: {child.name}
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="user-profile">
            <img src={avatar} alt="User Avatar" />
            <span>Welcome, {parentName}</span>
          </div>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="child-details">
          <h2>{childrenList[selectedChildIndex].name}'s Dashboard</h2>
          <h3>Progress Overview</h3>
          <div className="progress-section">
            {renderProgressItem("Reading Progress", childrenList[selectedChildIndex].progress.reading, true)}
            {renderProgressItem("Game Playtime", childrenList[selectedChildIndex].progress.gamePlaytime)}
            {renderProgressItem("Vocabulary Exercises", `${childrenList[selectedChildIndex].progress.vocabularyExercises} completed`)}
            {renderProgressItem("Video Viewing Time", childrenList[selectedChildIndex].progress.videoViewing)}
          </div>
          <div className="activities">
            <h3>Upcoming Activities:</h3>
            <ul>
              {childrenList[selectedChildIndex].activities.map((activity) => (
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
