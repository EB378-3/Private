"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Hero from "@components/Front/Hero";
import React from "react";
import { motion } from "framer-motion";
import Contact from "@components/Front/Contact";
import AircraftOptions from "@components/Front/AircraftOptions";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import PlaneLightUp from "@components/Front/PlaneLightUp";

const Main = () => {
  const t = useTranslations("HomePage");
  const theme = useTheme();
  const locale = useLocale();

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // Data for the information cards.
  // Here, we use secondary palette colours for a distinct look.
  const cardsData = [
    {
      title: t("Flexible Booking"),
      detail: t("Choose rental times that fit your schedule"),
      gradient: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
    },
    {
      title: t("Cost-Effective Pricing"),
      detail: t("Enjoy premium services at affordable rates"),
      gradient: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
    },
    {
      title: t("Beautiful Destinations"),
      detail: t("Fly to stunning locations around Southern Finland"),
      gradient: `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        color: theme.palette.text.primary,
        overflow: "hidden",
      }}
    >
      <Box
        component="main"
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.default,
          position: "relative",
        }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.div>

        {/* Problem-Solution Section */}
        <Container sx={{ mt: 8, textAlign: "center", px: { xs: 2, sm: 3, lg: 6 } }}>
          <motion.div initial="hidden" whileInView="visible" variants={slideInRight}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4, }}>
              {t("Affordable Aircraft Rentals")}<br />{/*New line*/}
              <Box
                component="span"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  px: 2,
                  py: 1,
                  color: "#fff",
                  borderRadius: 2,
                  ml: 2,
                  boxShadow: "0 2px 4px rgba(255, 255, 255, 0.5)",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {t("In Southern Finland")}
              </Box>
            </Typography>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible">
            <Grid container spacing={4} justifyContent="center">
              {cardsData.map((item, index) => (
                <Grid item key={index} xs={12} md={4}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                    }}
                    style={{
                      background: item.gradient,
                      padding: theme.spacing(2),
                      borderRadius: theme.shape.borderRadius,
                      boxShadow: theme.shadows[4],
                      maxWidth: 320,
                      margin: "0 auto",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.secondary.contrastText,
                        fontWeight: "bold",
                        mb: 1,
                        fontSize: "1rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.grey[100], fontSize: "0.875rem" }}
                    >
                      {item.detail}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* Call-to-Action */}
        <motion.div initial="hidden" whileInView="visible" variants={slideInRight}>
          <Container sx={{ my: 6, textAlign: "center", px: { xs: 2, sm: 3, lg: 6 } }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1, fontSize: "1.25rem" }}>
              {t("Start Your Adventure Today")}
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, fontSize: "1rem" }}>
              {t("Discover the freedom of flight")}
            </Typography>
            <Link href={`/${locale}/book`} passHref>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    px: 3,
                    py: 1,
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    color: theme.palette.common.white,
                    fontWeight: "bold",
                    borderRadius: 50,
                    boxShadow: 2,
                    textTransform: "none",
                  }}
                >
                  {t("Book Now")}
                </Button>
              </motion.div>
            </Link>
          </Container>
        </motion.div>



        <PlaneLightUp/>

        {/* Testimonials Section */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <AircraftOptions />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Main;
