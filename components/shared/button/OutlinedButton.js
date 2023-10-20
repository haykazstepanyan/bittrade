"use client";

import { getOutlinedButtonTheme } from "@/components/shared/theme/theme";
import { ThemeProvider } from "@emotion/react";
import MuiButton from "@mui/material/Button";

export default function OutlinedButton(props) {
  const {
    children,
    buttonStyles,
    hoveredBgColor = "#0A4FD5",
    hoveredColor = "#fff",
    ...buttonProps
  } = props;

  const theme = getOutlinedButtonTheme(buttonStyles);

  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        variant="outlined"
        sx={{
          padding: "8px 12px",
          textTransform: "inherit",
          transition: "all 0.3s ease-out",
          fontWeight: 500,
          "&:hover": {
            background: hoveredBgColor,
            color: hoveredColor,
            borderColor: "transparent",
          },
        }}
        {...buttonProps}
      >
        {children}
      </MuiButton>
    </ThemeProvider>
  );
}
