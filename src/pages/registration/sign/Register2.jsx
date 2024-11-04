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
import PhoneIcon from "@mui/icons-material/Phone";

import PublicIcon from "@mui/icons-material/Public";
import SignpostIcon from "@mui/icons-material/Signpost";
import MedicationLiquidSharpIcon from "@mui/icons-material/MedicationLiquidSharp";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export default function Register2() {
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
    handleClick();
    try {
      let res = await axios.post(
        "https://pharmapro.somee.com/api/User/CompleteRegisteration",
        data
      );
      console.log(res.data.data);
      if ((res.status === 201) | 200) {
        window.location.pathname = "/login";
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };
  const usernameId = window.localStorage.getItem("usernameId");

  console.log(watch("example"));
  return (
    <>
      <Container
        sx={{
          width: { md: "75%", xs: "100%" },
          border: { xs: "0", md: " 2px" },
          borderRadius: "30px",
          // @ts-ignore
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
        <TextField
              type="text"
              id="Name"
              label="Name"
              error={Boolean(errors.username)}
              helperText={errors.username ? errors.username.message : null}
              {...register("userId", {})}
              sx={{display:"none"}}
              defaultValue={usernameId}
            />
          <TextField
            type="text"
            id="Name"
            label="Name"
            error={Boolean(errors.name)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon
                    sx={{ color: theme.palette.primary.main }}
                  />
                </InputAdornment>
              ),
            }}
            helperText={errors.name ? errors.name.message : null}
            {...register("name", {
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
          <TextField
            type="number"
            id="Age"
            label="Age"
            error={Boolean(errors.age)}
            helperText={errors.age ? "You must be older " : null}
            {...register("age", {
              required: true,
              min: 15,
              max: 100,
            })}
            sx={{ width: "100px" }}
          />

          <Stack
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
            gap={2}
          >
            <TextField
              sx={{ flex: 1 }}
              type="text"
              id="City"
              label="City"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PublicIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.city)}
              helperText={errors.city ? "You should enter your city" : null}
              {...register("city", {
                required: true,
              })}
            />
            <TextField
              sx={{ flex: 1 }}
              type="text"
              id="Street"
              label="Street"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SignpostIcon sx={{ color: theme.palette.primary.main }} />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.street)}
              helperText={errors.street ? "You should enter your Street" : null}
              {...register("street", {
                required: true,
              })}
            />
          </Stack>
          <TextField
            id="number"
            label="Number"
            error={Boolean(errors.phoneNumber)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: theme.palette.primary.main }} />
                </InputAdornment>
              ),
            }}
            helperText={
              errors.phoneNumber ? "please enter your whatsApp Number" : null
            }
            {...register("phoneNumber", {
              required: true,
              pattern: phoneRegExp,
            })}
          />
          <TextField
            sx={{ flex: 1 }}
            type="text"
            id="ChronicDiseases"
            label="Chronic Diseases"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MedicationLiquidSharpIcon
                    sx={{ color: theme.palette.primary.main }}
                  />
                </InputAdornment>
              ),
            }}
            {...register("chronicDisease", {})}
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
                color: theme.palette.primary.main,
                backgroundColor: "#fff",
                fontWeight: "bold",
              },
            }}
            onClick={() => window.localStorage.removeItem("usernameId")}
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
    </>
  );
}
