"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  CircularProgress,
  Slide,
  Fade,
  Grow,
} from "@mui/material";
import { Phone, Email, Business } from "@mui/icons-material";
import { useTranslate } from "@refinedev/core";


const Contact = () => {
  const translate = useTranslate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        px: 4,
        background: "linear-gradient(to bottom, #001f3f, #007bff)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Paper 
            elevation={6} 
            sx={{ 
                p: 4, 
                borderRadius: 3, 
                backgroundColor: "white", 
                border: "2px solid black" // Black border for the form
            }}
            >
            <Typography variant="h4" fontWeight={700} color="black" textAlign="center" mb={3}>
                {translate("contact.title")}
            </Typography>
            <form onSubmit={handleSubmit}>
                <Fade in={true} timeout={1000}>
                <TextField
                    label={translate("contact.name")}
                    name="name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                    backgroundColor: "#f5f5f5", // Light gray background
                    border: "1px solid black", // Black border
                    borderRadius: 1,
                    input: { color: "black" }, // Black text
                    label: { color: "black" }, // Black label text
                    }}
                />
                </Fade>
                <Fade in={true} timeout={1200}>
                <TextField
                    label={translate("contact.email")}
                    name="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                    backgroundColor: "#f5f5f5",
                    border: "1px solid black",
                    borderRadius: 1,
                    input: { color: "black" },
                    label: { color: "black" },
                    }}
                />
                </Fade>
                <Fade in={true} timeout={1400}>
                <TextField
                    label={translate("contact.reason")}
                    name="reason"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    sx={{
                    backgroundColor: "#f5f5f5",
                    border: "1px solid black",
                    borderRadius: 1,
                    input: { color: "black" },
                    label: { color: "black" },
                    }}
                />
                </Fade>
                <Grow in={true} timeout={1500}>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                    mt: 3,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                    "&:hover": { background: "linear-gradient(45deg, #ff4b2b, #ff416c)" },
                    }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : translate("contact.send")}
                </Button>
                </Grow>
            </form>
            </Paper>
        </Slide>
        </Grid>
        {/* Contact Information */}
        <Grid item xs={12} md={6}>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Box>
                <Typography variant="h4" fontWeight={700} mb={3} color="yellow">
                    {translate("contact.info")}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Grow in={true} timeout={1000}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Phone fontSize="large" sx={{ color: "yellow" }} />
                        <Typography variant="body1">
                        <a href="tel:+358442413840" style={{ color: "white", textDecoration: "none" }}>
                            +358 44 2413 840
                        </a>
                        </Typography>
                    </Box>
                    </Grow>
                    <Grow in={true} timeout={1200}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Email fontSize="large" sx={{ color: "yellow" }} />
                        <Typography variant="body1">
                        <a href="mailto:air.rentals@gmail.com" style={{ color: "white", textDecoration: "none" }}>
                            air.rentals@gmail.com
                        </a>
                        </Typography>
                    </Box>
                    </Grow>
                    <Grow in={true} timeout={1400}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Business fontSize="large" sx={{ color: "yellow" }} />
                        <Typography variant="body1">Wing Aviators</Typography>
                    </Box>
                    </Grow>
                </Box>
                </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
