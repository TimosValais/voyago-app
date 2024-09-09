import React from "react";
import { TextField } from "@mui/material";

const AppTextField = ({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  autoComplete,
  autoFocus = false,
  margin = "normal",
  required = true,
  fullWidth = true,
  disabled = false,
}) => {
  return (
    <TextField
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      name={name}
      type={type}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default AppTextField;
