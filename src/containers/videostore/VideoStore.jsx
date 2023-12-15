// VideoStore.jsx

import React, { useState } from "react";
import "./videostore.css";
import videoData from "./../../video.json";

const VideoList = () => {
  const [videolist, setVideoList] = useState(videoData.resources);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter videos based on selected genre and search term
  const filteredVideos = videolist.filter(
    (video) =>
      (selectedGenre.toLowerCase() === "all" ||
        video.genre.toLowerCase() === selectedGenre.toLowerCase()) &&
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="video-store">
      <h1>Welcome to Kids VideoStore</h1>
      <div className="filter-bar">
        <label>
          Filter by Genre:
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="all">All Genres</option>
            <option value="story">Story</option>
            <option value="academic">Academic</option>
            <option value="sport">Sport</option>
            <option value="art">Art</option>
            <option value="funny">Funny</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="all-video">
      {filteredVideos.map((video) => (
        <div key={video.public_id} className="video-item">
          {video.url && (
            <>
              <video controls width="100%" height="auto">
                <source src={video.url} type={`video/${video.format}`} />
                Your browser does not support the video tag.
              </video>
              <div className="video-content">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <p>Genre: {video.genre}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default VideoList;
