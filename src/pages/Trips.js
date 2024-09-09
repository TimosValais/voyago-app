import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Alert, Grid } from "@mui/material";
import MuiTypography from "../components/MuiTypography";
import ViewTrip from "../components/ViewTrip";
import { IoAdd } from "react-icons/io5";
import { getUserTrips } from "../api/apiService";
import AppButton from "../components/AppButton";
import TripModal from "../components/TripModal";
import { getUserId } from "../utils/userUtils";

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const userId = await getUserId();
        const tripsData = await getUserTrips(userId);

        setTrips(tripsData);
      } catch (error) {
        setError("Failed to load trips.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const handleCreateTrip = () => {
    setSelectedTrip(null);
    setIsCreateModalOpen(true);
  };

  const handleEditTrip = (trip) => {
    setSelectedTrip(trip);
    setIsEditModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const userId = await getUserId();
      const tripsData = await getUserTrips(userId);
      setTrips(tripsData);
    } catch (error) {
      console.error("Failed to fetch updated trips:", error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ marginTop: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ padding: 3, position: "relative" }}>
      <MuiTypography variant="h4" text="Your Trips" sx={{ mb: 3 }} />
      <AppButton
        onClick={handleCreateTrip}
        variant="contained"
        color="secondary"
        text="Add Trip"
        startIcon={<IoAdd />}
        typographySx={{ color: "buttonsText.accept" }}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          borderRadius: "12px",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: 1,
          backgroundColor: "secondary.main",
          "&:hover": {
            backgroundColor: "#83A48F",
          },
        }}
      />
      <TripModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleSave}
      />
      <TripModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        trip={selectedTrip}
        isEditMode
        onSave={handleSave}
      />
      {trips.length > 0 ? (
        <Grid container spacing={3}>
          {trips.map((trip) => (
            <Grid item xs={12} key={trip.id}>
              <ViewTrip trip={trip} onClick={() => handleEditTrip(trip)} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <MuiTypography variant="body1" text="No trips found." sx={{ mt: 2 }} />
      )}
    </Box>
  );
};

export default Trips;
