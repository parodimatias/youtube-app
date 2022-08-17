import React, { useEffect, useState } from "react";
import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
const App = () => {
  const { videos, search } = useVideos("Argentina");
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
