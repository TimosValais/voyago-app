import axios from "axios";

// Create Axios instance for authentication API
const authApiClient = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Handle errors specifically for auth API
const handleAuthError = (error) => {
  if (error.response) {
    console.error("Auth API Error:", error.response);
  } else if (error.request) {
    console.error("Auth API Request Error:", error.request);
  } else {
    console.error("Auth API Error Message:", error.message);
  }
  return Promise.reject(error);
};

// Auth API Calls
export const loginUser = async (emailOrUsername, password) => {
  try {
    const response = await authApiClient.post("/auth/login", {
      emailOrUsername,
      password,
    });
    return response.data;
  } catch (error) {
    return handleAuthError(error);
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await authApiClient.post("/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return handleAuthError(error);
  }
};
