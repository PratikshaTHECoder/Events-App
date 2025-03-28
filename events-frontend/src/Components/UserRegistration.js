import React, { useState } from "react";
import { TextField, Button, Stack, Paper, Typography, Container, FormControl, InputLabel, Select, MenuItem, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material"; 
import { useNavigate } from "react-router-dom"; 

export default function UserRegistration() {
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",  
        date_of_birth: "", 
        password: "",
        state: "",
        city: "",
        district: ""
    });

    const states = ["Maharashtra"];
    const cities = ["Pune", "Mumbai"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.phone_number.trim() !== "" &&
        formData.date_of_birth.trim() !== "" &&
        formData.password.trim() !== "" &&
        formData.state !== "" &&  
        formData.city !== ""; 

    const handleRegister = async () => {
        console.log("User Data Before Sending:", formData);
        
        try {
            const response = await fetch("http://localhost:5000/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)  
            });

            const data = await response.json();
            console.log("Response Data:", data);

            if (!response.ok) {
                alert("Registration failed.");
            } else {
                alert("Registration Successful! Redirecting to Login...");
                navigate("/"); 
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container maxWidth="sm">
            <Stack spacing={3} sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}>
                <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, width: "100%", textAlign: "center" }}>
                    
                    {/* Back Button Inside the Form */}
                    <Stack direction="row" alignItems="center">
                        <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
                            <ArrowBack />
                        </IconButton>
                        <Typography variant="h5" sx={{ flexGrow: 1 }}>User Registration</Typography>
                    </Stack>

                    <Stack spacing={2} sx={{ mt: 2 }}>
                        <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
                        <TextField 
                            label="Date of Birth" 
                            name="date_of_birth" 
                            type="date" 
                            value={formData.date_of_birth} 
                            onChange={handleChange} 
                            fullWidth 
                            required 
                            InputLabelProps={{ shrink: true }} 
                        />
                        <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />
                        <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth required />
                        <TextField label="Phone" name="phone_number" type="tel" value={formData.phone_number} onChange={handleChange} fullWidth required />

                        {/* State Dropdown */}
                        <FormControl fullWidth required>
                            <InputLabel>State</InputLabel>
                            <Select name="state" value={formData.state} onChange={handleChange} displayEmpty sx={{ textAlign: "left" }}>
                                <MenuItem value="" disabled></MenuItem>
                                {states.map((state) => (
                                    <MenuItem key={state} value={state}>{state}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* City Dropdown */}
                        <FormControl fullWidth required>
                            <InputLabel>City</InputLabel>
                            <Select name="city" value={formData.city} onChange={handleChange} displayEmpty sx={{ textAlign: "left" }}>
                                <MenuItem value="" disabled></MenuItem>
                                {cities.map((city) => (
                                    <MenuItem key={city} value={city}>{city}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* District - Optional Field */}
                        <TextField label="District" name="district" value={formData.district} onChange={handleChange} fullWidth />

                        <Button variant="contained" color="primary" onClick={handleRegister} disabled={!isFormValid}>
                            Register
                        </Button>
                    </Stack>
                </Paper>
            </Stack>
        </Container>
    );
}
