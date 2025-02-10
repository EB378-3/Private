"use client";

import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useGetIdentity, useOne, HttpError } from "@refinedev/core";
import { useTranslations } from "next-intl";
import { EditButton } from "@refinedev/mui";
import ProfileTotals from "@components/profile/ProfileTotals";

// Define the shape of your profile data.
interface ProfileData {
  id: string;
  avatar?: string;
  fullname: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  zip: string;
  role: string;
  NF: boolean;
  IR: boolean;
}

export default function ProfilePage() {
  const t = useTranslations("Profile");

  // Always call useGetIdentity.
  const { data: identity } = useGetIdentity<{ id: string }>();
  const userId = identity?.id ?? "";

  // Always call useOne; disable it if there's no valid userId.
  const { data, isLoading, isError } = useOne<ProfileData, HttpError>({
    id: userId,
    meta: { select: "*" },
  });

  // While identity isn't loaded, show a loading state.
  if (!userId) {
    return <Typography>Loading...</Typography>;
  }

  if (isLoading || !data?.data) {
    return <Typography>Loading profile...</Typography>;
  }

  if (isError) {
    return <Typography>Error loading profile</Typography>;
  }

  const profile = data.data;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Profile
      </Typography>
      <Grid container spacing={4}>
        {/* Profile Card on the left */}
        <Grid item xs={12} md={8}>
          <Card sx={{ margin: "auto", boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image={profile.avatar || "/default-avatar.png"}
              alt="Profile Picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.fullname || "No Name"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {profile.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Username: {profile.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: {profile.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: {profile.address}, {profile.city}, {profile.country}{" "}
                {profile.zip}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Role: {profile.role}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Qualifications: {profile.NF ? "NF " : ""}{profile.IR ? "IR" : ""}
              </Typography>
              {/* Embed the totals component */}
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {t("Total Hours on Plane") || "Total Hours on Plane"}
                </Typography>
                <ProfileTotals />
              </Box>
            </CardContent>
            <CardActions>
              <EditButton hideText recordItemId={profile.id} />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
