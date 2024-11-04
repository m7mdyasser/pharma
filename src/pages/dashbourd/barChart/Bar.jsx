import { Box } from "@mui/material";
import BarsDataset from "../../../components/dashbourd/analysis/bar/BarsDataset";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import BarsDatasetOfYear from "../../../components/dashbourd/analysis/bar/BarsDatasetOfYear";

const Bar = () => {
  const [alignment, setAlignment] = useState("month");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box height={440}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton
          value="month"
          sx={{ textTransform: "capitalize", paddingY: ".5rem" }}
        >
          Month
        </ToggleButton>
        <ToggleButton
          value="year"
          sx={{ textTransform: "capitalize", paddingY: ".5rem" }}
        >
          Year
        </ToggleButton>
      </ToggleButtonGroup>
      {alignment === "month" ? <BarsDataset /> : <BarsDatasetOfYear />}
    </Box>
  );
};

export default Bar;
