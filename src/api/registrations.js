import axios from 'axios';
import parseQueryString from '../utils/parseQueryString';

const base = process.env.API;

export const get = (query = {}) => axios.get(`${base}registrations${parseQueryString(query)}`);

export const put = (id, data) => axios.put(`${base}registrations/${id}`, data);
