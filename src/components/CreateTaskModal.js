// CreateTaskModal.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import { IoAdd } from "react-icons/io5";
import AppButton from "./AppButton";
import MuiTypography from "./MuiTypography";
import { useDefaultTypographySx } from "../styles/defaultStyles";
import { addTaskToTrip } from "../api/apiService";

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

const CreateTaskModal = ({ open, onClose, tripId, onSave }) => {
  const defaultTypographySx = useDefaultTypographySx();
  const [taskType, setTaskType] = useState("Other"); // Default task type
  const [taskData, setTaskData] = useState({}); // State to hold task data
  const [notes, setNotes] = useState([""]); // State for GeneralBooking notes
  const [steps, setSteps] = useState([""]); // State for Planning steps

  // Effect to reset task data when task type changes
  useEffect(() => {
    setTaskData({});
    setNotes([""]);
    setSteps([""]);
  }, [taskType]);

  const handleSave = async () => {
    try {
      const formattedTaskData = { ...taskData, taskType };
      await addTaskToTrip(tripId, formattedTaskData);
      onSave();
      onClose();
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  // Render input fields based on task type
  const renderTaskFields = () => {
    switch (taskType) {
      case "TicketBooking":
        return (
          <>
            <TextField
              label="Name"
              type="text"
              fullWidth
              value={taskData.name || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, name: e.target.value })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Departure Date"
              type="datetime-local"
              fullWidth
              value={taskData.departureDate || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, departureDate: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Return Date"
              type="datetime-local"
              fullWidth
              value={taskData.returnDate || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, returnDate: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Deadline"
              type="datetime-local"
              fullWidth
              value={taskData.deadline || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, deadline: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Money Spent"
              type="number"
              fullWidth
              value={taskData.moneySpent || 0}
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  moneySpent: parseFloat(e.target.value),
                })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Description"
              type="text"
              fullWidth
              value={taskData.description || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
              sx={{ my: 2 }}
            />
          </>
        );
      case "GeneralBooking":
        return (
          <>
            <TextField
              label="Name"
              type="text"
              fullWidth
              value={taskData.name || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, name: e.target.value })
              }
              sx={{ my: 2 }}
            />
            {notes.map((note, index) => (
              <Box key={index} sx={{ display: "flex", gap: 1, my: 1 }}>
                <TextField
                  label={`Note ${index + 1}`}
                  type="text"
                  fullWidth
                  value={note}
                  onChange={(e) => {
                    const updatedNotes = [...notes];
                    updatedNotes[index] = e.target.value;
                    setNotes(updatedNotes);
                    setTaskData({ ...taskData, notes: updatedNotes });
                  }}
                />
                <IconButton
                  onClick={() => setNotes([...notes, ""])}
                  sx={{ height: 40, mt: "auto" }}
                >
                  <IoAdd />
                </IconButton>
              </Box>
            ))}
            <TextField
              label="Deadline"
              type="datetime-local"
              fullWidth
              value={taskData.deadline || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, deadline: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Money Spent"
              type="number"
              fullWidth
              value={taskData.moneySpent || 0}
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  moneySpent: parseFloat(e.target.value),
                })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Description"
              type="text"
              fullWidth
              value={taskData.description || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
              sx={{ my: 2 }}
            />
          </>
        );
      case "HotelBooking":
        return (
          <>
            <TextField
              label="Name"
              type="text"
              fullWidth
              value={taskData.name || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, name: e.target.value })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Check-In Date"
              type="datetime-local"
              fullWidth
              value={taskData.checkInDate || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, checkInDate: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Check-Out Date"
              type="datetime-local"
              fullWidth
              value={taskData.checkOutDate || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, checkOutDate: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Contact No"
              type="text"
              fullWidth
              value={taskData.contactNo || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, contactNo: e.target.value })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Deadline"
              type="datetime-local"
              fullWidth
              value={taskData.deadline || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, deadline: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Money Spent"
              type="number"
              fullWidth
              value={taskData.moneySpent || 0}
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  moneySpent: parseFloat(e.target.value),
                })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Description"
              type="text"
              fullWidth
              value={taskData.description || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
              sx={{ my: 2 }}
            />
          </>
        );
      case "Planning":
        return (
          <>
            <TextField
              label="Name"
              type="text"
              fullWidth
              value={taskData.name || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, name: e.target.value })
              }
              sx={{ my: 2 }}
            />
            {steps.map((step, index) => (
              <Box key={index} sx={{ display: "flex", gap: 1, my: 1 }}>
                <TextField
                  label={`Step ${index + 1}`}
                  type="text"
                  fullWidth
                  value={step}
                  onChange={(e) => {
                    const updatedSteps = [...steps];
                    updatedSteps[index] = e.target.value;
                    setSteps(updatedSteps);
                    setTaskData({ ...taskData, steps: updatedSteps });
                  }}
                />
                <IconButton
                  onClick={() => setSteps([...steps, ""])}
                  sx={{ height: 40, mt: "auto" }}
                >
                  <IoAdd />
                </IconButton>
              </Box>
            ))}
            <TextField
              label="Deadline"
              type="datetime-local"
              fullWidth
              value={taskData.deadline || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, deadline: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Money Spent"
              type="number"
              fullWidth
              value={taskData.moneySpent || 0}
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  moneySpent: parseFloat(e.target.value),
                })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Description"
              type="text"
              fullWidth
              value={taskData.description || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
              sx={{ my: 2 }}
            />
          </>
        );
      default:
        return (
          <>
            <TextField
              label="Name"
              type="text"
              fullWidth
              value={taskData.name || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, name: e.target.value })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Deadline"
              type="datetime-local"
              fullWidth
              value={taskData.deadline || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, deadline: e.target.value })
              }
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Money Spent"
              type="number"
              fullWidth
              value={taskData.moneySpent || 0}
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  moneySpent: parseFloat(e.target.value),
                })
              }
              sx={{ my: 2 }}
            />
            <TextField
              label="Description"
              type="text"
              fullWidth
              value={taskData.description || ""}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
              sx={{ my: 2 }}
            />
          </>
        );
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <MuiTypography
          variant="h6"
          text="Create Task"
          sx={defaultTypographySx}
        />
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel>Task Type</InputLabel>
          <Select
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
          >
            <MenuItem value="GeneralBooking">General Booking</MenuItem>
            <MenuItem value="HotelBooking">Hotel Booking</MenuItem>
            <MenuItem value="TicketBooking">Ticket Booking</MenuItem>
            <MenuItem value="Planning">Planning</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        {renderTaskFields()}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <AppButton
            text="Cancel"
            onClick={onClose}
            color="buttons.danger"
            typographySx={{ color: "buttonsText.danger" }}
          />
          <AppButton
            text="Save"
            onClick={handleSave}
            color="buttons.accept"
            typographySx={{ color: "buttonsText.accept" }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateTaskModal;
