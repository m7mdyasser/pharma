import { ResponsiveBump } from '@nivo/bump'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataOfCategoryCurve } from '../../../../redux/slice/bumpCategorySlice';
import { Box } from '@mui/material';

export default function Bump() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.categoryCurve);
  
    useEffect(() => {
      dispatch(fetchDataOfCategoryCurve());
    }, []);
    console.log(data)
    return(
        <Box height={500}>
<ResponsiveBump
        data={data}
        colors={{ scheme: 'category10' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={5}
        inactiveOpacity={0.15}
        startLabelPadding={17}
        pointSize={14}
        activePointSize={18}
        inactivePointSize={14}
        pointColor={{ from: 'serie.color', modifiers: [] }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />
        </Box>

    )}