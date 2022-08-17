import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const { data } = await youtube.get("/search", { params: { q: term } });
    setVideos(data.items);
  };
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return { videos, search };
};

export default useVideos;
