import { createTheme } from "@mui/material";

export const getContainedButtonTheme = (buttonStyles = {}) => {
  const {
    background = "#cca75d",
    borderColor = "#cca75d",
    color = "#fff",
  } = buttonStyles;

  return createTheme({
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            background,
            border: `1px solid ${borderColor}`,
            color,
          },
        },
      },
    },
  });
};

export const getOutlinedButtonTheme = (buttonStyles = {}) => {
  const {
    background = "transparent",
    borderColor = "#0A4FD5",
    color = "#0A4FD5",
  } = buttonStyles;

  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background,
            border: `1px solid ${borderColor}`,
            color,
          },
        },
      },
    },
  });
};
