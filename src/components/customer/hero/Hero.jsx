import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Animation1 from "../../../../public/animation/xAQFLR8buf.json";
import Lottie from "lottie-react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
const top100Films = [{}];

const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ marginBottom: "80px" }}>
        <Container sx={{ maxWidth: "90%" }}>
          <Stack direction={"row"} gap={10} sx={{ alignItems: "center" }}>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.3rem", md: "2rem" },
                  marginBottom: "25px",
                  color: theme.palette.primary.main,
                }}
              >
                We can get your Drug Prescriptions to You
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: ".8rem",
                    md: "1.1rem",
                    color: theme.palette.secondary.main,
                    fontWeight: "500",
                    marginBottom: "25px",
                  },
                }}
              >
                We have all the drugs your doctor prescribed for your health and
                what’s more, we can get it to you.
              </Typography>
              <Box>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  options={top100Films.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="input-with-icon-textfield"
                      placeholder="Search..."
                      label="Search"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        borderRadius: "70px",
                        width: { xs: "100%", md: "70%" },
                        marginX: "auto",
                        justifyContent: "center",
                      }}
                    />
                  )}
                />
              </Box>
              <Box>
                <Link to="/shop">
                <Button sx={{textTransform: "capitalize", backgroundColor: theme.palette.primary.main, color: theme.palette.favColor.main, marginY: "20px", marginLeft: "10px", fontSize: {xs: "1rem", md: "1.1rem"}, "&:hover": { backgroundColor: theme.palette.third.main}}}>Order now</Button>
                </Link>
              </Box>
              <Box
                sx={{
                  marginX: "auto",
                  color: theme.palette.primary.main,
                  marginTop: { xs: "20px", md: "30px" },
                  marginLeft: "10px",
                }}
              >
                <FacebookIcon sx={{ marginRight: "8px", cursor: "pointer" }} />
                <TwitterIcon sx={{ marginRight: "8px", cursor: "pointer" }} />
                <InstagramIcon sx={{ marginRight: "8px", cursor: "pointer" }} />
              </Box>
            </Box>
            <Box flexGrow={1} sx={{ display: { xs: "none", md: "block" } }} />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Lottie
                animationData={Animation1}
                // @ts-ignore
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
