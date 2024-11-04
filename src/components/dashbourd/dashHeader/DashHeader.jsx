import { Box, styled } from "@mui/material"
import DashTopBar from "./DashTopBar"
import DashSideBar from "./DashSideBar"
import { useState } from "react";
import { Outlet } from "react-router-dom";


const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const DashHeader = () => {

      
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
      

  return (
    <Box sx={{ display: "flex" }}>
    <DashTopBar
      open={open}
      handleDrawerOpen={handleDrawerOpen}
    />

    <DashSideBar open={open} handleDrawerClose={handleDrawerClose} />

    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Outlet />
    </Box>
  </Box>
  )
}

export default DashHeader