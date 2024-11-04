import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../../redux/slice/customeraccountslice";

const ManageAccount = () => {

  const blockUserAction = async (id) => {
      try {
        let res = await axios.post(
          `https://pharmapro.somee.com/api/User/BlockUser?UserId=${id}`
        );
        if (res.status === 201 || res.status === 200) {
          window.location.reload();
        }
      } catch (err) {
        console.log("Error:", err);
      }
    };
    const dispatch = useDispatch();
    const data = useSelector((state) => state.dataOfCustomer.users.users);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);
  console.log(data)
  return (
    <Box>
      <Container>
        <Box marginBottom={"30px"}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell align="center">Block</TableCell>
                  <TableCell align="center">delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.gmail}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{
                          backgroundColor: "darkRed",
                          color: "white",
                          "&:hover": { backgroundColor: "red" },
                        }}
                      >
                        delete
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{
                          backgroundColor: "Black",
                          color: "white",
                          "&:hover": { backgroundColor: "#424242" },
                        }}
                        onClick={() => {blockUserAction(item.id)
                          console.log(item.id)
                        }}
                      >
                        Block
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default ManageAccount;
