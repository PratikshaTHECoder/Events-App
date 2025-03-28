import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Paper, Button, TextField, Stack, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function EventDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchEventDetails = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await fetch(`http://localhost:5000/events/eventDetails/${id}`);
                const result = await response.json();

                if (!response.ok || result.status !== 1) {
                    throw new Error(result.message || "Failed to fetch event details.");
                }

                setEvent(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchEventDetails();
        }
    }, [id]);
    console.log("Events", event)
    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    if (loading) {
        return <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>Loading event details...</Typography>;
    }

    if (error) {
        return <Typography variant="h6" sx={{ textAlign: "center", mt: 5, color: "red" }}>{error}</Typography>;
    }

    if (!event) {
        return <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>Event not found.</Typography>;
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, textAlign: "center", position: "relative" }}>
                {/* Back Button Inside Paper */}
                <IconButton onClick={() => navigate(-1)} sx={{ position: "absolute", top: 10, left: 10 }}>
                    <ArrowBack />
                </IconButton>

                <Typography variant="h4" fontWeight="bold">{event.event_name}</Typography>
                <Typography variant="h6" color="textSecondary">
                    {new Date(event.date).toLocaleDateString()} | {event.time}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>Duration: {event.duration}</Typography>
                <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }}>📍 {event.address}</Typography>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>{event.description}</Typography>
            </Paper>

            {/* Comment Section */}
            <Paper elevation={2} sx={{ padding: 3, borderRadius: 2, mt: 4 }}>
                <Typography variant="h6">Comments</Typography>
                
                {/* Comment Input Box */}
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <TextField 
                        fullWidth 
                        label="Add a comment..." 
                        variant="outlined" 
                        value={newComment} 
                        onChange={(e) => setNewComment(e.target.value)} 
                    />
                    <Button variant="contained" onClick={handleAddComment}>Post</Button>
                </Stack>

                {/* Display Comments */}
                {comments.length > 0 ? (
                    <Stack spacing={1} sx={{ mt: 2 }}>
                        {comments.map((comment, index) => (
                            <Paper key={index} elevation={1} sx={{ padding: 2 }}>
                                <Typography variant="body2">💬 {comment}</Typography>
                            </Paper>
                        ))}
                    </Stack>
                ) : (
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        No comments yet. Be the first to comment!
                    </Typography>
                )}
            </Paper>
        </Container>
    );
}
