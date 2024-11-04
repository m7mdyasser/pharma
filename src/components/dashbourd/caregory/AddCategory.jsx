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
  import ClassIcon from '@mui/icons-material/Class';

  const AddCategory = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const [open, setOpen] = useState(false);
    const [err, setErr] = useState(false);

  
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
          "https://pharmapro.somee.com/api/Category/AddCategory",
          data
        );
        console.log(res.data);
        console.log(res.status);
        if (res.status === 201) {
          window.location.reload();
        }
      } catch (err) {
        console.log("Error:", err);
        handleClick();
        setErr(true)
      }
    };
  
    console.log(watch("example"));
    return (
        <Container
          sx={{
            width: { md: "70%" },
            borderRadius: "30px",
            // @ts-ignore
            backgroundColor: { xs: "white" },
            boxShadow: { xs: "none", md: ".5px .5px 15px " },
            padding: { xs: "0", md: "30px" },
            height: "320px"
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
            Add Category
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
                id="Category_Name"
                label="Category Name"
                error={Boolean(errors.name) || err === true}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ClassIcon />
                    </InputAdornment>
                  ),
                }}
                helperText={errors.name ? errors.name.message : null}
                {...register("name", {
                  required: "Please write Category name",
                })}
                sx={{ flex: 1 }}
              />
            </Stack>

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
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#303f93",
                  fontWeight: "bold",
                },
              }}
            >
              Add
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                The category is already exists
              </Alert>
            </Snackbar>
          </Box>
        </Container>
    );
  };
  
  export default AddCategory;
  