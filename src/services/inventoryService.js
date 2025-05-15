import axios from 'axios';

const API_URL = 'http://localhost:5000/api/inventory';

export const getDrugs = () => axios.get(API_URL);
export const getDrugById = (id) => axios.get(`${API_URL}/${id}`);
export const createDrug = (drug) => axios.post(API_URL, drug);
export const updateDrug = (id, drug) => axios.put(`${API_URL}/${id}`, drug);
export const deleteDrug = (id) => axios.delete(`${API_URL}/${id}`);