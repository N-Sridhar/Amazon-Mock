import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amzn-mock.cloudfunctions.net/api",
  // "http://localhost:5001/amzn-mock/us-central1/api",
});

export default instance;
