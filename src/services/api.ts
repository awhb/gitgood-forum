import axios from 'redaxios';

// TODO: Update for production
const API_URL = 'http://localhost:8080';

export const registerUser = (username: string, password: string) => {
    return axios.post(`${API_URL}/register`, { username, password });
};

export const loginUser = (username: string, password: string) => {
    return axios.post(`${API_URL}/login`, { username, password });
};

export const getThreads = () => {
    return axios.get(`${API_URL}/threads`);
};

