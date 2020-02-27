import axios from "axios";
const KEY = "AIzaSyDdS1raOMejRtKONLxjpZo4uE7JUJ_gKxc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 6,
    key: KEY
  }
});
