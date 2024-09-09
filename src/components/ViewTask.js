import React, { useState, useEffect } from "react";
import {
  Chip,
  Typography,
  Box,
  Paper,
  Modal,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IoAdd } from "react-icons/io5";
import AppButton from "./AppButton";
import { getUserId } from "../utils/userUtils";
import { getAllUsers, addUserToTask } from "../api/apiService";

const Task = ({ task, onClick }) => {
  const theme = useTheme();
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const userId = await getUserId();
      const allUsers = await getAllUsers();
      setUsers(allUsers.filter((user) => user.id !== userId));
    };

    fetchUsers();
  }, []);

  const handleAddUserToTask = async () => {
    try {
      await addUserToTask(task.id, selectedUser, task.type);
      setIsAddUserModalOpen(false);
    } catch (error) {
      console.error("Failed to add user to task:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 0:
      case "Canceled":
        return theme.palette.status?.canceled;
      case 1:
      case "Pending":
        return theme.palette.status?.pending;
      case 2:
      case "Started":
        return theme.palette.status?.started;
      case 3:
      case "Completed":
        return theme.palette.status?.completed;
      default:
        return theme.palette.text?.primary;
    }
  };

  const getTaskTypeColor = (type) => {
    switch (type) {
      case "GeneralBooking":
      case 0:
        return theme.palette.taskType?.generalBooking;
      case "HotelBooking":
      case 1:
        return theme.palette.taskType?.hotelBooking;
      case "TicketBooking":
      case 2:
        return theme.palette.taskType?.ticketBooking;
      case "Planning":
      case 3:
        return theme.palette.taskType?.planning;
      case "Other":
      case 4:
        return theme.palette.taskType?.other;
      default:
        return theme.palette.text?.primary;
    }
  };

  const getTaskTypeName = (type) => {
    switch (type) {
      case 0:
        return "General Booking";
      case 1:
        return "Hotel Booking";
      case 2:
        return "Ticket Booking";
      case 3:
        return "Planning";
      case 4:
        return "Other";
      case "GeneralBooking":
        return "General Booking";
      case "HotelBooking":
        return "Hotel Booking";
      case "TicketBooking":
        return "Ticket Booking";
      case "Planning":
        return "Planning";
      case "Other":
        return "Other";
      default:
        return "Unknown Type";
    }
  };

  const renderTaskDetails = (task) => {
    switch (task?.type) {
      case "TicketBooking":
      case 2:
        return (
          <>
            <Typography variant="body2">
              <strong>Departure Date:</strong>{" "}
              {task?.departureDate
                ? new Date(task?.departureDate).toLocaleString()
                : "Not provided"}
            </Typography>
            <Typography variant="body2">
              <strong>Return Date:</strong>{" "}
              {task?.returnDate
                ? new Date(task?.returnDate).toLocaleString()
                : "Not provided"}
            </Typography>
          </>
        );

      case "GeneralBooking":
      case 0:
        return (
          <>
            <Typography variant="body2">
              <strong>Notes:</strong>{" "}
              {task?.notes?.length > 0
                ? task?.notes?.join(", ")
                : "No notes provided"}
            </Typography>
          </>
        );

      case "HotelBooking":
      case 1:
        return (
          <>
            <Typography variant="body2">
              <strong>Check-In Date:</strong>{" "}
              {task?.checkInDate
                ? new Date(task?.checkInDate).toLocaleString()
                : "Not provided"}
            </Typography>
            <Typography variant="body2">
              <strong>Check-Out Date:</strong>{" "}
              {task?.checkOutDate
                ? new Date(task?.checkOutDate).toLocaleString()
                : "Not provided"}
            </Typography>
            <Typography variant="body2">
              <strong>Contact No:</strong> {task?.contactNo || "Not provided"}
            </Typography>
          </>
        );

      case "Planning":
      case 3:
        return (
          <>
            <Typography variant="body2">
              <strong>Steps:</strong>{" "}
              {task?.steps?.length > 0
                ? task?.steps?.join(", ")
                : "No steps provided"}
            </Typography>
          </>
        );

      case "Other":
      case 4:
        return (
          <>
            <Typography variant="body2">
              <strong>Description:</strong>{" "}
              {task?.description || "No description"}
            </Typography>
          </>
        );

      default:
        return null;
    }
  };

  const renderComponent = () => (
    <Paper
      sx={{
        padding: 2,
        borderRadius: 1,
        boxShadow: 1,
        backgroundColor: theme.palette.background?.paper,
        border: `1px solid ${theme.palette.border?.initial}`,
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: 3,
        },
        position: "relative",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          color: theme.palette.text?.primary,
          textAlign: "center",
        }}
      >
        {task?.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <Chip
          label={getTaskTypeName(task?.type)}
          sx={{
            backgroundColor: getTaskTypeColor(task?.type),
            color: theme.palette.background?.paper,
            "& .MuiChip-label": {
              color: theme.palette.background?.paper,
            },
          }}
        />
        <Chip
          label={
            typeof task?.status === "number"
              ? StatusEnum[task?.status]
              : task?.status
          }
          sx={{
            backgroundColor: getStatusColor(task?.status),
            color: theme.palette.background?.paper,
            "& .MuiChip-label": {
              color: theme.palette.background?.paper,
            },
          }}
        />
      </Box>
      <Box sx={{ mt: 2 }}>{renderTaskDetails(task)}</Box>
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

      <Modal
        open={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        onClick={(e) => e.stopPropagation()}
      >
        <Box sx={modalStyle} onClick={(e) => e.stopPropagation()}>
          <Typography variant="h6">Add User to Task</Typography>
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
                await handleAddUserToTask();
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

  return renderComponent();
};

const StatusEnum = {
  0: "Canceled",
  1: "Pending",
  2: "Started",
  3: "Completed",
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

export default Task;
