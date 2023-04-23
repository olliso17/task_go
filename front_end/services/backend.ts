import axios, { AxiosHeaders } from "axios";


// const api = axios.create({ baseURL: "http://localhost:8080"
// });

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: "no-cache",
      Cookies: ""
    },
    
    withCredentials: true,  // <=== add here
   
  })
api.defaults.timeout = 500;
export default api;