import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
  Button
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.favColor.main,
        paddingTop: "3rem",
        paddingBottom: "3rem",
        fontFamily: "-moz-initial",
        marginTop: "10px",
      }}
    >
      <Container>
        <Stack gap={10}>
          <Box>
            <Stack
              direction={"row"}
              gap={6}
              alignItems={"center"}
              marginX={"center"}
            >
              <Stack gap={9} sx={{ display: { xs: "none", md: "block" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "1.3rem", md: "1.8rem" },
                    fontWeight: "bold",
                  }}
                >
                  Sign up for our Newsletter
                </Typography>
                <Typography
                  width={"70%"}
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
                >
                  Get to know updates in the field of medicine and know how
                  often our stores are stocked
                </Typography>
              </Stack>
              <Box flexGrow={1} sx={{ display: { xs: "none", md: "block" } }} />
              <Stack
                gap={2}
                sx={{
                  textAlign: { xs: "center", md: "start" },
                  display: { xs: "flex", md: "block" },
                  marginX: "auto",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                    fontWeight: "bold",
                  }}
                >
                  Your email:
                </Typography>
                <TextField
                  sx={{
                    flex: 1,
                    fontSize: { xs: "1.3rem", md: "1.8rem" },
                    width: { xs: "100%", md: "120%" },
                    fontWeight: "bold",
                    background: "#ffffff4b",
                    borderRadius: "30px",
                  }}
                  type="email"
                  id="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon
                          sx={{ color: theme.palette.favColor.main }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack direction={"row"} gap={3}>
              <Box width={"70%"} sx={{ display: { xs: "none", md: "block" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                    fontWeight: "bold",
                    marginBottom: "1.3rem",
                  }}
                >
                  PharmaPro
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, width: "70%" }}
                >
                  Your favourite online pharmacy store. We offer onsite delivery
                  and your health is our priority
                </Typography>
              </Box>
              <Box>
                <Stack
                  direction={"row"}
                  sx={{ gap: { xs: "1.5rem", md: "10rem" } }}
                  textAlign={"center"}
                >
                  <Box>
                    <Stack gap={1} width={"150%"}>
                      <Typography
                        marginBottom={1.5}
                        sx={{ fontSize: { xs: ".8rem", md: "1.050rem" } }}
                      >
                        Quick links
                      </Typography>
                      <Stack gap={1.2} sx={{ cursor: "pointer" }}>
                        <Link to="contactUs"><Button sx={{color:"white" , textTransform: "capitalize"}}><Typography>Contact us</Typography></Button></Link>
                        <Link to="aboutUs"><Button sx={{color:"white" , textTransform: "capitalize"}}><Typography>About Us</Typography></Button></Link>
                        <Link to="careers"><Button sx={{color:"white" , textTransform: "capitalize"}}><Typography>Careers</Typography></Button></Link>
                      </Stack>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack gap={1} sx={{ width: { xs: "130%", md: "200%" } }}>
                      <Typography
                        marginBottom={1.5}
                        sx={{ fontSize: { xs: ".8rem", md: "1.050rem" } }}
                      >
                        Services
                      </Typography>
                      <Stack gap={1.2} sx={{ cursor: "pointer" }}>
                        <Link to="consult"><Button sx={{color:"white" , textTransform: "capitalize"}}><Typography>Consult</Typography></Button></Link>
                        <Link to="delivery"><Button sx={{color:"white" , textTransform: "capitalize"}}><Typography>Delivery</Typography></Button></Link>
                        <Link to="purchase"><Button sx={{color:"white" , textTransform: "capitalize"}}><Typography>Purchase</Typography></Button></Link>
                      </Stack>
                    </Stack>
                  </Box>
                  <Box>
                    <Stack gap={1} width={"150%"}>
                      <Typography
                        marginBottom={1.5}
                        sx={{ fontSize: { xs: ".8rem", md: "1.050rem" } }}
                      >
                        Social Media
                      </Typography>
                      <Stack gap={1.2} sx={{ cursor: "pointer" }}>
                        <Typography>Facebook</Typography>
                        <Typography>Twitter</Typography>
                        <Typography>Instagram</Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box textAlign={"center"}>Gmail: PharmaPro10000@gmail.com</Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
