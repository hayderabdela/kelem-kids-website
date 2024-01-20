// VideoDetail.jsx

import React from "react";
import { useParams } from "react-router-dom";
import videoData from "./../../video.json";
import "./videodetail.css";

const VideoDetail = ({ onClose }) => {
  const { videoId } = useParams();

  const selectedVideo = videoData.resources.find((video) => video.id === videoId);

  if (!selectedVideo) {
    return <div>Video not found!</div>;
  }

  return (
    <div className="video-detail-modal">
      <div className="video-detail-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h1>{selectedVideo.title}</h1>
        <video controls width="90%" height="auto">
          <source src={selectedVideo.url} type={`video/${selectedVideo.format}`} />
          Your browser does not support the video tag.
        </video>
        <div className="video-content">
          <p>decription: {selectedVideo.description}</p>
          <p>Genre: {selectedVideo.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
