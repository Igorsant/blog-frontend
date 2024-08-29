import axios from 'axios';

// Create a new instance of Axios with custom configuration
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Replace with your API base URL
  timeout: 5000, // Set a timeout value in milliseconds
  headers: {
    'Content-Type': 'application/json', // Set the content type header
    // Add any other headers you need
  },
});

export const login = async (email: string, password: string) => {
  try {
    const response = await instance.post('/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}