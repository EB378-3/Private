"use client";

import React from "react";
import { Autocomplete, Box, MenuItem, Select, TextField } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

export default function LogbookCreate() {
  const {
    saveButtonProps,
    // Removed formLoading since it is not available.
    refineCore: { queryResult, onFinish },
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      meta: {
        select: "*",
      },
    },
  });

  // If you need autocomplete for a related resource, adjust accordingly.
  // For now, we'll assume no autocomplete is needed.

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        autoComplete="off"
      >
        {/* Date */}
        <TextField
          {...register("date", {
            required: "Date is required",
          })}
          error={!!errors.date}
          helperText={errors.date ? String(errors.date.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="date"
          label="Date"
          name="date"
        />

        {/* Pilot in Command */}
        <TextField
          {...register("pic", {
            required: "Pilot in Command is required",
          })}
          error={!!errors.pic}
          helperText={errors.pic ? String(errors.pic.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Pilot in Command"
          name="pic"
        />

        {/* Passengers */}
        <TextField
          {...register("pax", {
            required: "Passengers is required",
            valueAsNumber: true,
          })}
          error={!!errors.pax}
          helperText={errors.pax ? String(errors.pax.message) : ""}
          margin="normal"
          fullWidth
          type="number"
          InputLabelProps={{ shrink: true }}
          label="Passengers"
          name="pax"
        />

        {/* Departure */}
        <TextField
          {...register("departure", {
            required: "Departure is required",
          })}
          error={!!errors.departure}
          helperText={errors.departure ? String(errors.departure.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Departure"
          name="departure"
        />

        {/* Arrival */}
        <TextField
          {...register("arrival", {
            required: "Arrival is required",
          })}
          error={!!errors.arrival}
          helperText={errors.arrival ? String(errors.arrival.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Arrival"
          name="arrival"
        />

        {/* Offblock */}
        <TextField
          {...register("offblock", {
            required: "Offblock is required",
          })}
          error={!!errors.offblock}
          helperText={errors.offblock ? String(errors.offblock.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="datetime-local"
          label="Offblock"
          name="offblock"
        />

        {/* Takeoff */}
        <TextField
          {...register("takeoff", {
            required: "Takeoff is required",
          })}
          error={!!errors.takeoff}
          helperText={errors.takeoff ? String(errors.takeoff.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="datetime-local"
          label="Takeoff"
          name="takeoff"
        />

        {/* Landing */}
        <TextField
          {...register("landing", {
            required: "Landing is required",
          })}
          error={!!errors.landing}
          helperText={errors.landing ? String(errors.landing.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="datetime-local"
          label="Landing"
          name="landing"
        />

        {/* Onblock */}
        <TextField
          {...register("onblock", {
            required: "Onblock is required",
          })}
          error={!!errors.onblock}
          helperText={errors.onblock ? String(errors.onblock.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="datetime-local"
          label="Onblock"
          name="onblock"
        />

        {/* Landings */}
        <TextField
          {...register("landings", {
            required: "Landings is required",
            valueAsNumber: true,
          })}
          error={!!errors.landings}
          helperText={errors.landings ? String(errors.landings.message) : ""}
          margin="normal"
          fullWidth
          type="number"
          InputLabelProps={{ shrink: true }}
          label="Landings"
          name="landings"
        />

        {/* Flight Rules */}
        <TextField
          {...register("flightrules", {
            required: "Flight Rules is required",
          })}
          error={!!errors.flightrules}
          helperText={errors.flightrules ? String(errors.flightrules.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Flight Rules"
          name="flightrules"
        />

        {/* Fuel */}
        <TextField
          {...register("fuel", {
            required: "Fuel is required",
            valueAsNumber: true,
          })}
          error={!!errors.fuel}
          helperText={errors.fuel ? String(errors.fuel.message) : ""}
          margin="normal"
          fullWidth
          type="number"
          InputLabelProps={{ shrink: true }}
          label="Fuel"
          name="fuel"
        />

        {/* Flight Type */}
        <Controller
          name="flight_type"
          control={control}
          defaultValue="Local"
          render={({ field }: { field: any }) => (
            <Select {...field} label="Flight Type" fullWidth>
              <MenuItem value="Local">Local</MenuItem>
              <MenuItem value="International">International</MenuItem>
            </Select>
          )}
        />

        {/* Details */}
        <TextField
          {...register("details", {
            required: "Details is required",
          })}
          error={!!errors.details}
          helperText={errors.details ? String(errors.details.message) : ""}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          multiline
          label="Details"
          name="details"
          rows={4}
        />

        {/* Billing Details */}
        <TextField
          {...register("billing_details")}
          error={!!errors.billing_details}
          helperText={
            errors.billing_details ? String(errors.billing_details.message) : ""
          }
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          multiline
          label="Billing Details"
          name="billing_details"
          rows={4}
        />
      </Box>
    </Create>
  );
}
