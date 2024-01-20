import axios from "axios";
const config = {
    baseURL: 'http://localhost:3000',
    timeout: 3000,
};
export const axios_instance = axios.create(config);