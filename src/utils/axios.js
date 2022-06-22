import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://track-api.leadhit.io/",
});

export default axiosInstance;
