import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

// Регистрация пользователя
export const registerUser = async (userData: { username: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

// Логин пользователя
export const loginUser = async (userData: { email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};