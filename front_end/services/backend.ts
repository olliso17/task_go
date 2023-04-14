import axios from "axios";


// const api = axios.create({ baseURL: "http://localhost:8080"
// });

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: "no-cache",
    },
    withCredentials: true,  // <=== add here
    timeout: 60000
  })

export default api;