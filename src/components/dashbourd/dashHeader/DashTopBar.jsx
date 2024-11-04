import {
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));






const TopBar = ({ open, handleDrawerOpen }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
      sx={{
        height: "4.3rem",
        backgroundColor: "#ffffff",
        color: theme.palette.primary.main,
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            backgroundColor: "#e8eaf6",
            color: "#303f9f",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#303f9f", color: "#e8eaf6" },
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>


        <Link to="/">
              <Button
                edge="start"
                sx={{ mr: 2, textTransform: "capitalize", backgroundColor: "white", "&:hover": { backgroundColor: "white" },              }}
              >
                <Typography
                  sx={{
                    color: "#303f9f",
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
                    color: "#303f9f",
                    fontWeight: "bolder",
                    fontSize: { xs: "1rem", sm: "1.3", md: "1.5rem" },
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Pro
                </Typography>
              </Button>
            </Link>
        <Box flexGrow={1} />

        <Stack direction={"row"}>
          <IconButton
            color="inherit"
            sx={{
              backgroundColor: "#e8eaf6",
              color: "#303f9f",
              borderRadius: "10px",
              marginX: "5px",
              "&:hover": { backgroundColor: "#303f9f", color: "#e8eaf6" },
            }}
          >
            <NotificationsOutlinedIcon />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{
              backgroundColor: "#e8eaf6",
              color: "#303f9f",
              borderRadius: "10px",
              marginX: "5px",
              "&:hover": { backgroundColor: "#303f9f", color: "#e8eaf6" },
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
