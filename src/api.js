import axios from 'axios';
import AuthService from './AuthService';

const baseURL = 'http://95.213.28.116:3000';

export const takeTask = (id) => {
    const url = `${baseURL}/v1/tasks/${id}/take`;
    const Auth = new AuthService();
    const reqConfig = {
        method: 'POST'
    }
    return Auth.fetchWithHeaders(url, reqConfig);
}

export const returnTask = (id) => {
    const url = `${baseURL}/v1/tasks/${id}/release`;
    const Auth = new AuthService();
    const reqConfig = {
        method: 'POST'
    }
    return Auth.fetchWithHeaders(url, reqConfig);
}

export const getUserTasks = () => {
    const url = `${baseURL}/v1/users/profile`;
    const Auth = new AuthService();
    const reqConfig = {
        method: 'GET'
    }
    return Auth.fetchWithHeaders(url, reqConfig)
        .then( ({ tasks }) => tasks);
}

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

export const getOrganizations = () => {
    return axios.get(`${baseURL}/v1/organizations`).then(response => {
        return response.data;
    });
}

export const inviteUserToOrganization = (email, organizationId) => {
    const Auth = new AuthService();
    const url = `${baseURL}/v1/invitations`;
    const reqConfig = {
        method: 'POST',
        body: JSON.stringify({
            email, organizationId
        })
    };
    return Auth.fetchWithHeaders(url, reqConfig);
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
