import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Read = () => {
  const theme = useTheme();


  return (
    <Box sx={{marginBottom: {xs: "550px", md: "50px"}}}>
      <Container
        sx={{
          bgcolor: { xs: "none", md: "rgba(0, 0, 0, 0.39)" },
          height: "400px",
          position: "relative",
          bottom: "2rem",
          zIndex: 1,
          width: "90%",
        }}
      >
        <Box sx={{ marginBottom: "50px" }}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              paddingTop: "70px",
              fontSize: { xs: "1.4rem", md: "2rem" },
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            A Customized Pharmacy For You
          </Typography>
          <Box
            sx={{
              borderBottom: "2px solid",
              borderColor: theme.palette.primary.main,
              width: "10%",
              marginBottom: "20px",
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xs: ".8rem",
                md: "1.3rem",
                color: theme.palette.secondary.main,
                paddingBottom: "20px",
              },
            }}
          >
            Our compounding pharmacists are here to provide our many years of
            experience to work for your individual requirements
          </Typography>
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            marginX: "auto",
            marginLeft: { xs: "13%", sm: "35%", md: "0" },
            gap: { xs: 5, md: 10 },
          }}
        >
          <Box
            sx={{
              padding: "22px",
              width: { xs: "210px", md: "250px" },
              bgcolor: theme.palette.primary.main,
              borderRadius: "10px",
            }}
          >
            <DescriptionIcon
              sx={{
                marginX: "auto",
                display: "flex",
                fontSize: {
                  xs: "2.3rem",
                  md: "3rem",
                },
                // @ts-ignore
                color: theme.palette.favColor.main,
              }}
            />
            <Typography
              sx={{
                // @ts-ignore
                color: theme.palette.favColor.main,
                fontSize: { xs: "1rem", md: "1.2rem" },
                marginY: "15px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Refill A Prescription
            </Typography>
            <Typography
              sx={{
                // @ts-ignore
                color: theme.palette.favColor.main,
                fontSize: { xs: ".7rem", md: "1rem" },
                textAlign: "center",
              }}
            >
              Use our online refill form to easily refill your prescriptions
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "22px",
              width: { xs: "210px", md: "250px" },
              bgcolor: theme.palette.primary.main,
              borderRadius: "10px",
            }}
          >
            <MedicationLiquidIcon
              sx={{
                marginX: "auto",
                display: "flex",
                fontSize: {
                  xs: "2.3rem",
                  md: "3rem",
                },
                // @ts-ignore
                color: theme.palette.favColor.main,
              }}
            />
            <Typography
              sx={{
                // @ts-ignore
                color: theme.palette.favColor.main,
                fontSize: { xs: "1rem", md: "1.2rem" },
                marginY: "15px",
                fontWeight: "bold",
                width: "120%",
              }}
            >
              Compounding Services
            </Typography>
            <Typography
              sx={{
                // @ts-ignore
                color: theme.palette.favColor.main,
                fontSize: { xs: ".7rem", md: "1rem" },
                textAlign: "center",
              }}
            >
              We offer a wide range of compounding services designed just for
              you
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "22px",
              width: { xs: "210px", md: "250px" },
              bgcolor: theme.palette.primary.main,
              borderRadius: "10px",
            }}
          >
            <LocalShippingIcon
              sx={{
                marginX: "auto",
                display: "flex",
                fontSize: {
                  xs: "2.3rem",
                  md: "3rem",
                },
                // @ts-ignore
                color: theme.palette.favColor.main,
              }}
            />
            <Typography
              sx={{
                // @ts-ignore
                color: theme.palette.favColor.main,
                fontSize: { xs: "1rem", md: "1.2rem" },
                marginY: "15px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Online Shop
            </Typography>
            <Typography
              sx={{
                // @ts-ignore
                color: theme.palette.favColor.main,
                fontSize: { xs: ".7rem", md: "1rem" },
                textAlign: "center",
              }}
            >
              Our nutritional store allows you to shop for products to
              keep you healthy
            </Typography>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default Read;