"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// MUI components and hooks
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

// MUI icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function AircraftOptions() {
  const t = useTranslations("AircraftOptions");
  const theme = useTheme();

  const aircrafts = [
    {
      id: 1,
      name: "Cessna 172",
      description: t("aircraft1Description"),
      image: "/aircraft1.png",
    },
    {
      id: 2,
      name: "Piper PA-28",
      description: t("aircraft2Description"),
      image: "/aircraft2.png",
    },
    {
      id: 3,
      name: "Diamond DA40",
      description: t("aircraft3Description"),
      image: "/aircraft3.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % aircrafts.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + aircrafts.length) % aircrafts.length);

  return (
    <Box
      component="section"
      id="recource-selction"
      sx={{
        py: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h5" align="center" mb={3} sx={{ fontWeight: 600 }}>
        {t("title")}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "80%" },
          mx: "auto",
          overflow: "hidden",
          borderRadius: theme.shape.borderRadius,
        }}
      >
        {/* Aircraft Slides */}
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {aircrafts.map((aircraft) => (
            <Box
              key={aircraft.id}
              sx={{
                minWidth: "100%",
                textAlign: "center",
                px: { xs: 1, sm: 2 },
                py: 2,
              }}
            >
              <Image
                src={aircraft.image}
                alt={aircraft.name}
                width={300}
                height={200}
                style={{
                  margin: "0 auto",
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[3],
                  objectFit: "cover",
                }}
              />
              <Typography variant="h6" mt={1} sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                {aircraft.name}
              </Typography>
              <Typography
                variant="body2"
                mt={0.5}
                sx={{ color: theme.palette.text.secondary, fontSize: "0.875rem" }}
              >
                {aircraft.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          aria-label="Previous Slide"
          sx={{
            position: "absolute",
            left: theme.spacing(1),
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
            p: 0.5,
          }}
        >
          <ChevronLeftIcon fontSize="medium" />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          aria-label="Next Slide"
          sx={{
            position: "absolute",
            right: theme.spacing(1),
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
            p: 0.5,
          }}
        >
          <ChevronRightIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
}
