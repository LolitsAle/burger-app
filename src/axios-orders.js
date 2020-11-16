import axios from "axios";

const instance = axios.create({
  baseURL: "https://compact-citizen-256308.firebaseio.com/",
});

export default instance;
