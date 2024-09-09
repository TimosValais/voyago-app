import axios from "axios";

export const fetchUserId = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_APP_API_BASE_URL}/userprofiles/userid`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
    const userId = response.data;
    localStorage.setItem("userId", userId);
    return userId;
  } catch (error) {
    console.error("Failed to fetch user ID:", error);
    throw error;
  }
};

export const getUserId = async () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = await fetchUserId();
  }
  return userId;
};
