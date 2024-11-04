import { Box, Button, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import {  removeItem, clearCart } from "../../../redux/slice/SliceToCart";
import { clearCartEvery24Hours } from "../../../redux/Store";
import { Link } from "react-router-dom";

const CartPage = () => {
  // @ts-ignore
  const Cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = Cart.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);
  clearCartEvery24Hours();

  console.log(Cart)
  return (
    <>
      <Box>
        <Container>
          <Typography>Total cost of the order: {totalPrice}$</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "end", marginBottom: "5px" }}
          >
            <Button
              onClick={() => dispatch(clearCart())}
              variant="contained"
              sx={{
                backgroundColor: "red",
                fontWeight: "bold",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "red", border: "red" },
              }}
            >
              delete all
            </Button>
          </Box>
          <Box marginBottom={"30px"}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Products price</TableCell>
                    <TableCell align="center">quantity</TableCell>
                    <TableCell align="center">TotalPrice</TableCell>
                    <TableCell align="center">delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Cart.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="center">
                        <img
                          src={item.photo}
                          alt={item.title}
                          style={{ width: "60px", height: "60px" }}
                        />
                      </TableCell>
                      <TableCell align="center">{item.price}$</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell align="center">
                        {item.quantity * item.price}$
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() => 
                            dispatch(removeItem(item))
                          }
                          style={{
                            backgroundColor: "red",
                            color: "#ffffffff",
                          }}
                        >
                          remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "end", marginBottom: "5px" }}
          >
            <Link to="/payment">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "green",
                fontWeight: "bold",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "green", border: "red"},
              }}
            >
              Buy
            </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CartPage;
