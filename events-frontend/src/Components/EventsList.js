import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function EventList() {
    const { city } = useParams();  // Get city from URL
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await fetch(`http://localhost:5000/events/events/${city}`);
                const result = await response.json();

                if (!response.ok || result.status !== 1) {
                    throw new Error(result.message || "Failed to fetch events.");
                }

                setEvents(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
        
    }, [city]);
    
    return (
        <Container maxWidth="md">
            <Typography variant="h4" sx={{ textAlign: "center", mt: 3, fontWeight: "bold" }}>
                Events in {city}
            </Typography>

            {loading ? (
                <Typography sx={{ textAlign: "center", mt: 3 }}>Loading events...</Typography>
            ) : error ? (
                <Typography sx={{ textAlign: "center", mt: 3, color: "red" }}>{error}</Typography>
            ) : (
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {events.length > 0 ? (
                        events.map((event) => (
                            <Grid item xs={12} sm={6} key={event.id}>
                                <Card
                                    elevation={3}
                                    sx={{ cursor: "pointer", transition: "0.3s", "&:hover": { boxShadow: 6 } }}
                                    onClick={() => navigate(`/eventDetails/${event.id}`)}
                                >
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="bold">{event.event_name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Date: {new Date(event.date).toLocaleDateString()} | Time: {event.time}
                                        </Typography>
                                        <Typography variant="body2">Duration: {event.duration}</Typography>
                                        <Typography variant="body2" fontWeight="bold">📍 {event.address}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography sx={{ mt: 3, textAlign: "center", width: "100%" }}>
                            No events found for {city}.
                        </Typography>
                    )}
                </Grid>
            )}
        </Container>
    );
}
