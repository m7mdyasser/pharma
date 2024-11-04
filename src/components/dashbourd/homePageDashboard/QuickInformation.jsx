import { Box, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import TrendingDownTwoToneIcon from "@mui/icons-material/TrendingDownTwoTone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const QuickInformation = () => {
  const [alignmentSales, setAlignmentSales] = useState("day");
  const [alignmentOrder, setAlignmentOrder] = useState("dayOrder");

  const handleChangeSales = (event, newAlignment) => {
    setAlignmentSales(newAlignment);
  };
  const handleChangeOrder = (event, newAlignment) => {
    setAlignmentOrder(newAlignment);
  };

  const day = "700.00";
  const month = "800.00";

  const dayOrder = "200";
  const monthOrder = "1500";
  return (
    <Stack
      sx={{ flexDirection: { xs: "column", md: "row" } }}
      justifyContent={"space-around"}
      gap={2}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "30%" },
          height: "200px",
          color: "white",
          backgroundColor: "#303f9f",
          borderRadius: "15px",
          padding: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "350px",
            bgcolor: "#ffffff1f",
            zIndex: "1",
            borderRadius: "50%",
            position: "absolute",
            top: "-180px",
            left: "240px",
          }}
        ></Box>
        <Box
          sx={{
            width: "250px",
            height: "250px",
            bgcolor: "#ffffff3f",
            zIndex: "1",
            borderRadius: "50%",
            position: "absolute",
            top: "-180px",
            left: "80px",
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <MonetizationOnOutlinedIcon
            color="white"
            sx={{
              fontSize: "2.3rem",
              padding: "8px",
              backgroundColor: "#00000034",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
          <Box
            sx={{
              marginBottom: "40px",
              display: "flex",
              justifyContent: "end",
              color: "white",
              zIndex: "2",
            }}
          >
            <ToggleButtonGroup
              color="info"
              value={alignmentSales}
              exclusive
              onChange={handleChangeSales}
              aria-label="Platform"
            >
              <ToggleButton
                value="month"
                sx={{
                  textTransform: "capitalize",
                  paddingY: ".5rem",
                  color: "white",
                  borderColor: "white",
                }}
              >
                Month
              </ToggleButton>
              <ToggleButton
                value="day"
                sx={{
                  textTransform: "capitalize",
                  paddingY: ".5rem",
                  color: "white",
                  borderColor: "white",
                }}
              >
                day
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>

        <Stack>
          <Typography
            sx={{ color: "white", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            ${alignmentSales === "day" ? day : month}
            <TrendingDownTwoToneIcon fontSize="1rem" />
          </Typography>
          <Typography
            sx={{ color: "#bdbdbd", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Total Sales
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", md: "30%" },
          height: "200px",
          color: "white",
          backgroundColor: "#0288d1",
          borderRadius: "15px",
          padding: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "350px",
            bgcolor: "#ffffff1f",
            zIndex: "1",
            borderRadius: "50%",
            position: "absolute",
            top: "-180px",
            left: "240px",
          }}
        ></Box>
        <Box
          sx={{
            width: "250px",
            height: "250px",
            bgcolor: "#ffffff3f",
            zIndex: "1",
            borderRadius: "50%",
            position: "absolute",
            top: "-180px",
            left: "80px",
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <LocalMallOutlinedIcon
            color="white"
            sx={{
              fontSize: "2.3rem",
              padding: "8px",
              backgroundColor: "#00000034",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
          <Box
            sx={{
              marginBottom: "40px",
              display: "flex",
              justifyContent: "end",
              color: "white",
              zIndex: "2",
            }}
          >
            <ToggleButtonGroup
              color="standard"
              value={alignmentOrder}
              exclusive
              onChange={handleChangeOrder}
              aria-label="Platform"
            >
              <ToggleButton
                value="monthOrder"
                sx={{
                  textTransform: "capitalize",
                  paddingY: ".5rem",
                  color: "white",
                  borderColor: "white",
                }}
              >
                Month
              </ToggleButton>
              <ToggleButton
                value="dayOrder"
                sx={{
                  textTransform: "capitalize",
                  paddingY: ".5rem",
                  color: "white",
                  borderColor: "white",
                }}
              >
                day
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>
        <Stack>
          <Typography
            sx={{ color: "white", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            {alignmentOrder === "dayOrder" ? dayOrder : monthOrder}
            <TrendingDownTwoToneIcon fontSize="1rem" />
          </Typography>
          <Typography
            sx={{ color: "#bdbdbd", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Total order
          </Typography>
        </Stack>
      </Box>
      <Stack
        justifyContent={"space-between"}
        sx={{
          width: { xs: "98%", md: "30%" },
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        <Box
          sx={{
            width: "92%",
            height: "70px",
            color: "white",
            backgroundColor: "#303f9f",
            borderRadius: "15px",
            padding: "20px",
            overflow: "hidden",
            position: "relative",
            marginRight: "20px",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              bgcolor: "#ffffff1f",
              zIndex: "1",
              borderRadius: "50%",
              position: "absolute",
              top: "-175px",
              left: "300px",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "250px",
              bgcolor: "#ffffff3f",
              zIndex: "1",
              borderRadius: "50%",
              position: "absolute",
              top: "60px",
              left: "300px",
            }}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ marginY: "auto" }}
          >
            <StorefrontIcon
              color="white"
              sx={{
                fontSize: "2.3rem",
                padding: "8px",
                backgroundColor: "#00000034",
                borderRadius: "10px",
                marginRight: "20px",
                cursor: "pointer",
              }}
            />
            <Stack>
              <Typography
                sx={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
              >
                $300.00
              </Typography>
              <Typography sx={{ color: "#bdbdbd", fontWeight: "bold" }}>
                Total Earning
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "92%",
            height: "70px",
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "20px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              bgcolor: "#303f9f",
              zIndex: "1",
              borderRadius: "50%",
              position: "absolute",
              top: "-175px",
              left: "300px",
              opacity: "80%",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "250px",
              bgcolor: "#8b95ce",
              zIndex: "1",
              borderRadius: "50%",
              position: "absolute",
              top: "60px",
              left: "300px",
            }}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ marginY: "auto" }}
          >
            <CreditCardIcon
              color="white"
              sx={{
                fontSize: "2.3rem",
                padding: "8px",
                backgroundColor: "#8b95ce",
                borderRadius: "10px",
                marginRight: "20px",
                cursor: "pointer",
                color: "white",
              }}
            />
            <Stack>
              <Typography
                sx={{ color: "black", fontSize: "1.5rem", fontWeight: "bold" }}
              >
                $100.00
              </Typography>
              <Typography sx={{ color: "#bdbdbd", fontWeight: "bold" }}>
                Total Payment
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default QuickInformation;
