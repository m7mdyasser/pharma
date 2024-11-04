import {
  Alert,
  Button,
  MenuItem,
  Snackbar,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const onSubmit = async (data) => {
    try {
      let res = await axios.post(
        "https://pharmapro.somee.com/api/Product/AddProduct",
        data
      );
      console.log(res.data);
      console.log(res.data.status);
      if (res.status === 201 | 200) {
        console.log(res.data.status);

      }
    } catch (err) {
      console.log("Error:", err);
      handleClick();

    }
  };

  console.log(watch("example"));
  const photosID = window.localStorage.getItem("photoID");
  const category = useSelector((state) => state.CategoryData.categories);
  console.log(category);
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "90%",
        marginX: "auto",
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} gap={2}>
        <TextField
          type="text"
          id="Name"
          label="Name"
          error={Boolean(errors.name)}
          helperText={errors.name ? "You should enter product Name" : null}
          {...register("name", { required: true })}
          sx={{ flex: 1 }}
        />
        <TextField
          type="text"
          id="description"
          label="Description"
          error={Boolean(errors.description)}
          helperText={
            errors.description ? "You should enter product description" : null
          }
          {...register("description", { required: true })}
          sx={{ flex: 1 }}
        />
      </Stack>

      <TextField
        type="text"
        id="photo"
        label="Photo"
        error={Boolean(errors.photos)}
        helperText={errors.photos ? "You should enter product Photo" : null}
        {...register("photos", { required: true })}
        sx={{ direction: "none", display: "none" }}
        defaultValue={[photosID]}
      />
      <TextField
        type="number"
        id="amount"
        label="Amount"
        error={Boolean(errors.amount)}
        helperText={errors.amount ? "You should enter product amount" : null}
        {...register("amount", { required: true })}
      />
      <TextField
        type="text"
        id="BarCode"
        label="Bar Code"
        error={Boolean(errors.barcode)}
        helperText={errors.barcode ? "You should enter product bar code" : null}
        {...register("barcode", { required: true })}
      />

      <Stack direction={"row"} justifyContent={"space-around"}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Active</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            <FormControlLabel
              {...register("active", {
                required: true,
                value: value,
                onChange: (e) => setValue(e.target.value),
              })}
              value={true}
              control={<Radio />}
              label="true"
            />
            <FormControlLabel
              {...register("active", {
                required: true,
                value: value,
                onChange: (e) => setValue(e.target.value),
              })}
              value={false}
              control={<Radio />}
              label="false"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Sold Out
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            <FormControlLabel
              {...register("soldOut", {
                required: true,
                value: value,
                onChange: (e) => setValue(e.target.value),
              })}
              value={true}
              control={<Radio />}
              label="true"
            />
            <FormControlLabel
              {...register("soldOut", {
                required: true,
                value: value,
                onChange: (e) => setValue(e.target.value),
              })}
              value={false}
              control={<Radio />}
              label="false"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <TextField
        type="number"
        id="price"
        label="Price"
        error={Boolean(errors.price)}
        helperText={errors.price ? "You should enter product price" : null}
        {...register("price", { required: true })}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        error={Boolean(errors.categoryId)}
        helperText={errors.categoryId ? "Please select category" : null}
        {...register("categoryId", { required: true })}
      >
        {category &&
          category.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
      </TextField>
      <Button
        variant="contained"
        type="submit"
        sx={{
          display: "flex",
          width: "60%",
          textTransform: "capitalize",
          fontSize: "1.3rem",
          marginX: "auto"
        }}
      >
        submit
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          wrong
        </Alert>
      </Snackbar>
    </Box>
  );
}
