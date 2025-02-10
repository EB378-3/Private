// app/profile/components/ProfileTotals.tsx
"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

interface ProfileTotalsData {
  flight_hours_per_resource?: Record<string, number>;
}

const formatHours = (decimalHours: number) => {
  const hours = Math.floor(decimalHours);
  const minutes = Math.round((decimalHours - hours) * 60);
  return `${hours}h ${minutes}m`;
};

const fetchTotals = async (): Promise<ProfileTotalsData> => {
  const res = await fetch("/api/profile/totals");
  if (!res.ok) {
    throw new Error("Failed to fetch totals");
  }
  const data = await res.json();
  // Assume the API returns an array, and take the first element.
  return data[0] || {};
};

const ProfileTotals: React.FC = () => {
  const t = useTranslations("Profile");
  const { data, isLoading, isError } = useQuery<ProfileTotalsData>({
    queryKey: ["profileTotals"],
    queryFn: fetchTotals,
  });

  return (
    <Box sx={{ p: 2, border: "1px solid", borderColor: "grey.400", borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        {t("Total Hours on Plane")}
      </Typography>
      {isLoading ? (
        <Typography variant="body2" color="grey.600">Loading...</Typography>
      ) : isError ? (
        <Typography variant="body2" color="error">Error loading data</Typography>
      ) : data?.flight_hours_per_resource &&
        Object.keys(data.flight_hours_per_resource).length > 0 ? (
        <Box component="table" sx={{ width: "100%", borderCollapse: "collapse" }}>
          <Box component="thead">
            <Box component="tr">
              <Box component="th" sx={{ border: "1px solid", borderColor: "grey.400", p: 1 }}>
                Aircraft
              </Box>
              <Box component="th" sx={{ border: "1px solid", borderColor: "grey.400", p: 1 }}>
                Total Hours
              </Box>
            </Box>
          </Box>
          <Box component="tbody">
            {Object.entries(data.flight_hours_per_resource).map(
              ([aircraft, hours]) => (
                <Box component="tr" key={aircraft}>
                  <Box component="td" sx={{ border: "1px solid", borderColor: "grey.400", p: 1 }}>
                    {aircraft}
                  </Box>
                  <Box component="td" sx={{ border: "1px solid", borderColor: "grey.400", p: 1 }}>
                    {formatHours(hours)}
                  </Box>
                </Box>
              )
            )}
          </Box>
        </Box>
      ) : (
        <Typography variant="body2" color="grey.600">No data available...</Typography>
      )}
    </Box>
  );
};

export default ProfileTotals;
