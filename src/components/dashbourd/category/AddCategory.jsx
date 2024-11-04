import { Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const AddCategory = () => {
  return (
<Box>
<Container>
    <Typography>Add category</Typography>
    <Box
          onSubmit={}
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
</Box>
</Container>
</Box>  
)
}

export default AddCategory