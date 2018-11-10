import axios from 'axios';

// const baseURL = 'http://95.213.28.116:3000';
const baseURL = 'http://127.0.0.1:3000';

export const getTasks = () => {
    return axios.get(`${baseURL}/v1/tasks`).then((response) => {
        return response.data
    }); 
}

export const getTaskById = (id) => {
    return axios.get(`${baseURL}/v1/tasks/${id}`).then(response => {
        return response.data;
    });
}

export const getCurrentUser = () => {
    return Promise.resolve(() => {

    });
}

export const login = () => {
    
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