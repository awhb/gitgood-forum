import axios from 'redaxios';

// TODO: Update for production
const API_URL = 'gitgood-backend.onrender.com';

export const registerUser = (username: string, password: string) => {
    return axios.post(`${API_URL}/register`, { username, password });
};

export const loginUser = (username: string, password: string) => {
    return axios.post(`${API_URL}/login`, { username, password });
};

export const getThreads = () => {
    return axios.get(`${API_URL}/threads`);
};

export const getThread = (id: string) => {
    return axios.get(`${API_URL}/threads/${id}`);
}

export const createThread = (title: string, content: string) => {
    return axios.post(`${API_URL}/threads`, { title, content });
}

export const createComment = (threadId: string, content: string) => {
    return axios.post(`${API_URL}/threads/${threadId}/comments`, { content });
}

export const getComments = (threadId: string) => {
    return axios.get(`${API_URL}/threads/${threadId}/comments`);
}

export const getComment = (threadId: string, commentId: string) => {
    return axios.get(`${API_URL}/threads/${threadId}/comments/${commentId}`);
}
