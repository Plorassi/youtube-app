import axios from "axios";

const KEY = "AIzaSyARRqmD9HnmvoF_74RafHGVMEQbGfflP24";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
