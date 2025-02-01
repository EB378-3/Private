"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Typography, Button, Container } from "@mui/material";

const Hero = ({ locale }: { locale: string }) => {
  const t = useTranslations("HomePage");

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textSlideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "50vh", md: "45vh" }, // FIXED: Proper height containment
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Background Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="absolute inset-0"
      >
        {/* Background Image Wrapper with Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Darkened Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Darkened overlay
            zIndex: 1,
          }}
        />
        <Image
          src="/aircraft-hero-background.jpg"
          alt="Hero Background"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(3px)", // Soft blur for readability
            zIndex: -1,
          }}
          />
        </Box>
      </motion.div>

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          px: { xs: 4, md: 8 },
        }}
      >
        {/* Hero Text */}
        <Box sx={{ maxWidth: { xs: "90%", md: "50%" }, textAlign: "left" }}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={textSlideIn}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: "white",
                textShadow: "0px 4px 6px rgba(0,0,0,0.5)",
              }}
            >
              {t("Affordable Aircraft Rentals")}
            </Typography>
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textSlideIn}
            transition={{ delay: 0.3 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                opacity: 0.9,
                mt: 2,
                textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {t("Explore the beauty of Southern Finland from the skies")}
            </Typography>
          </motion.p>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "40%" },
            height: { xs: "auto", md: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Mobile Buttons */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2,
              mt: 4,
              p: 2,
              background: "linear-gradient(to right, #007bff, #0056b3)",
              borderRadius: 2,
              boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
            }}
          >
            <Link href={`/${locale}/book`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="px-4 py-2 bg-white text-black font-bold rounded-full shadow-lg"
              >
                {t("CTA")}
              </motion.button>
            </Link>

            <Button href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-transparent border border-white text-white font-bold rounded-full shadow-lg"
              >
                {t("Contact Us")}
              </motion.button>
            </Button>
          </Box>

          {/* Desktop Diagonal CTA */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
              width: "100%",
              height: "100%",
              transform: "skewX(-45deg)", // FIXED: Skew only on container
              background: "linear-gradient(to right, #007bff, #0056b3)",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                transform: "skewX(45deg)", // FIXED: Counter Skew on Content
                gap: 3,
              }}
            >
              <Link href={`/bookings`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="px-6 py-3 bg-white text-black font-bold text-lg rounded-full shadow-lg border-2 border-transparent group"
                >
                  {t("CTA")}
                </motion.button>
              </Link>

              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-transparent border border-white text-white font-bold text-lg rounded-full shadow-lg"
                >
                  {t("Contact Us")}
                </motion.button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
