import axios from 'axios';
const token = sessionStorage.getItem('token');

export const api = axios.create({
	baseURL: 'http://localhost:4200',
});

export const apiAdmin = axios.create({
	baseURL: 'http://localhost:4200',
	headers: {Authorization: `Bearer ${token}`}
});