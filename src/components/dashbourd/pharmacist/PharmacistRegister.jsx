import {
  Alert,
  Button,
  Container,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;



const PharmacistRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);

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
        "https://pharmapro.somee.com/api/User/RegisterAsPharmacist",
        data
      );
      console.log(res.data);
      console.log(res.status);
      if (res.status === 201) {
        window.location.reload();
        handleClick();
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  console.log(watch("example"));
  return (
      <Container
        sx={{
          width: {xs: "90%", md: "70%" },
          borderRadius: "30px",
          // @ts-ignore
          backgroundColor: { xs: "", md: "white" },
          boxShadow: { xs: "none", md: ".5px .5px 15px " },
          padding: { xs: "0", md: "30px" },
          marginBottom: "30px"
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginX: "auto",
            marginBottom: "35px",
            padding: "15px",
            fontSize: "1.8rem",
            fontWeight: "bold",
            borderBottom: "2px solid ",
            width: "90%",
            color: "#303f9f",
          }}
        >
          Create Pharmacist
        </Typography>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          noValidate
          autoComplete="off"
        >
          <Stack
            gap={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <TextField
              type="text"
              id="Name"
              label="Name"
              error={Boolean(errors.username)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
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
            />
          </Stack>

          <TextField
            sx={{ flex: 1 }}
            type="email"
            id="Email"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            error={Boolean(errors.email)}
            helperText={errors.email ? "You should enter your Email" : null}
            {...register("email", {
              pattern: regEmail,
              required: true,
            })}
          />
          <TextField
            sx={{ flex: 1 }}
            type="password"
            id="Password"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            error={Boolean(errors.password)}
            helperText={
              errors.password ? "You should enter your Password" : null
            }
            {...register("password", {
              pattern: regPassword,
              required: true,
            })}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: { xs: "100%", md: "70%" },
              height: "3rem",
              marginX: "auto",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
              backgroundColor: "#303f9f",
              "&:hover": {
                backgroundColor: "#303f93",
                fontWeight: "bold",
              },
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
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Complete the registration
            </Alert>
          </Snackbar>
        </Box>
      </Container>
  );
};

export default PharmacistRegister;
