import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataOfGrow } from "../../../../redux/slice/lineChartOfGrow";

const Line = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.growSlice);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchDataOfGrow());
  }, []);
  return (
    <Box height={500}>
      <ResponsiveLine
        
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Month',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Dollar',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        lineWidth={9}
        pointSize={10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={8}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        areaOpacity={0.35}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 10,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
  );
};

export default Line;
