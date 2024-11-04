import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  Button,
  Stack,
  Typography,
  MenuItem,
  Menu,
  useTheme,
} from "@mui/material";
import { themes } from "../../../pages/theme";
import NavBar from "./NavBar";
import { useState } from "react";
import "./header.css";
import HistoryIcon from "@mui/icons-material/History";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = ({ setSelectedTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logout, setLogout] = useState(false);

  const theme = useTheme();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (themeId) => {
    setSelectedTheme(themeId);
    handleMenuClose();
  };

  const [anchorElS, setAnchorElS] = useState(null);
  const open = Boolean(anchorElS);
  const handleClickSetting = (event) => {
    setAnchorElS(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorElS(null);
  };

  const role = window.localStorage.getItem("role");
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: theme.palette.primary.main }}
        >
          <Toolbar variant="dense">
            <Link to="/">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: "bolder",
                    fontSize: { xs: "1rem", sm: "1.3", md: "1.5rem" },
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Pharma
                </Typography>
                <img
                  src="/public/image/pngegg (1).png"
                  alt="logo"
                  style={{ width: "50px" }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: "bolder",
                    fontSize: { xs: "1rem", sm: "1.3", md: "1.5rem" },
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Pro
                </Typography>
              </IconButton>
            </Link>
            <Box flexGrow={1}></Box>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ mr: { xs: "2px", md: 2 } }}
              >
                <AccessibilityIcon
                  sx={{ fontSize: { xs: "1.1rem", sm: "1rem", md: "2.2rem" } }}
                />
                <Typography
                  sx={{
                    ml: "2px",
                    fontSize: "1.2rem",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Accessibility
                </Typography>
                <KeyboardArrowDownIcon
                  sx={{ fontSize: { xs: ".8rem", sm: ".8rem", md: "1.2rem" } }}
                />
              </IconButton>

              <Menu
                className="List"
                id="theme-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{}}
              >
                {themes.map((theme) => (
                  <MenuItem
                    key={theme.id}
                    onClick={() => {
                      localStorage.setItem("theme", theme.id);
                      handleThemeChange(theme.id);
                    }}
                    sx={{ gap: { xs: "1rem", md: "4rem" } }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{ gap: { xs: "1rem", md: "4rem" } }}
                    >
                      <Box sx={{ fontSize: { xs: ".8rem", md: "1.2rem" } }}>
                        {theme.icon}
                      </Box>
                      <Box sx={{ fontSize: { xs: ".8rem", md: "1.2rem" } }}>
                        {theme.name}
                      </Box>
                    </Stack>
                  </MenuItem>
                ))}
              </Menu>
              {window.localStorage.getItem("role") ? (
                <Stack direction={"row"}>
                  <div>
                    <IconButton
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClickSetting}
                      sx={{ color: "white" }}
                    >
                      <ManageAccountsIcon
                        sx={{ fontSize: { sx: "1rem", md: "2rem" } }}
                      />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElS}
                      open={open}
                      onClose={handleCloseSetting}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      sx={{
                        backgroundColor: { xs: "#ffffff34", md: 0 },
                        transition: "300s",
                      }}
                    >
                      <MenuItem
                        sx={{
                          paddingX: "50px",
                          fontWeight: "bold",
                          color: theme.palette.primary.main,
                        }}
                        onClick={() => {
                          window.location.pathname = "/archive";
                        }}
                      >
                        <SaveAltIcon sx={{ marginRight: "30px" }} />
                        Archive
                      </MenuItem>
                      <MenuItem
                        sx={{
                          paddingX: "50px",
                          fontWeight: "bold",
                          color: theme.palette.primary.main,
                        }}
                        onClick={() => {
                          window.location.pathname = "/History";
                        }}
                      >
                        {" "}
                        <HistoryIcon sx={{ marginRight: "30px" }} />
                        History
                      </MenuItem>
                      <MenuItem
                        sx={{
                          paddingX: "50px",
                          fontWeight: "bold",
                          color: theme.palette.primary.main,
                        }}
                        onClick={() => {
                          setLogout(true);
                          handleCloseSetting();
                        }}
                      >
                        <LogoutIcon sx={{ marginRight: "30px" }} />
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>

                  <Box
                    className="logout"
                    sx={{
                      paddingX: "30px",
                      border: "2px solid",
                      borderColor: theme.palette.primary.main,
                      position: "fixed",
                      backgroundColor: theme.palette.favColor.main,
                      top: "20%",
                      left: "30%",
                      width: { md: "600px" },
                      borderRadius: "20px",
                      paddingY: "30px",
                      display: logout === true ? "block" : "none",
                    }}
                  >
                    <LogoutIcon
                      sx={{
                        fontSize: "100px",
                        color: theme.palette.primary.main,
                        marginX: "auto",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    />
                    <Typography
                      textAlign={"center"}
                      sx={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "black",
                        marginBottom: "40px",
                      }}
                    >
                      Oh no! you are leaving... <br /> Are yor sure
                    </Typography>
                    <Box
                      sx={{
                        fontWeight: "bold",
                        justifyContent: "center",
                        gap: 3,
                        marginX: "auto",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Button
                        onClick={() => {
                          window.localStorage.removeItem("role");
                          window.location.pathname = "/";
                        }}
                        sx={{
                          textTransform: "capitalize",
                          borderColor: theme.palette.primary.main,
                          border: "1px solid",
                          color: theme.palette.primary.main,
                          marginY: "20px",
                          marginLeft: "10px",
                          width: "80%",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          "&:hover": { backgroundColor: "white" },
                        }}
                      >
                        Log out
                      </Button>
                      <Button
                        onClick={() => setLogout(false)}
                        sx={{
                          textTransform: "capitalize",
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.favColor.main,
                          marginY: "20px",
                          marginLeft: "10px",
                          width: "80%",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          "&:hover": {
                            backgroundColor: theme.palette.third.main,
                          },
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                  {(role === "admin") | (role === "pharmasict") ? (
                    <>
                      <IconButton
                        title="dashboard"
                        sx={{
                          color: "#ffffff",
                          borderColor: theme.palette.secondary.main,
                          backgroundColor: theme.palette.primary.main,
                          transition: "1s",
                          fontSize: { xs: ".8rem", sm: ".8rem", md: "1rem" },
                          textTransform: "capitalize",
                          marginLeft: "20px",
                        }}
                        onClick={() => {
                          window.location.pathname = "dashboard";
                        }}
                      >
                        <SettingsIcon
                          sx={{
                            "&:hover": { rotate: "180deg" },
                            transform: "1s",
                          }}
                        />
                      </IconButton>
                    </>
                  ): null}
                </Stack>
              ) : (
                <Box>
                  <Link to="/registration/register">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#fff",
                        marginRight: "10px",
                        color: theme.palette.primary.main,
                        border: "1px solid",
                        borderColor: theme.palette.secondary.main,
                        "&:hover": {
                          backgroundColor: theme.palette.favColor.main,
                        },
                        fontSize: { xs: ".8rem", sm: ".8rem", md: "1rem" },
                      }}
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link to="login">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#ffffff",
                        border: "1px solid",
                        borderColor: theme.palette.secondary.main,
                        backgroundColor: "#0097a7",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#0097a7",
                        },
                        fontSize: { xs: ".8rem", sm: ".8rem", md: "1rem" },
                      }}
                    >
                      log in
                    </Button>
                  </Link>
                </Box>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <NavBar />
    </Box>
  );
};

export default Header;
