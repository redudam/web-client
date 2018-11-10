import axios from 'axios';

const baseURL = 'http://localhost:3004';

export const getTasks = () => {
    return axios.get(`${baseURL}/tasks`).then((response) => {
        return response.data
    }); 
}

export const getTaskById = (id) => {
    return axios.get(`${baseURL}/tasks/${id}`).then(response => {
        return response.data;
    });
}

export const getCurrentUser = () => {
    return Promise.resolve(() => {

    });
}

export const login = () => {
    
}

const makeAuthenticatedRequest = (endpoint, method = 'get', payload = {}) => {
    const accessToken = localStorage.getItem('access-token');
    return makeHttpRequest(endpoint, method, payload, {
        Authorization: `Bearer ${accessToken}`
    });
}

const makeAnonimousRequest = (endpoint, method = 'get', payload = {}) => {
    return makeHttpRequest(endpoint, method, payload);
}

const makeHttpRequest = (endpoint, method = 'get', payload = {}, headers = {}) => {
    return axios.request({
        url: `${baseURL}/${endpoint}`,
        method,
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                ...headers
        }
    });
}