"use client";

import { ThemeProvider } from "@emotion/react";
import MuiButton from "@mui/material/Button";
import { getContainedButtonTheme } from "../theme/theme";

export default function ContainedButton(props) {
  const {
    children,
    padding = "8px 12px",
    buttonStyles,
    hoveredBgColor = "transparent",
    hoveredColor = "#cca75d",
    ...buttonProps
  } = props;

  const theme = getContainedButtonTheme(buttonStyles);
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        variant="container"
        sx={{
          padding,
          textTransform: "inherit",
          transition: "all 0.3s ease-out",
          fontWeight: 500,
          "&:hover": {
            color: hoveredColor,
            background: hoveredBgColor,
          },
        }}
        {...buttonProps}
      >
        {children}
      </MuiButton>
    </ThemeProvider>
  );
}
