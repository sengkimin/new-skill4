import axios from 'axios';
import API_BASE_URL from '../config';

const summaryAPI = axios.create({
  baseURL: `${API_BASE_URL}/`,
});

export const getdistrict = async () => {
  try {
    const response = await summaryAPI.get('districts');
    return response.data;
  } catch (error) {
    console.error('Error fetching district:', error);
    throw error;
  }
};
