import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, styled, useTheme, Typography, Tooltip } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import ForumIcon from "@mui/icons-material/Forum";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BadgeIcon from "@mui/icons-material/Badge";
import ClassIcon from "@mui/icons-material/Class";
import CategoryIcon from "@mui/icons-material/Category";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [
  { text: "Home", icon: <HomeOutlinedIcon />, path: "", active: "/dashboard" },
  {
    text: "Account Data",
    icon: <PeopleOutlinedIcon />,
    path: "accounts",
    active: "/dashboard/accounts",
  },
  {
    text: "Manage Accounts",
    icon: <ContactsOutlinedIcon />,
    path: "manage",
    active: "/dashboard/manage",
  },
  {
    text: "Chat",
    icon: <ForumIcon />,
    path: "chat",
    active: "/dashboard/chat",
  },
];

const Array2 = [
  {
    text: "pharmacist",
    icon: <BadgeIcon />,
    path: "accountPharmacist",
    active: "/dashboard/accountPharmacist",
  },
  {
    text: "Category",
    icon: <ClassIcon />,
    path: "category",
    active: "/dashboard/category",
  },
  {
    text: "Orders",
    icon: <HelpOutlineOutlinedIcon />,
    path: "order",
    active: "/dashboard/order",
  },
];
const Array3 = [
  {
    text: "Add Product",
    icon: <AddBoxIcon />,
    path: "addProduct",
    active: "/dashboard/addProduct",
  },
  {
    text: "products",
    icon: <CategoryIcon />,
    path: "products",
    active: "/dashboard/products",
  },
  {
    text: "Edit Product ",
    icon: <DriveFileRenameOutlineIcon />,
    path: "",
    active: "/dashboard/",
  },
  {
    text: "Make Offer",
    icon: <DiscountIcon />,
    path: "",
    active: "/dashboard/",
  },
];

const Array4 = [
  {
    text: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    path: "calendar",
    active: "/dashboard/calendar",
  },
  {
    text: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    path: "bar",
    active: "/dashboard/bar",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    path: "pie",
    active: "/dashboard/pie",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    path: "line",
    active: "/dashboard/line",
  },
  {
    text: "bump Chart",
    icon: <TroubleshootIcon />,
    path: "bump",
    active: "/dashboard/bump",
  },
];

const SideBar = ({ open, handleDrawerClose }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const role = window.localStorage.getItem("role");
  const name = window.localStorage.getItem("name");
  const iconLocation = location.pathname;
  console.log(iconLocation);
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        bgcolor: "wight",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "120px",
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid",
          borderColor: "#303f9f",
          transition: "0.25s",
        }}
        alt=""
        src=""
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s", fontWeight: 500 }}
      >
        {name}
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: "0.25s",
          color: "#303f9f",
          textTransform: "capitalize",
        }}
      >
        {role}
      </Typography>

      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  backgroundColor:
                    iconLocation === item.active ? "#303f9fef" : null,
                  borderRadius: "10px",
                  transition: "100ms",
                  "&:hover": {
                    backgroundColor:
                      iconLocation === item.active ? "#303f9fef" : null,
                  },
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "10px",
                    transition: "100ms",
                    color: iconLocation === item.active ? "white" : "#303f9f",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: iconLocation === item.active ? "white" : "black",
                  }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  backgroundColor:
                    iconLocation === item.active ? "#303f9fef" : null,
                  borderRadius: "10px",
                  transition: "100ms",
                  "&:hover": {
                    backgroundColor:
                      iconLocation === item.active ? "#303f9fef" : null,
                  },
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "10px",
                    transition: "100ms",
                    color: iconLocation === item.active ? "white" : "#303f9f",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: iconLocation === item.active ? "white" : "black",
                  }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  backgroundColor:
                    iconLocation === item.active ? "#303f9fef" : null,
                  borderRadius: "10px",
                  transition: "100ms",
                  "&:hover": {
                    backgroundColor:
                      iconLocation === item.active ? "#303f9fef" : null,
                  },
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "10px",
                    transition: "100ms",
                    color: iconLocation === item.active ? "white" : "#303f9f",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: iconLocation === item.active ? "white" : "black",
                  }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      {role === "admin" ? (
        <List>
          {Array4.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  backgroundColor:
                    iconLocation === item.active ? "#303f9fef" : null,
                  borderRadius: "10px",
                  transition: "100ms",
                  "&:hover": {
                    backgroundColor:
                      iconLocation === item.active ? "#303f9fef" : null,
                  },
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    padding: "8px",
                    borderRadius: "10px",
                    transition: "100ms",
                    color: iconLocation === item.active ? "white" : "#303f9f",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: iconLocation === item.active ? "white" : "black",
                  }}
                />
              </ListItemButton>
            </Tooltip>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Drawer>
  );
};

export default SideBar;
