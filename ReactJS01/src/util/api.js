import axios from './axios.customize';

export const createUserApi = (name, email, password) => {
    const URL_API = "/v1/api/register";
    const data = {
        name, email, password
    }

    return axios.post(URL_API, data);
}

export const loginApi = (email, password) => {
    const URL_API = "/v1/api/login";
    const data = {
        email, password
    }

    return axios.post(URL_API, data);
}

export const getUserApi = () => {
    const URL_API = "/v1/api/user";
    return axios.get(URL_API);
}

export const fetchPage = ({ category, page, limit }) => {
    const URL_API = "/v1/api/products";
    const data = {
        category, page, limit
    }
    return axios.get(URL_API, { params: data });
}
