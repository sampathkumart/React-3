import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WUF0PQjsHPYcCeU4vVg4ZZeCK7owMvtE_DouNyzg5SY"
  }
});
