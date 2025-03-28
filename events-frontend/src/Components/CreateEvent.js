import React, { useState } from "react";
import { Container, Typography, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem, Stack, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateEvent() {
    const navigate = useNavigate();
    const { city } = useParams();  
    const [eventData, setEventData] = useState({
        event_name: "",
        date: "",
        time: "",
        duration: "",
        address: "",
        city: city,  
        description: ""
    });

    const durations = ["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours", "6 Hours", "7 Hours", "8 Hours", "9 Hours", "10 Hours", "11 Hours", "12 Hours"];

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:5000/admin/create-event", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(eventData)
            });

            const result = await response.json();
            console.log("API Response:", result);

            if (response.ok) {
                alert("Event Created Successfully!");
                setEventData({
                    event_name: "",
                    date: "",
                    time: "",
                    duration: "",
                    address: "",
                    city: city,  // ✅ Ensure city is retained
                    description: ""
                });
            } else {
                alert(result.message || "Failed to create event.");
            }
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Error creating event. Please try again later.");
        }
    };

    const isFormValid = Object.values(eventData).every(value => value.trim() !== "");

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, position: "relative" }}>
                
                {/* Back Button */}
                <IconButton onClick={() => navigate("/")} sx={{ position: "absolute", top: 10, left: 10 }}>
                    <ArrowBack />
                </IconButton>

                <Typography variant="h5" fontWeight="bold" textAlign="center">Create New Event</Typography>

                <Stack spacing={2} sx={{ mt: 3 }}>
                    <TextField label="Event Name" name="event_name" value={eventData.event_name} onChange={handleChange} fullWidth required />
                    <TextField label="Date" name="date" type="date" value={eventData.date} onChange={handleChange} fullWidth required InputLabelProps={{ shrink: true }} />
                    <TextField label="Time" name="time" type="time" value={eventData.time} onChange={handleChange} fullWidth required InputLabelProps={{ shrink: true }} inputProps={{ step: 1 }} />

                    {/* Duration Dropdown */}
                    <FormControl fullWidth required>
                        <InputLabel>Duration</InputLabel>
                        <Select name="duration" value={eventData.duration} onChange={handleChange}>
                            {durations.map((duration) => (
                                <MenuItem key={duration} value={duration}>{duration}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField label="Address" name="address" value={eventData.address} onChange={handleChange} fullWidth required />

                    {/* City Field (Disabled) */}
                    <TextField label="City" name="city" value={eventData.city} fullWidth disabled required />

                    <TextField label="Description" name="description" value={eventData.description} onChange={handleChange} fullWidth required multiline rows={3} />

                    <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!isFormValid}>
                        Create Event
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
}
