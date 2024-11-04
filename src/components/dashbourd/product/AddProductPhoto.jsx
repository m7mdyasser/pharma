import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useState } from "react";
import {
  Alert,
  Box,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddProductPhoto = () => {
  const [done, setDone] = useState();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile)
    
    if (selectedFile) {
    const reader = new FileReader();
    const fileData = JSON.stringify(selectedFile);
    window.localStorage.setItem("selectedImage", fileData);
    
    reader.onload = (event) => {
      window.localStorage.setItem("selectedImage", event.target.result);

      const imageDetails = {
        name: selectedFile.name,
        size: selectedFile.size,
      };
      window.localStorage.setItem("ImageData", JSON.stringify(imageDetails));
    };
    reader.readAsDataURL(selectedFile);

  }
};






const selectedImageData = window.localStorage.getItem("selectedImage");
const backgroundImage =  selectedImageData ? `url(${selectedImageData})` : "none"; 

console.log(selectedImage)


const selectedImageDetails = JSON.parse(window.localStorage.getItem("ImageData"));
const ProductPhotoName = selectedImageDetails ? selectedImageDetails.name : null;
const ProductPhotoSize = selectedImageDetails ? selectedImageDetails.size : null;


  const PhotoID = window.localStorage.getItem("photoID");
  const onSubmit = async () => {
    event.preventDefault();
    if (!selectedImage) return;
    const formData = new FormData();
    formData.append("file", selectedImage);
    console.log(selectedImage)

    try {
      let res = await axios.post(
        "https://pharmapro.somee.com/api/Storage/UploadImage",
        formData
      );
      if (res.status === 200) {
        window.localStorage.setItem("photoID", res.data.id);
      }
      console.log(res);
    } catch (error) {
      console.error("Error uploading image:", error);
      setDone(true);
      setOpen(true);
    }
  };

  return (
    <Box
      onSubmit={onSubmit}
      component="form"
      marginBottom={"40px"}
      sx={{ transition: "400ms" }}
    >
      <Box
        sx={{
          width: "60%",
          margin: "auto",
          border: "4px gray dashed",
          height: "500px",
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {backgroundImage === "none" ?  <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<AddPhotoAlternateIcon />}
          sx={{
            textTransform: "capitalize",
            marginX: "40%",
            marginY: "30%",
            width: "150px",
            display:  "flex",
            backgroundColor: "#303f9f",
            "&:hover": { backgroundColor: "#303fbf" },
          }}
        >
          Upload Photo
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            id="file"
            onChange={handleImageChange}
          />
        </Button>: null}
      </Box>
      <Stack
        alignItems={"center"}
        direction={"row"}
        sx={{
          marginY: "20px",
          display: backgroundImage === "none" ? "none" : "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <InsertPhotoIcon sx={{ fontSize: "2rem" }} />
        </Box>
        <Stack sx={{ marginLeft: "20px" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            {ProductPhotoName}
          </Typography>
          <Typography sx={{ color: "#a9a8a8" }}>
            {ProductPhotoSize} KB
          </Typography>
        </Stack>
        {done === false ? (
          <IconButton
            sx={{ marginBottom: "30px", marginLeft: "20px", color: "red" }}
            disabled
          >
            <ClearIcon />
          </IconButton>
        ) : (
          <IconButton
            sx={{ marginBottom: "30px", marginLeft: "20px", color: "red" }}
            onClick={() => {setSelectedImage(null)
              window.localStorage.removeItem("ImageData")
              window.localStorage.removeItem("selectedImage")
              window.location.reload()
            }}
          >
            <ClearIcon />
          </IconButton>
        )}
      </Stack>
      <Stack
        direction={"row"}
        sx={{ marginX: "auto", justifyContent: "space-between" }}
      >
        {PhotoID === null? (
          <Button
            disabled
            onClick={() => {
              window.localStorage.removeItem("photoID");
              setSelectedImage(null);
            }}
            color="error"
            variant="outlined"
            sx={{
              marginY: "40px",
              fontSize: "1.2rem",
              paddingX: "20px",
            }}
          >
            delete
          </Button>
        ) : (
          <Button
            onClick={() => {
              window.localStorage.removeItem("photoID");
              setSelectedImage(null);
            }}
            color="error"
            variant="outlined"
            sx={{
              marginY: "40px",
              fontSize: "1.2rem",
              paddingX: "20px",
            }}
          >
            delete
          </Button>
        )}
        {backgroundImage ? (
          done === false ? (
            <Button
              variant="contained"
              type="submit"
              sx={{
                marginY: "40px",
                fontSize: "1.3rem",
                paddingX: "20px",
              }}
            >
              Done
            </Button>
          ) : (
            <Button
              type="submit"
              sx={{
                marginY: "40px",
                fontSize: "1.3rem",
                backgroundColor: "#303f9f",
                "&:hover": { backgroundColor: "#303fbf" },
                color: "white",
                paddingX: "20px",
              }}
              onClick={() => setDone(false)}
            >
              submitt
            </Button>
          )
        ) : (
          <Button
            variant="contained"
            type="submit"
            disabled
            sx={{
              marginY: "40px",
              fontSize: "1.3rem",
              paddingX: "20px",
            }}
          >
            submit
          </Button>
        )}
      </Stack>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error">
          Please re-enter the image. There are problems with the Internet
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddProductPhoto;
