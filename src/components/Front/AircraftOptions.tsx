"use client";

import React, { useState } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useTranslate } from "@refinedev/core";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AircraftOptions() {
  const translate = useTranslate();

  const aircrafts = [
    {
      id: 1,
      name: "Cessna 172",
      description: translate("aircraft.aircraft1Description"),
      image: "/aircraft1.png",
    },
    {
      id: 2,
      name: "Piper PA-28",
      description: translate("aircraft.aircraft2Description"),
      image: "/aircraft2.png",
    },
    {
      id: 3,
      name: "Diamond DA40",
      description: translate("aircraft.aircraft3Description"),
      image: "/aircraft3.png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % aircrafts.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + aircrafts.length) % aircrafts.length);
  };

  return (
    <Box
      id="aircraft-selection"
      sx={{
        py: 10,
        background: "linear-gradient(to bottom,rgb(0, 0, 0), #001f3f)",
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {translate("aircraft.title")}
        </Typography>

        {/* Slider Container (Fixed Height) */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            mx: "auto",
            minHeight: "320px", // FIX: Ensures content doesn't overflow
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%", // FIX: Ensures the content fits
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={aircrafts[current].image}
                alt={aircrafts[current].name}
                width={300}
                height={200}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h5" fontWeight={600}>
                {aircrafts[current].name}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, color: "rgba(255, 255, 255, 0.8)" }}>
                {aircrafts[current].description}
              </Typography>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(227, 227, 227, 0.5)",
              color: "white",
              zIndex: 10,
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            aria-label="Previous Slide"
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(227, 227, 227, 0.5)",
              color: "white",
              zIndex: 10,
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            aria-label="Next Slide"
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
