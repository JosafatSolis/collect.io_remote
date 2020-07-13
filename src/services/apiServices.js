import axios from 'axios';
import { base_url } from './baseUrl';

export const getFormat = (code) => {
    return axios.get(`${base_url}/formats/${code}`);
}

export const postNewRecord = (format) => {
    return axios.post(`${base_url}/records/${format.format}`, format);
}