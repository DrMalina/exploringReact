import axios from "axios";

const KEY = "AIzaSyABEdBSf8aUZpk7YL1OlPzj7ahDwTjTDLE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video"
  }
});
