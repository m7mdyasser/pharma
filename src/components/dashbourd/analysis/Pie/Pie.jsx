import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataOfCategory } from "../../../../redux/slice/pieChartOfCategory";
import { Box } from "@mui/material";



const Pie = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.dataOfCategory);
  
    useEffect(() => {
      dispatch(fetchDataOfCategory());
    }, []);
  return (
    <Box>
    <PieChart
      series={[
        {
            data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={500}
    />
    </Box>

  );
};

export default Pie;
