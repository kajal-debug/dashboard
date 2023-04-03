import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

function popover(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Popover
      open={props.open}
      anchorEl={props.anchorE2}
      onClose={props.close}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ flexGrow: 1, width: "200px", height: "200px" }}>
        <Typography>Home</Typography>
        <Typography>About</Typography>
        <Typography>Services</Typography>
      </Box>
    </Popover>
  );
}

export default popover;
