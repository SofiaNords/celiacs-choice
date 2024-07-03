import axios from "axios";

axios.defaults.baseURL = 'https://celiacs-api-bf52b941b62a.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();