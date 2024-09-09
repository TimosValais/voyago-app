import { apiClient, handleError } from "./apiService";

// Auth API Calls
export const loginUser = async (emailOrUsername, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      emailOrUsername,
      password,
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await apiClient.post("/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Trips API Calls
export const getTrips = async () => {
  try {
    const response = await apiClient.get("/trips");
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const createTrip = async (tripData) => {
  try {
    const response = await apiClient.post("/trips", tripData);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const updateTrip = async (tripId, tripData) => {
  try {
    const response = await apiClient.put(`/trips/${tripId}`, tripData);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTrip = async (tripId) => {
  try {
    const response = await apiClient.delete(`/trips/${tripId}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Task API Calls
export const getTasksByTrip = async (tripId) => {
  try {
    const response = await apiClient.get(`/trips/${tripId}/tasks`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const addTaskToTrip = async (tripId, taskData) => {
  try {
    const response = await apiClient.post(`/trips/${tripId}/tasks`, taskData);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const updateTask = async (tripId, taskData) => {
  try {
    const response = await apiClient.put(`/trips/${tripId}/tasks`, taskData);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTask = async (tripId, taskId) => {
  try {
    const response = await apiClient.delete(`/trips/${tripId}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// User Profile API Calls
export const getUserProfile = async (userId) => {
  try {
    const response = await apiClient.get(`/userprofiles/${userId}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const updateUserProfile = async (userId, userProfileData) => {
  try {
    const response = await apiClient.put(
      `/userprofiles/${userId}`,
      userProfileData
    );
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getUserTasks = async (userId) => {
  try {
    const response = await apiClient.get(`/userprofiles/${userId}/tasks`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getUserTrips = async (userId) => {
  try {
    const response = await apiClient.get(`/userprofiles/${userId}/trips`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};
