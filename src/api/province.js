import axios from 'axios';
import API_BASE_URL from '../config';

const summaryAPI = axios.create({
  baseURL: `${API_BASE_URL}/`,
});

export const getprovinces = async () => {
  try {
    const response = await summaryAPI.get('provinces');
    return response.data;
  } catch (error) {
    console.error('Error fetching province:', error);
    throw error;
  }
};



