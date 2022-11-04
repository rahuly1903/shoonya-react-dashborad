import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4100/",
});

export default axiosInstance;
