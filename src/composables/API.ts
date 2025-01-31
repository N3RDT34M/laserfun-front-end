import axios from 'axios';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();


const instance = axios.create({
    baseURL: 'http://' + (cookies.get('serverIp') ?? 'localhost')
});

export const serverAPI = instance;