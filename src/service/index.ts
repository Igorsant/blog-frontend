import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (username: string, password: string) => {
  return instance.post("/login", {
    username,
    password,
  });
};

export const signUp = (
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

export const forgotPassword = (email: string): Promise<void> => {
  return instance.post("/forgotPassword", {
    email,
  });
}

export const resetForgotPassword = (
  username: string,
  confirmationCode: string,
  password: string
): Promise<void> => {
  return instance.post("/confirmForgotPassword", {
    username,
    confirmationCode,
    password,
  });
}

export const confirmCode = (
  username: string,
  confirmationCode: number
): Promise<void> => {
  return instance.post("/confirm", {
    username,
    code: confirmationCode,
  });
}
