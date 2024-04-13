import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar({ userName, contextText }) {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {userName}
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          {/* Empty space for centering */}
        </Typography>
        <Typography variant="h6" color="inherit">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
