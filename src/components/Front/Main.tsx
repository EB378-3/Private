"use client";

import { useTranslations } from "next-intl";
import Hero from "@/components/Front/Hero";
import React from "react";
import { Box, Typography, Button, Container, Grid, Paper, Grow, Fade } from "@mui/material";
import { useNavigation } from "@refinedev/core";
import Contact from "@/components/Front/Contact";
import AircraftOptions from "@/components/Front/AircraftOptions";

const Main = () => {
  const t = useTranslations("HomePage");
  const { push } = useNavigation();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", overflow: "hidden" }}>
      <main className="w-full bg-background relative">
        {/* Hero Section */}
        <Hero locale={""} />

        {/* Problem-Solution Section */}
        <Container maxWidth="lg" sx={{ textAlign: "center", mt: 10 }}>
          <Fade in timeout={1000}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {t("Affordable Aircraft Rentals")}
              <Box
                component="span"
                sx={{
                  backgroundColor: "primary.dark",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  color: "white",
                  display: "inline-block",
                  ml: 2,
                  boxShadow: 3,
                }}
              >
                {t("In Southern Finland")}
              </Box>
            </Typography>
          </Fade>

          {/* Feature Cards */}
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
            {[
              {
                title: t("Flexible Booking"),
                detail: t("Choose rental times that fit your schedule"),
                color: "primary.main",
              },
              {
                title: t("Cost-Effective Pricing"),
                detail: t("Enjoy premium services at affordable rates"),
                color: "secondary.main",
              },
              {
                title: t("Beautiful Destinations"),
                detail: t("Fly to stunning locations around Southern Finland"),
                color: "info.main",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Grow in timeout={1000}>
                  <Paper
                    sx={{
                      p: 4,
                      background: `linear-gradient(to bottom, ${item.color}, #004080)`,
                      color: "white",
                      borderRadius: "16px",
                      boxShadow: 6,
                      textAlign: "center",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 10,
                      },
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {item.detail}
                    </Typography>
                  </Paper>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Call-to-Action */}
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
          <Fade in timeout={1200}>
            <Box>
              <Typography variant="h4" fontWeight="bold">
                {t("Start Your Adventure Today")}
              </Typography>
              <Typography variant="h6" sx={{ my: 2 }}>
                {t("Discover the freedom of flight")}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  px: 4,
                  py: 2,
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  borderRadius: "50px",
                  mt: 2,
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() => push("/book")}
              >
                {t("Book Now")}
              </Button>
            </Box>
          </Fade>
        </Container>

        {/* Aircraft Options Section */}
        <Fade in timeout={1500}>
          <Box sx={{ mt: 12 }}>
            <AircraftOptions />
          </Box>
        </Fade>

        {/* Contact Section */}
        <Fade in timeout={1800}>
          <Box sx={{ mt: 10 }}>
            <Contact />
          </Box>
        </Fade>
      </main>
    </Box>
  );
};

export default Main;
