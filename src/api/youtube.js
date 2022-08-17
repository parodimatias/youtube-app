import axios from "axios";
const GOOGLE_API_KEY = "AIzaSyBrsBvkiGzyThxwKNBTVnKMWkQSzM4sON8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: GOOGLE_API_KEY,
  },
});
