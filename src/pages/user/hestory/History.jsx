import { useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box,  Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { fetchHistoryOrder } from '../../../redux/slice/historyOrderSlice';
import { useDispatch, useSelector } from 'react-redux';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from 'react';

const History = () => {
const theme = useTheme()
const [expanded, setExpanded] = useState(false);

const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};

const dispatch = useDispatch();
const orders = useSelector((state) => state.HistoryOrdersData.orderHistory);

useEffect(() => {
  dispatch(fetchHistoryOrder());
}, [dispatch]);



console.log(orders)

  return (
    <Stack gap={2}>
      <Typography sx={{fontWeight: "bold", fontSize: {xs:"1.2rem", md: "2rem"},textAlign: "center" , color: theme.palette.primary.main}}>Orders History</Typography>
      {orders && orders.map((item) => (
        <Accordion
          defaultExpanded
          onChange={handleChange("panel1")}
          key={item.orderId}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                fontSize: "1.1rem",
                color: "#303f9f",
              }}
            >
              {item.userName}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {item.createdAt}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"space-around"}
            >
              <Box marginBottom={"30px"}>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">quantity</TableCell>
                        <TableCell align="center">Products price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {item.orderItems.map((orderItem) => (
                        <TableRow
                          key={orderItem.productId}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="center" component="th" scope="row">
                            {orderItem.productName}
                          </TableCell>
                          <TableCell align="center" component="th" scope="row">
                            {orderItem.amount}
                          </TableCell>
                          <TableCell align="center" component="th" scope="row">
                            {orderItem.productPrice}$
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Box>
                <Stack gap={2} justifyContent={"center"}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      totalPrice
                    </Typography>
                    <Typography>{item.totalPrice}$</Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};



export default History;
