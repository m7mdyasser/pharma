import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPharmacistData } from "../../../redux/slice/acountPharmacistSlice";
import axios from "axios";

const PharmacistData = () => {
  const dispatch = useDispatch();
  const pharmacist = useSelector((state) => state.PharmacistData);
  useEffect(() => {
    dispatch(fetchPharmacistData());

    const deleteParmacistAction = async (id) => {
      try {
        let res = await axios.delete(
          `URl${id}`
        );
        if (res.status === 201 || res.status === 200) {
          window.location.reload();
        }
      } catch (err) {
        console.log("Error:", err);
      }
    };

  }, []);
  return (
    <Container>
      <Box marginBottom={"30px"}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pharmacist.map((item) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={item.id}
                >
                  <TableCell align="center" component="th" scope="row">
                    {item.username}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {item.email}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    <Button
                    onClick={() => deleteParmacistAction(item.id)}
                      style={{
                        backgroundColor: "darkred",
                        color: "#ffffffff",
                        "&:hover": {backgroundColor: "red"}
                      }}
                    >
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default PharmacistData;
