import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Alert, Grid } from "@mui/material";
import MuiTypography from "../components/MuiTypography";
import Task from "../components/ViewTask";
import { getTasksByTrip } from "../api/apiService";
import AppButton from "../components/AppButton";
import { IoAdd } from "react-icons/io5";
import { useParams } from "react-router-dom";
import CreateTaskModal from "../components/CreateTaskModal";
import UpdateTaskModal from "../components/UpdateTaskModal";

const TasksPage = () => {
  const { tripId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // State to control create modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to control edit modal
  const [selectedTask, setSelectedTask] = useState(null); // State to hold the selected task for editing

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const tasksData = await getTasksByTrip(tripId);
        console.log("Original task data:", tasksData);

        const allTasks = Object.values(tasksData).flat();
        console.log("Flattened tasks:", allTasks);
        setTasks(allTasks);
      } catch (error) {
        setError("Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [tripId]);

  const handleSave = async () => {
    const tasksData = await getTasksByTrip(tripId);
    setTasks(Object.values(tasksData).flat());
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
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
      <MuiTypography variant="h4" text="Tasks for Trip" sx={{ mb: 3 }} />
      <AppButton
        onClick={() => setIsCreateModalOpen(true)}
        variant="contained"
        color="secondary"
        text="Add Task"
        typographySx={{ color: "buttonsText.accept" }}
        startIcon={<IoAdd />}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          borderRadius: "12px",
          padding: "8px 16px",
          display: "flex",
          backgroundColor: "secondary.main",
          alignItems: "center",
          gap: 1,
        }}
      />
      <CreateTaskModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        tripId={tripId}
        onSave={handleSave}
      />
      <UpdateTaskModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        tripId={tripId}
        task={selectedTask}
        onSave={handleSave}
      />
      {tasks.length > 0 ? (
        <Grid container spacing={3}>
          {tasks.map((task) => (
            <Grid item xs={12} key={task.id}>
              <Task task={task} onClick={() => handleEditTask(task)} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <MuiTypography variant="body1" text="No tasks found." sx={{ mt: 2 }} />
      )}
    </Box>
  );
};

export default TasksPage;
