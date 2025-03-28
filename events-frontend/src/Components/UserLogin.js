import React, { useState } from "react";
import { Stack, Paper, Typography, Container, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");  // ✅ Error state for failed login
    const [loading, setLoading] = useState(false); // ✅ Loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLoginClick = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:5000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const loginData = await response.json(); // ✅ Renamed from `data` to `loginData`

            if (!response.ok || loginData.status !== 1) {
                throw new Error(loginData.message || "Login failed.");
            }

            console.log("Login Successful:", loginData);

            // ✅ Redirect user to event listing with their city
            navigate(`/events/${loginData.data.city}`);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

    return (
        <Container maxWidth="sm">
            <Stack spacing={3} sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h4">Events In My City</Typography>

                <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, width: "100%", textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom>User Login</Typography>

                    <Stack spacing={2}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            required
                        />

                        {error && <Typography color="error">{error}</Typography>} {/* ✅ Show error if login fails */}

                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={handleLoginClick} 
                            disabled={!isFormValid || loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>

                        {/* Navigation to Admin Login */}
                        <Typography variant="body2">
                            <Link to="/admin-login" style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
                                Go to Admin Login
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link to="/register" style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
                                Don't have an account? Register Here
                            </Link>
                        </Typography>
                    </Stack>
                </Paper>
            </Stack>
        </Container>
    );
}
