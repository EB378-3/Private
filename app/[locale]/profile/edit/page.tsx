"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useOne, HttpError, useGetIdentity } from "@refinedev/core";
import { useTranslations } from "next-intl";

// Define the shape of your profile data.
interface ProfileData {
  id: string;
  fullname: string;
  username: string;
  email: string;
  phone: string;
  streetaddress: string;
  city: string;
  country: string;
  zip: string;
  role: string;
  NF: boolean;
  IR: boolean;
}

export default function ProfileEdit() {
  const t = useTranslations("Profile");

  // Use the refined useGetIdentity hook to get the current user's identity.
  const { data: identity } = useGetIdentity<{ id: string }>();
  if (!identity?.id) {
    return <Typography>Loading...</Typography>;
  }
  const profileId = identity.id;

  // Fetch the profile data using refined's useOne hook.
  const { data, isLoading, isError } = useOne<ProfileData, HttpError>({
    id: profileId,
    meta: { select: "*" },
  });

  const profile = data?.data;
  const [formData, setFormData] = useState<ProfileData | null>(null);

  // When the profile is fetched, store it in local state.
  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  // Handle input changes.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) =>
      prevData ? { ...prevData, [name]: type === "checkbox" ? checked : value } : prevData
    );
  };

  // Handle form submission via a direct PUT request.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      try {
        const res = await fetch(`/api/profiles/${profileId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          throw new Error("Failed to update profile");
        }
        console.log("Profile updated successfully");
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  if (isLoading || !formData) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading profile</Typography>;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: 2,
        boxShadow: 1,
      }}
      autoComplete="off"
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        {t("profileUpdate")}
      </Typography>
      <TextField
        fullWidth
        label={t("email")}
        name="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label={t("phone")}
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label={t("username")}
        name="username"
        value={formData.username}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label={t("fullname")}
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label={t("streetaddress")}
        name="streetaddress"
        value={formData.streetaddress}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label={t("city")}
        name="city"
        value={formData.city}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label={t("country")}
        name="country"
        value={formData.country}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label={t("zip")}
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label={t("role")}
        name="role"
        value={formData.role}
        onChange={handleChange}
        margin="normal"
      />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {t("qualifications")}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="body2">NF</Typography>
        <input type="checkbox" name="NF" checked={formData.NF} onChange={handleChange} />
        <Typography variant="body2">IR</Typography>
        <input type="checkbox" name="IR" checked={formData.IR} onChange={handleChange} />
      </Box>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
}
