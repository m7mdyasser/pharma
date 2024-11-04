import {
  Button,
  Container,
  Stack,
  useTheme,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = () => {
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

  const onSubmit = async (data) => {
    try {
      let res = await axios.post(
        "https://pharmapro.somee.com/api/User/Login",
        data
      );
      console.log(res)
      if (res.status === 201 | 200) {
        window.location.pathname = "/"
        window.localStorage.setItem("role", res.data.data.role)
        window.localStorage.setItem("name", res.data.data.username)
        window.localStorage.setItem("userIDLog", res.data.data.id)
        window.localStorage.setItem("token", res.data.data.token)
      }
    } catch (err) {
      console.log("Error:", err);
      handleClick();
      setError(true)
    }
  };

  console.log(watch("example"));

  return (
    <>
      <Container
        sx={{
          width: { md: "45%", xs: "100%" },
          border: { xs: "none", md: " 2px solid window.theme.palette" },
          borderRadius: "30px",
          backgroundColor: { xs: "white", md: theme.palette.favColor.main },
          boxShadow: { xs: "none", md: ".5px .5px 15px " },
          padding: { xs: "0", md: "30px" },
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
            color: theme.palette.primary.main,
            borderBottom: "2px solid theme.palette.text.primary",
            width: "50%",
          }}
        >
          Login
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
          <Stack gap={3}>
          <TextField
              sx={{ flex: 1 }}
              type="email"
              id="email"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.email) || error}
              helperText={errors.email ? errors.email.message : null}
              {...register("email", {
                pattern: {
                  value: regEmail,
                  message:
                    "Please enter a valid email address ending with @gmail.com",
                },
                required: "Your should enter your Email",
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
                    <LockIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.password) || error}
              helperText={
                errors.password ? "try agin" : null
              }
              {...register("password", {
                required: true,
              })}
            />
          </Stack>

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "15rem",
              height: "3rem",
              display: "flex",
              ml: "auto",
              mr: "auto",
              alignItems: "center",
              background: theme.palette.primary.main,
              fontSize: "1.2rem",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#273384",
                fontWeight: "bold",
              },
            }}
          >
            Login
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert severity="error">Email or password was wrong</Alert>
          </Snackbar>
        </Box>
      </Container>
    </>
  );
};

export default Login;
