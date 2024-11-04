import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../../../redux/slice/OrderSlice";
import axios from "axios";

export default function Order() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AcceptOrder = async (id) => {
    try {
      let res = await axios.put(
        `https://pharmapro.somee.com/api/Order/orderIsDone?orderId=${id}`
      );
      if (res.status === 201 || res.status === 200) {
        window.location.reload();
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.ordersData);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  console.log(orders);
  return (
    <Stack gap={2}>
      {orders.map((item) => (
        <Accordion
          defaultExpanded
          onChange={handleChange("panel1")}
          key={item.id}
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
              {item.address}
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
                  {item.orderIsDone === true? <Button
                    variant="contained"
                    onClick={() => AcceptOrder(item.id)}
                    disabled
                  >
                    Done
                  </Button>: <Button
                    variant="contained"
                    onClick={() => {AcceptOrder(item.orderId)
                      console.log(item.orderId)
                    }}
                  >
                    Accept
                  </Button>}
                </Stack>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}
