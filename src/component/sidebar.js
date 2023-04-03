import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Side from "./side";
import "./style.css";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [open, setOpen] = React.useState(true);
  const [mySideBarOpen, setMySideBarOpen] = React.useState(true);
  console.log("mySideBarOpen", mySideBarOpen);
  const handleClick = () => {
    setOpen(!open);
  };

  const getDetailsFromParent = (val) => {
    console.log("hellow world data lien 41", val);
    setMySideBarOpen(val);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Side getDetailsFromParent={getDetailsFromParent} />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#222e3c",
          },
        }}
        variant="persistent"
        open={mySideBarOpen}
      >
        <div>
          <Stack direction="row" padding="23px" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://funylife.in/wp-content/uploads/2022/11/20221118_172756-1024x1024.jpg"
              sx={{ width: 56, height: 56 }}
            />{" "}
            <span
              style={{ textAlign: "center", marginTop: "20px", color: "#fff" }}
            >
              Bishal Singh
            </span>
          </Stack>
        </div>
        {/* <Toolbar /> */}

        <List
          sx={{ width: "100%", maxWidth: 360, color: "#fff" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <DashboardIcon color="info" />
            </ListItemIcon>
            <ListItemText primary="DashBoard" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowForwardIcon color="info" />
                </ListItemIcon>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <ListItemText primary="Home" />
                </NavLink>
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ArrowForwardIcon color="info" />
                </ListItemIcon>
                <NavLink
                  to="/about"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <ListItemText primary="About" />
                </NavLink>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon color="info" />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AutoGraphIcon color="info" />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LocalShippingIcon color="info" />
            </ListItemIcon>
            <ListItemText primary="E-Commerce" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AcUnitIcon color="info" />
            </ListItemIcon>
            <ListItemText primary="Crypto" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
