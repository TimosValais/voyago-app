import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { createTrip, updateTrip } from "../api/apiService";
import AppButton from "./AppButton";
import MuiTypography from "./MuiTypography";
import { useDefaultTypographySx } from "../styles/defaultStyles";

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

const TripModal = ({ open, onClose, trip, isEditMode, onSave }) => {
  const defaultTypographySx = useDefaultTypographySx();
  const [name, setName] = useState("");
  const [budget, setBudget] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripStatus, setTripStatus] = useState(0);

  useEffect(() => {
    if (trip) {
      setName(trip.name || "");
      setBudget(trip.budget || 0);
      setFrom(
        trip.from ? new Date(trip.from).toISOString().substring(0, 16) : ""
      );
      setTo(trip.to ? new Date(trip.to).toISOString().substring(0, 16) : "");
      setTripStatus(trip.tripStatus || 0);
    }
  }, [trip]);

  const handleSave = async () => {
    try {
      if (isEditMode) {
        // Update trip
        const updateRequest = {
          name: name,
          tripStatus: tripStatus,
          budget: budget,
          from: new Date(from),
          to: new Date(to),
          tripUsers: trip.tripUsers,
        };
        await updateTrip(trip.id, updateRequest);
      } else {
        // Create new trip
        const createRequest = {
          name: name,
          budget: budget,
          from: new Date(from),
          to: new Date(to),
        };
        await createTrip(createRequest);
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Failed to save the trip:", error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <MuiTypography
          variant="h6"
          text={isEditMode ? "Edit Trip" : "Create Trip"}
          sx={defaultTypographySx}
        />
        <TextField
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ my: 2 }}
        />
        <TextField
          label="Budget"
          type="number"
          fullWidth
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          sx={{ my: 2 }}
        />
        <TextField
          label="From"
          type="datetime-local"
          fullWidth
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="To"
          type="datetime-local"
          fullWidth
          value={to}
          onChange={(e) => setTo(e.target.value)}
          sx={{ my: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        {isEditMode && (
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={tripStatus}
              onChange={(e) => setTripStatus(e.target.value)}
            >
              <MenuItem value={0}>Pending</MenuItem>
              <MenuItem value={1}>OnGoing</MenuItem>
              <MenuItem value={2}>Completed</MenuItem>
            </Select>
          </FormControl>
        )}
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

export default TripModal;
