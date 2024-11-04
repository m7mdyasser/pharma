import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../../redux/slice/customeraccountslice";

const CustomerAccount = () => {


  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataOfCustomer.users.users);

  console.log(data)
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);
  console.log(data)

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gmail",
      headerName: "gmail",
      flex: 1,
      cellClassName: "name-column--cell",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phoneNumber",
      headerName: "Number",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "city",
      headerName: "city",
      type: "text",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "street",
      headerName: "street",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "chronicDisease",
      headerName: "chronicDisease",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];
  const rows = data;
  return (
    <Box sx={{ height: "100%", width: {xs: "700px", md:"100%"}, mx: "auto" }}>
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        // @ts-ignore
        columns={columns}
        rows={rows}
      />
    </Box>
  );
};

export default CustomerAccount;
