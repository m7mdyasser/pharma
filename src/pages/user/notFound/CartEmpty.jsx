
import Typography from "@mui/material/Typography";
import { Box, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  const theme = useTheme();
  return (
    <Box sx={{display: "flex", flexDirection: "column" }}>
      <Box sx={{width: "20rem", display:"flex",justifyContent: "center",  marginX: "auto", marginBottom: "30px", marginTop: "0"}}>
      <img src="../../../../public/image/cart-with-sad-face.svg" alt="cartFace"  />
      </Box>
      <Typography align="center" sx={{color: theme.palette.secondary.main, marginBottom: "30px"}} variant="h4">
        Your Cart is empty
      </Typography>
      <Box sx={{display: "flex", marginX: "auto", gap: "15px"}}>
      <Link  to="/">
      <Button sx={{backgroundColor: theme.palette.primary.main, textTransform: "capitalize", color:"white", "&:hover": {backgroundColor: theme.palette.third.main}, fontSize: "1.2rem", }}>Back Home</Button>
      </Link>
      <Link  to="/shop">
      <Button sx={{backgroundColor: theme.palette.primary.main, textTransform: "capitalize", color:"white", "&:hover": {backgroundColor: theme.palette.third.main}, fontSize: "1.2rem"}}>go shop</Button>
      </Link>
      </Box>
    </Box>
  );
};

export default CartEmpty