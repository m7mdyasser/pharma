import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Accordion from "@mui/material/Accordion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorytData } from "../../../redux/slice/categoryDataSlice";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import ClearIcon from '@mui/icons-material/Clear';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const NavBar = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.CategoryData.categories);
  useEffect(() => {
    dispatch(fetchCategorytData());
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const menu = [
    { mainLink: "Home", link: "/",
  icon: <HomeIcon /> },
    {
      mainLink: "About Us",
      link: "aboutUs",
      icon: <InfoIcon />
    },
    {
      mainLink: "Contact Us",
      link: "contactUs",
      icon: <ContactsIcon />
    },
    { mainLink: "Chat", link: "", icon: <QuestionAnswerIcon />
  },
    {
      mainLink: "Consult",
      link: "consult",
      icon: <EmojiEmotionsIcon />
    },
    {
      mainLink: "Shop",
      link: "Shop",
      icon: <LocalGroceryStoreIcon />
    },
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.favColor.main, height: "3rem" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: 222,
              // @ts-ignore
              bgcolor: theme.palette.favColor.main,
              color: theme.palette.secondary.main,
            }}
          >
            <WindowIcon />
            <Typography
              sx={{
                padding: "0",
                textTransform: "capitalize",
                mx: 1,
                fontSize: "1.5rem",
              }}
            >
              Categories
            </Typography>

            <KeyboardArrowRightOutlinedIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".MuiPaper-root": {
                width: 220,
                // @ts-ignore
                bgcolor: theme.palette.favColor.main,
              },
            }}
          >
            {category &&
              category.map((item) => (
                <MenuItem
                  onClick={handleClose}
                  sx={{ width: "1000px" }}
                  key={item.id}
                >
                  <ListItemText sx={{ pY: "30px" }}>{item.name}</ListItemText>
                </MenuItem>
              ))}
          </Menu>
        </Box>

        {useMediaQuery("(min-width:1200px)") && (
          <Stack gap={2} direction={"row"} alignItems={"center"}>
            <Link to="/">
              <Button>
                <Typography
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    color: theme.palette.text.secondary,
                    textTransform: "capitalize",
                  }}
                >
                  Home
                </Typography>
              </Button>
            </Link>
            <Link to="aboutUs">
              <Button>
                <Typography
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    color: theme.palette.text.secondary,
                    textTransform: "capitalize",
                  }}
                >
                  About Us
                </Typography>
              </Button>
            </Link>
            <Link to="contactUs">
              <Button>
                <Typography
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    color: theme.palette.text.secondary,
                    textTransform: "capitalize",
                  }}
                >
                  contact Us
                </Typography>
              </Button>
            </Link>

            <Link to="consult">
              <Button>
                <Typography
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    color: theme.palette.text.secondary,
                    textTransform: "capitalize",
                  }}
                >
                  Consult
                </Typography>
              </Button>
            </Link>
            <Link to="shop">
              <Button>
                <Typography
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    color: theme.palette.text.secondary,
                    textTransform: "capitalize",
                  }}
                >
                  Shop
                </Typography>
              </Button>
            </Link>
          </Stack>
        )}

        {useMediaQuery("(max-width:1200px)") && (
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
              height: "100%",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              mx: "auto",
              mt: 6,
              position: "relative",
              pt: 10,
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 10,
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
                  fontSize: "1.2rem"
                }}
              >
                Navigation
              </Typography>
              <IconButton
                sx={{
                  ":hover": {
                    color: "red",
                    rotate: "180deg",
                    transition: "0.3s",
                  },
                  position: "absolute",
                  top: 0,
                  right: 10,
                  color: "red",
                }}
                onClick={toggleDrawer("top", false)}
              >
                <ClearIcon />
              </IconButton>
            </Stack>

            {menu.map((item) => {
              return (
                <Accordion
                  key={item.mainLink}
                  elevation={0}
                  sx={{ bgcolor: "initial" }}
                >
                  <Link to={item.link}>
                  <Stack direction={"row"}>
                  <ListItemIcon
                  sx={{marginLeft: "3px", color: theme.palette.primary.main}}
                >
                  {item.icon}
                </ListItemIcon>
                    <Box>
                      <Button sx={{textTransform: "capitalize", color: "black"}}  paddingY={2} onClick={toggleDrawer("top", false)}>
                        {item.mainLink}
                      </Button>
                    </Box>
                    </Stack>
                  </Link>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
};

export default NavBar;
