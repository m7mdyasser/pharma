import {
  Alert,
  Button,
  Container,
  Snackbar,
  Stack,
  useTheme,
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

export default function Register1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const theme = useTheme();
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
        "https://pharmapro.somee.com/api/User/RegisterAsUser",
        data
      );
      console.log(res.data);
      console.log(res.data.status);
      if ((res.status === 201) | 200) {
        window.localStorage.setItem("usernameId", res.data.data.userId);
        window.location.pathname = "/registration2/register2"
      }
    } catch (err) {
      console.log("Error:", err);
      handleClick();
    }
  };

  console.log(watch("example"));


  return (
    <>
      <Container
        sx={{
          width: { md: "45%", xs: "100%" },
          // @ts-ignore
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
            borderBottom: "2px solid ",
            width: "90%",
          }}
        >
          Registration
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
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <TextField
              type="text"
              id="Name"
              label="Name"
              error={Boolean(errors.username)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
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
            autoComplete="true"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: theme.palette.primary.main }} />
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
                  <LockIcon sx={{ color: theme.palette.primary.main }} />
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
              background: theme.palette.primary.main,
              fontSize: "1.2rem",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#273384",
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
            <Alert severity="error">The email is already activated</Alert>
          </Snackbar>
        </Box>
      </Container>
    </>
  );
}
