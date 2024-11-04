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
import {
  fetchCategorytData,
} from "../../../redux/slice/categoryDataSlice";
import axios from "axios";

const CategoryData = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.CategoryData.categories);
  useEffect(() => {
    dispatch(fetchCategorytData());
  }, []);

  const deleteCategoryAction = async (id) => {
    try {
      let res = await axios.delete(
        `https://pharmapro.somee.com/api/Category/DeleteCategory?Id=${id}`
      );
      if (res.status === 201 || res.status === 200) {
        window.location.reload();
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <Container>
      <Box marginBottom={"30px"}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {category &&
                category.map((item) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={item.id}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      <Button
                        style={{
                          backgroundColor: "darkred",
                          color: "#ffffffff",
                          "&:hover": { backgroundColor: "red" },
                        }}
                        onClick={() => {
                          deleteCategoryAction(item.id);
                          console.log(item.id);
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

export default CategoryData;
