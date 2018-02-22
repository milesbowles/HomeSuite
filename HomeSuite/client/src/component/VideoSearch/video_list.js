import React from "react";
import VideoListItem from "./video_list_item";

export const VideoList = props => {
  /** Assign a variable that maps through all the videos */
  /** And return a VideoListItem component for each video */
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        /** Function to call when clicking on a video */
        onVideoSelect={props.onVideoSelect}
        /** React likes each map item to have a key */
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

