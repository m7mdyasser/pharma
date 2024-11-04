import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Animation2 from "../../../../public/animation/Animation1.json";
import Lottie from "lottie-react";

const Consultation = () => {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom:{xs: "70px"}, alignItems: "center" }}>
      <Container sx={{ maxWidth: "100%" }}>
        <Stack direction={"row"} gap={5} sx={{ alignItems: "center" }}>
          <Box>
            <Stack>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", md: "2.5rem" },
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: theme.palette.primary.main,
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  Online medical consultation
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: ".8rem",
                      md: "1.2rem",
                    },
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  The emergence of online pharmacies has revolutionized the way
                  individuals access medication and healthcare information. With
                  just a few clicks, patients can order prescription drugs,
                  over-the-counter medications, and wellness products from the
                  comfort of their homes. scarce.
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box flexGrow={1} sx={{ display: { xs: "none", md: "block" } }} />
          <Box
            sx={{
              width: "220%",
              display: { xs: "none", md: "block" },
              position: "relative",
              bottom: "60px",
            }}
          >
            <Lottie animationData={Animation2} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Consultation;
