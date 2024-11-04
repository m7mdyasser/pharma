import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import {

  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Input = styled(TextField)({
  display: "block",
  marginBottom: 16,
});

const Payment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
const userToken = window.localStorage.getItem("token")

  const onSubmit = async (data) => {
    try {
      const token = userToken
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      };
      const orderData = { ...data, orderItems: orderItems };
      let res = await axios.post(
        "https://pharmapro.somee.com/api/Order/AddOrder",
        orderData,
        config,
      );
      if(res.status === 201){
        window.location.pathname="/"
        window.localStorage.removeItem("cart")
      }
      console.log(res)
    } catch (err) {
      console.log("Error:", err);
      handleClick();
      setError(true);
    }
  };
  const Cart = useSelector((state) => state.cart);

  const name = window.localStorage.getItem("name");
  const totalPrice = Cart.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);


  const orderItems = Cart.map(product => ({
    productId: product.id,
    amount: product.quantity
  }));
  
  console.log(Cart);
  return (
    <Card sx={{ maxWidth: 700, margin: "auto", padding: 4 }}>
      <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                noValidate
                autoComplete="off">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Billing Information
        </Typography>
        <Input
          label="Name"
          variant="outlined"
          fullWidth
          error={Boolean(errors.username)}
          helperText={errors.username ? errors.username.message : null}
          {...register("username", {
            required: "You must write your name",
            validate: {
              minLength: (value) =>
                value.length >= 3 || "Name must be at least 3 characters",
              isNotNumber: (value) =>
                isNaN(value) ? true : "You must write your real name",
            },
          })}
          sx={{ flex: 1 }}
          defaultValue={name}
        />
        <Input
          label="Address"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          style={{ marginBottom: "16px" }}
          error={Boolean(errors.address)}
          helperText={errors.address ? errors.address.message : null}
          {...register("address", {
            required: "You must write your name",
            validate: {
              minLength: (value) =>
                value.length >= 3 || "Address must be at least 3 characters",
              isNotNumber: (value) =>
                isNaN(value) ? true : "You must write your real Address",
            },
          })}
          sx={{ flex: 1 }}
        />
        <Input
          defaultValue={totalPrice}
          variant="outlined"
          type="number"
          sx={{ display: "none" }}
          {...register("totalPrice", {
            required: true,
          })}
        />
        <Typography variant="h6" gutterBottom>
          Payment Options
        </Typography>
        <div style={{ marginBottom: "16px" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: "8px" }}
          >
            Pay with Credit
          </Button>
          {/* PayPal button removed */}
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={() => window.localStorage.removeItem("cart")}
        >
          Pay Now
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">Email or password was wrong</Alert>
        </Snackbar>
        {error && (
          <Typography color="error" gutterBottom>
            {error}
          </Typography>
        )}
      </CardContent>
      </Box>
    </Card>
  );
};

export default Payment;
