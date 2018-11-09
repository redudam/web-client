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