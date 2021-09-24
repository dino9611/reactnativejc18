import axios from 'axios';
import {API_URL} from './index';

export const axiosInstance = axios.create({baseURL: API_URL});
