import React from "react";

export const VideoDetail = ({ video }) => {
  /** If no video provided, display loading */
  if (!video) {
    return <div>Loading...</div>;
  }

  /** Grab on to video props id */
  const videoId = video.id.videoId;
  /** Define the url of the video */
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

