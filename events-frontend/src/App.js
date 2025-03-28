import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import UserLogin from "./Components/UserLogin";
import AdminLogin from "./Components/AdminLogin";
import UserRegistration from "./Components/UserRegistration";
import EventList from "./Components/EventsList";
import EventDetails from "./Components/EventDetails";  // Import Event Details Page
import CreateEvent from './Components/CreateEvent';

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/events/:city" element={<EventList />} />
          <Route path="/eventDetails/:id" element={<EventDetails />} />  
          <Route path="/admin/create-event/:city" element={<CreateEvent />} />
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
