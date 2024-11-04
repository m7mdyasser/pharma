import { Box, Stack } from "@mui/material";
import QuickInformation from "../../../components/dashbourd/homePageDashboard/QuickInformation";
import LastOrder from "../../../components/dashbourd/lastOrder/LastOrder";
import Bar from "../barChart/Bar";

const HomePage = () => {
  const role = window.localStorage.getItem("role");
  return (
    <Box>
      <Stack gap={5}>
        <QuickInformation />
        {role === "admin" ? (
          <Stack sx={{flexDirection: {xs: "column", md: "row"}}} gap={5}>
            <Box
              sx={{
                width: {xs: "500px", md: "63%"},
                height: {xs: "250px", md:"100%"},
                bgcolor: "white",
                padding: "20px",
                borderRadius: "15px",
                paddingBottom: "130px",
              }}
            >
              <Bar isDashbord={true} />
            </Box>
            <Box
              sx={{
                width: {xs: "100%", md:"37%"},
                height: "100%",
                bgcolor: "white",
                borderRadius: "15px",
              }}
            >
              <LastOrder />
            </Box>
          </Stack>
        ) : (
          <Stack>
            <Box></Box>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default HomePage;
