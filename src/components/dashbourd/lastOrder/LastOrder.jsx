import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataOfHomeRate } from "../../../redux/slice/dataHomSlice";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function LastOrder() {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.homeData);

  useEffect(() => {
    dispatch(fetchDataOfHomeRate());
  }, []);

  return (
    <Box>
      <Box paddingBottom={"10px"}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 0],
              area: true,
            },
          ]}
          width={450}
          height={300}
        />
      </Box>
      {homeData.map((item) => (
        <Box
          paddingBottom={"10px"}
          sx={{ borderBottom: "solid black 1px", marginBottom: "10px" }}
          key={item.id}
          width={"80%"}
          marginX={"auto"}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginBottom={"5px"}
          >
            <Typography fontWeight={600}>{item.name}</Typography>
            <Stack direction={"row"}>
              <Typography fontWeight={600} marginRight={"5px"}>${item.number}</Typography>
              {item.type === "loss" ? (
                <KeyboardArrowDownRoundedIcon sx={{color: "red", padding: ".5px", bgcolor: "#fbe9e7", borderRadius: "5px"}}/>
              ) : (
                <KeyboardArrowUpRoundedIcon sx={{color: "green", padding: ".5px", bgcolor: "#b8f5c9", borderRadius: "5px"}}/>
              )}
            </Stack>
          </Stack>
          <Box color={item.type === "loss" ? "red" : "green"}>
            <Typography>
              {item.rate} {item.type}
            </Typography>
          </Box>
        </Box>
      ))}
      <Stack direction={"row"} alignItems={"center"}paddingY={"30px"} marginX={"auto"} justifyContent={"center"} color={"#2196f3"}>
      <Typography >View All </Typography>
      <KeyboardArrowRightIcon />
      </Stack>
    </Box>
  );
}
