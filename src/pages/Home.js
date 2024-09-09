import React, { useEffect, useState } from "react";
import { Box, Grid, CircularProgress, Alert } from "@mui/material";
import MuiTypography from "../components/MuiTypography";
import ViewTrip from "../components/ViewTrip";
import ViewTask from "../components/ViewTask";
import { getUserTrips, getUserTasks } from "../api/apiService";
import { getUserId } from "../utils/userUtils";

const Home = () => {
  const [trips, setTrips] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const userId = await getUserId();
        const [tripsData, tasksData] = await Promise.all([
          getUserTrips(userId),
          getUserTasks(userId),
        ]);

        setTrips(tripsData);

        // Flatten the tasks from the response
        const allTasks = Object.values(tasksData).flat();

        setTasks(allTasks);
      } catch (error) {
        setError("Failed to load trips and tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

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
    <Box sx={{ padding: 3 }}>
      <MuiTypography
        variant="h4"
        text="Welcome to your Home Screen"
        sx={{ mb: 3 }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MuiTypography variant="h5" text="Your Trips" sx={{ mb: 2 }} />
          {trips.length > 0 ? (
            trips.map((trip) => <ViewTrip key={trip.Id} trip={trip} />)
          ) : (
            <MuiTypography variant="body1" text="No trips found." />
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <MuiTypography variant="h5" text="Your Tasks" sx={{ mb: 2 }} />
          {tasks.length > 0 ? (
            tasks.map((task) => <ViewTask key={task.Id} task={task} />)
          ) : (
            <MuiTypography variant="body1" text="No tasks found." />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
