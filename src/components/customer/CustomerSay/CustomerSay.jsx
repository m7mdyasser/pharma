// @ts-ignore
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const CustomerSay = () => {
  return (
    <Box sx={{ marginBottom: "80px", marginTop: "170px" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, sm: 7, md: 10 },
        }}
      >
        <div data-aos="fade-right">
          <Box>
            <Avatar
              variant="rounded"
              src="/public/image/gallery/clientSays.avif"
              alt="Customer Say"
              sx={{
                width: { xs: "100%", sm: "80%", md: "45rem" },
                height: { xs: "100%", sm: "80%", md: "30rem" },
                marginX: "auto",
                position: { xs: "none", md: "relative" },
                left: { xs: "0", md: "-25px" },
              }}
            />
          </Box>
        </div>
        <div data-aos="fade-left">
          <Box>
            <Stack>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", md: "3rem" },
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  What Our Clients Say
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      md: "1.3rem",
                      height: { xs: "2rem", md: "20rem" },
                    },
                  }}
                >
                  “The ease of delivery is one that I depended on when I was
                  bedriden and couldn’t even walk. Their services is awesome”
                </Typography>
              </Box>
              <Stack spacing={2} sx={{ marginTop: "30px", marginX: "auto" }}>
                <Pagination count={10} color="primary" />
              </Stack>
            </Stack>
          </Box>
        </div>
      </Stack>
    </Box>
  );
};

export default CustomerSay;
