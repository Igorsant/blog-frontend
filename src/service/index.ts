import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  console.log(email, password);
};

export const signUp = async (
  username: string,
  email: string,
  password: string
): Promise<void> => {
  return instance.post("/signup", {
    username,
    email,
    password,
  });
};
