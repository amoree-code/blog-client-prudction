import axios from "axios";

const request = axios.create({
  baseURL: "https://blog-server-api-production.up.railway.app/",
});

export default request;
