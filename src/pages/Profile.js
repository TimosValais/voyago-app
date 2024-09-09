import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  CircularProgress,
  Alert,
} from "@mui/material";
import AppButton from "../components/AppButton";
import AppTextField from "../components/AppTextField";
import { useDefaultTypographySx } from "../styles/defaultStyles";
import { IoPencil, IoSave, IoCamera } from "react-icons/io5";
import {
  getUserProfile,
  updateUserProfile,
  updateProfilePicture,
  getFile,
} from "../api/apiService";
import { getUserId } from "../utils/userUtils";
import defaultProfileImage from "../images/default/default-profile.png";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profilePictureUrl: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [imageSource, setImageSource] = useState(defaultProfileImage);
  const defaultTypographySx = useDefaultTypographySx();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const storedUserId = await getUserId();
        setUserId(storedUserId);
        const profileData = await getUserProfile(storedUserId);
        setProfile(profileData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch profile data.");
        setLoading(false);
        setShowError(true);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (profile.profilePictureUrl) {
      setImageSource(getFile(profile.profilePictureUrl));
    } else {
      setImageSource(defaultProfileImage);
    }
  }, [profile.profilePictureUrl]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = async () => {
    try {
      await updateUserProfile(userId, {
        name: profile.name,
        email: profile.email,
      });
      const updatedProfile = await getUserProfile(userId);
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      if (error.response?.status === 409) {
        setError("Conflict detected. Data will be refreshed.");
        try {
          const updatedProfile = await getUserProfile(userId);
          setProfile(updatedProfile);
        } catch (refreshError) {
          setError("Failed to refresh data after conflict.");
        }
      } else if (error.response?.status === 500) {
        alert(
          `Server error: ${error.response.data.message || "Unknown error."}`
        );
      } else {
        setError("Failed to save profile changes.");
      }
      setShowError(true);
    }
  };

  const handleProfilePictureChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        await updateProfilePicture(userId, file);
        retryFetchUserProfile();
      } catch {
        setError("Failed to upload profile picture.");
        setShowError(true);
      }
    }

    event.target.value = null;
  };

  const retryFetchUserProfile = async (attempts = 3, delay = 3000) => {
    for (let i = 0; i < attempts; i++) {
      try {
        const updatedProfile = await getUserProfile(userId);
        if (updatedProfile.profilePictureUrl !== profile.profilePictureUrl) {
          setProfile((prev) => ({
            ...prev,
            profilePictureUrl: updatedProfile.profilePictureUrl,
          }));
          break;
        }
      } catch {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      {showError && error && (
        <Alert
          severity="error"
          onClose={() => setShowError(false)}
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          padding: 2,
        }}
      >
        <Typography variant="h6" sx={{ mr: 2 }}>
          {profile.name}
        </Typography>
        <img
          src={imageSource}
          alt="Profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: 10,
          }}
        />
      </Box>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <label htmlFor="profile-picture-upload">
            <input
              id="profile-picture-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleProfilePictureChange}
              disabled={!isEditing}
            />
            <IconButton color="primary" component="span" disabled={!isEditing}>
              <IoCamera size={24} />
            </IconButton>
          </label>
          <Typography variant="h6" sx={defaultTypographySx}>
            Username
          </Typography>
          <AppTextField
            value={profile.name}
            onChange={(e) =>
              setProfile((prev) => ({ ...prev, name: e.target.value }))
            }
            disabled={!isEditing}
            fullWidth
          />
          <Typography variant="h6" sx={defaultTypographySx}>
            Email
          </Typography>
          <AppTextField
            value={profile.email}
            onChange={(e) =>
              setProfile((prev) => ({ ...prev, email: e.target.value }))
            }
            disabled={!isEditing}
            fullWidth
          />
          {isEditing ? (
            <AppButton
              text="Save"
              onClick={handleSaveChanges}
              startIcon={<IoSave />}
              color="buttons.accept"
              typographySx={{ color: "buttonsText.accept" }}
            />
          ) : (
            <AppButton
              text="Edit"
              onClick={handleEditToggle}
              startIcon={<IoPencil />}
              color="buttons.accept"
              typographySx={{ color: "buttonsText.accept" }}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
