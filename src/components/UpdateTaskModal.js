// UpdateTaskModal.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  TextField,
  IconButton,
} from "@mui/material";
import { IoAdd } from "react-icons/io5";
import AppButton from "./AppButton";
import MuiTypography from "./MuiTypography";
import { useDefaultTypographySx } from "../styles/defaultStyles";
import { updateTask } from "../api/apiService";

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

const UpdateTaskModal = ({ open, onClose, tripId, task, onSave }) => {
  const defaultTypographySx = useDefaultTypographySx();
  const [taskData, setTaskData] = useState({}); // State to hold task data
  const [notes, setNotes] = useState([""]); // State for GeneralBooking notes
  const [steps, setSteps] = useState([""]); // State for Planning steps

  // Populate task data when the modal opens or the task changes
  useEffect(() => {
    if (task) {
      setTaskData({
        ...task,
        taskType: task.type,
      });
      setNotes(task.notes || [""]);
      setSteps(task.steps || [""]);
    }
  }, [task]);

  const handleSave = async () => {
    try {
      await updateTask(tripId, taskData);
      onSave();
      onClose();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  // Render input fields based on task type
  const renderTaskFields = () => {
    switch (taskData.taskType) {
      case "TicketBooking":
      case 2:
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
      case 0:
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
      case 1:
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
      case 3:
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
      case "Other":
      case 4:
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
          text="Update Task"
          sx={defaultTypographySx}
        />
        {renderTaskFields()}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <AppButton
            text="Cancel"
            onClick={onClose}
            color="buttons.danger"
            typographySx={{ color: "buttonsText.danger" }}
          />
          <AppButton
            text="Update"
            onClick={handleSave}
            color="buttons.accept"
            typographySx={{ color: "buttonsText.accept" }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateTaskModal;
