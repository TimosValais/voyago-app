import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Chip,
  Modal,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useDefaultTypographySx } from "../styles/defaultStyles";
import { useTheme } from "@mui/material/styles";
import { IoAdd } from "react-icons/io5";
import { getUserId } from "../utils/userUtils";
import { getAllUsers, addUserToTrip } from "../api/apiService";
import AppButton from "./AppButton";
import { useNavigate } from "react-router-dom";

const ViewTrip = ({ trip, onClick }) => {
  const theme = useTheme();
  const defaultTypographySx = useDefaultTypographySx();
  const navigate = useNavigate();
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedRole, setSelectedRole] = useState(0); // Default to 'Member'

  useEffect(() => {
    const fetchUsers = async () => {
      const userId = await getUserId();
      const allUsers = await getAllUsers();
      setUsers(allUsers.filter((user) => user.id !== userId));
    };

    fetchUsers();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 0:
        return theme.palette.status.pending;
      case 1:
        return theme.palette.status.ongoing;
      case 2:
        return theme.palette.status.completed;
      default:
        return theme.palette.text.primary;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 0:
        return theme.palette.role.member;
      case 1:
        return theme.palette.role.manager;
      case 2:
        return theme.palette.role.admin;
      default:
        return theme.palette.text.primary;
    }
  };

  const handleAddUserToTrip = async () => {
    try {
      await addUserToTrip(trip.id, selectedUser, selectedRole);
      setIsAddUserModalOpen(false);
    } catch (error) {
      console.error("Failed to add user to trip:", error);
    }
  };

  const handleViewTasks = () => {
    navigate(`/tasks/${trip.id}`); // Navigate to the tasks page with tripId
  };

  return (
    <Paper
      sx={{
        padding: 3,
        marginBottom: 2,
        cursor: "pointer",
        position: "relative",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          sx={{ ...defaultTypographySx, textAlign: "center" }}
        >
          {trip.name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Chip
          label={StatusEnum[trip.tripStatus]}
          sx={{
            backgroundColor: getStatusColor(trip.tripStatus),
            color: theme.palette.background.paper,
          }}
        />
        <Chip
          label={RoleEnum[trip.role]}
          sx={{
            backgroundColor: getRoleColor(trip.role),
            color: theme.palette.background.paper,
            marginLeft: "auto",
          }}
        />
      </Box>
      <Typography variant="body2">
        <strong>Budget:</strong> ${trip.budget?.toFixed(2)}
      </Typography>
      <Typography variant="body2">
        <strong>From:</strong> {new Date(trip.from).toLocaleString()}
      </Typography>
      <Typography variant="body2">
        <strong>To:</strong> {new Date(trip.to).toLocaleString()}
      </Typography>
      <Typography variant="body2">
        <strong>Is Over Budget:</strong> {trip.isOverBudget ? "Yes" : "No"}
      </Typography>
      <Typography variant="body2">
        <strong>Users:</strong>{" "}
        {trip.users?.map((user) => (
          <span key={user.id}>
            <br />
            {user.name}
          </span>
        )) || "No users"}
      </Typography>

      <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
        <AppButton
          text="Add User"
          startIcon={<IoAdd />}
          typographySx={{ color: "buttonsText.accept" }}
          onClick={(e) => {
            e.stopPropagation();
            setIsAddUserModalOpen(true);
          }}
          sx={{
            borderRadius: "12px",
            padding: "8px 16px",
            display: "flex",
            backgroundColor: "secondary.main",
            alignItems: "center",
            gap: 1,
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <AppButton
          text="View Tasks"
          onClick={(e) => {
            e.stopPropagation();
            handleViewTasks();
          }}
          typographySx={{ color: "buttonsText.accept" }}
          sx={{
            borderRadius: "12px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "secondary.main",
            color: "buttonsText.primary",
          }}
        />
      </Box>

      <Modal
        open={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        onClick={(e) => e.stopPropagation()}
      >
        <Box sx={modalStyle} onClick={(e) => e.stopPropagation()}>
          <Typography variant="h6" sx={defaultTypographySx}>
            Add User to Trip
          </Typography>
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel>Select User</InputLabel>
            <Select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name || user.email}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel>Select Role</InputLabel>
            <Select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <MenuItem value={0}>Member</MenuItem>
              <MenuItem value={1}>Manager</MenuItem>
              <MenuItem value={2}>Admin</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <AppButton
              text="Cancel"
              onClick={(e) => {
                e.stopPropagation();
                setIsAddUserModalOpen(false);
              }}
              color="buttons.danger"
              typographySx={{ color: "buttonsText.danger" }}
            />
            <AppButton
              text="Add"
              onClick={async (e) => {
                e.stopPropagation();
                await handleAddUserToTrip();
              }}
              color="buttons.accept"
              typographySx={{ color: "buttonsText.accept" }}
              disabled={!selectedUser}
            />
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
};

const StatusEnum = {
  0: "Pending",
  1: "OnGoing",
  2: "Completed",
};

const RoleEnum = {
  0: "Member",
  1: "Manager",
  2: "Admin",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default ViewTrip;
