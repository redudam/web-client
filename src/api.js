import axios from 'axios';

const baseURL = 'http://localhost:3004';

export const getTasks = () => {
    return axios.get(`${baseURL}/tasks`).then((response) => {
        return response.data
    }); 
}