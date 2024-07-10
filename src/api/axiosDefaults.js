import axios from "axios";

// Set the base URL for all Axios requests
axios.defaults.baseURL = 'https://celiacs-api-bf52b941b62a.herokuapp.com/';

// Set the default headers for POST requests
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

// Include credentials (e.g., cookies) in requests
axios.defaults.withCredentials = true;

// Create custom Axios instances
export const axiosReq = axios.create(); // For requests
export const axiosRes = axios.create(); // For responses
