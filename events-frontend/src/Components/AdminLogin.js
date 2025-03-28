import React, { useState } from "react";
import { Stack, Paper, Typography, Container, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");  // ✅ State to store error message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Clear error when user types
    };

    const handleLoginClick = async () => {
        setError(""); // Clear previous error before login attempt
        try {
            const response = await fetch("http://localhost:5000/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const loginData = await response.json();
            console.log("Login Response:", loginData);

            if (response.ok) {
                navigate(`/admin/create-event/${loginData.data.city}`); // ✅ Pass city in URL
            } else {
                setError(loginData.message || "Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("Server error. Please try again later.");
        }
    };

    const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

    return (
        <Container maxWidth="sm">
            <Stack spacing={3} sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h4">Admin Login</Typography>

                <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, width: "100%", textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom>Login</Typography>

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

                        {/* Show error below password field */}
                        {error && <Typography color="error" fontSize="14px">{error}</Typography>}

                        <Button variant="contained" color="primary" onClick={handleLoginClick} disabled={!isFormValid}>
                            Login
                        </Button>

                        <Typography variant="body2">
                            <Link to="/" style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
                                Go to User Login
                            </Link>
                        </Typography>
                    </Stack>
                </Paper>
            </Stack>
        </Container>
    );
}
