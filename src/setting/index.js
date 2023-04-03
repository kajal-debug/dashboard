import React from "react";
import { blue } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TuneIcon from "@mui/icons-material/Tune";
import Drawer from "./drawer";

function Setting() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const openSettingHandler = () => {
    setOpenDrawer(true);
  };
  const closeHandlerDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <div>
      <Drawer open={openDrawer} close={closeHandlerDrawer} />
      <Stack
        direction="row"
        spacing={2}
        style={{
          position: "absolute",
          right: "23px",
          bottom: "3%",
          cursor: "pointer",
        }}
        onClick={() => openSettingHandler()}
      >
        <Avatar
          sx={{ bgcolor: blue[500] }}
          variant="rounded"
          style={{ borderRadius: "50%", padding: "30px" }}
        >
          <TuneIcon />
        </Avatar>
      </Stack>
    </div>
  );
}

export default Setting;
