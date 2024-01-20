// VideoStore.jsx

import React, { useState } from "react";
import "./videostore.css";
import videoData from "./../../video.json";
import { Link } from "react-router-dom";

const VideoList = () => {
  // eslint-disable-next-line no-unused-vars
  const [videolist, setVideoList] = useState(videoData.resources);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleGenreButtonClick = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredVideos = videolist.filter(
    (video) =>
      (selectedGenre.toLowerCase() === "all" ||
        video.genre.toLowerCase() === selectedGenre.toLowerCase()) &&
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="video-store">
      <div className="title">
        <h1>Welcome to Kids VideoStore</h1>
      </div>
      <div className="filter-bar">
        <div className="button">
          {["all", "story", "academic", "sport", "art", "funny"].map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreButtonClick(genre)}
              className={`genre-button ${selectedGenre === genre ? "active" : ""}`}
            >
              {genre === "all" ? "All Genres" : genre}
            </button>
          ))}
        </div>
        <div className="search-bar">
          <label>Search by title</label>
          <input
            type="text"
            placeholder="Enter Title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="all-video">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-item">
            <Link to={`/videostore/${video.id}`} className="video-content-link">
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
