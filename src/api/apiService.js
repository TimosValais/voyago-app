import axios from "axios";
// Create Axios instance for application API
const appApiClient = axios.create({
  baseURL: process.env.REACT_APP_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to handle unauthorized errors
const handleUnauthorized = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");
  // The ProtectedRoute component will handle the redirection when authToken is missing
};

// Interceptor to add the auth token if available
appApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling unauthorized errors
appApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      handleUnauthorized();
    }
    return Promise.reject(error);
  }
);

// Function to handle application-specific errors
const handleAppError = (error) => {
  if (error.response) {
    console.error("App API Error:", error.response);
  } else if (error.request) {
    console.error("App API Request Error:", error.request);
  } else {
    console.error("App API Error Message:", error.message);
  }
  return Promise.reject(error);
};

// Trip API Calls
export const getTrips = async () => {
  try {
    const response = await appApiClient.get("/trips");
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const createTrip = async (tripData) => {
  try {
    const response = await appApiClient.post("/trips", tripData);
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const updateTrip = async (tripId, tripData) => {
  try {
    const response = await appApiClient.put(`/trips/${tripId}`, tripData);
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const deleteTrip = async (tripId) => {
  try {
    const response = await appApiClient.delete(`/trips/${tripId}`);
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};
export const addUserToTrip = async (tripId, userId, role) => {
  try {
    await appApiClient.post(`/trips/${tripId}/users/${userId}`, null, {
      params: { role },
    });
  } catch (error) {
    return handleAppError(error);
  }
};
// Task API Calls
export const getTasksByTrip = async (tripId) => {
  try {
    const response = await appApiClient.get(`/trips/${tripId}/tasks`);
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const addTaskToTrip = async (tripId, taskData) => {
  try {
    const response = await appApiClient.post(
      `/trips/${tripId}/tasks`,
      taskData
    );
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const updateTask = async (tripId, taskData) => {
  try {
    const response = await appApiClient.put(`/trips/${tripId}/tasks`, taskData);
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const deleteTask = async (tripId, taskId) => {
  try {
    const response = await appApiClient.delete(
      `/trips/${tripId}/tasks/${taskId}`
    );
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const addUserToTask = async (taskId, userId, taskType) => {
  try {
    const response = await appApiClient.post(
      `/tasks/${taskId}/users/${userId}`,
      null,
      {
        params: { type: taskType },
      }
    );
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const removeUserFromTask = async (taskId, userId, taskType) => {
  try {
    const response = await appApiClient.delete(
      `/tasks/${taskId}/users/${userId}`,
      {
        params: { type: taskType },
      }
    );
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

// User Profile API Calls
export const getUserProfile = async (userId) => {
  try {
    const response = await appApiClient.get(`/userprofiles/${userId}`);
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const updateUserProfile = async (userId, userProfileData) => {
  try {
    // Send the UpdateUserProfileRequest as a JSON payload
    const response = await appApiClient.put(
      `/userprofiles/${userId}`,
      userProfileData
    );

    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const getUserTasks = async (userId) => {
  try {
    const response = await appApiClient.get(`/userprofiles/${userId}/tasks`);
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const getUserTrips = async (userId) => {
  try {
    const response = await appApiClient.get(`/userprofiles/${userId}/trips`);
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await appApiClient.get("/userprofiles");
    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};

// File API Calls
export const getFile = (fileId) => {
  return `${process.env.REACT_APP_APP_API_BASE_URL}/files/${fileId}`;
};

export const updateProfilePicture = async (userId, pictureFile) => {
  try {
    // Create FormData object to send the file
    const formData = new FormData();
    formData.append("picture", pictureFile);

    // Make the request with multipart/form-data content type
    const response = await appApiClient.post(
      `/userprofiles/${userId}/profile-picture`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    return handleAppError(error);
  }
};
