import { Box, Typography, useTheme } from "@mui/material";
import Animation from "../../../../public/animation/cartAnimation.json";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";

const Cart = () => {
  const Cart = useSelector((state) => state.cart);
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: "fixed",
        right: "0",
        top: "30%",
        zIndex: "20",
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50%",
        padding: "10px",
      }}
    >
      <Box >
        <Typography
          sx={{
            position: "absolute",
            left: Cart.length < 10 ? "-5px": "-12px",
            fontSize: "1.2rem",
            top: Cart.length < 10 ? "2px": "-3px",
            zIndex: "-2",
            color: "white",
            paddingX: Cart.length < 10 ? "8px": "4px",
            paddingY: Cart.length < 10 ? "0": "2px",
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main
          }}
        >
        {Cart.length}
        </Typography>
        <Box sx={{width: "50px", height: "50px", marginX: "auto", zIndex:"677"}}>
        <Lottie
          autoplay
          loop
          animationData={Animation}
        />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
