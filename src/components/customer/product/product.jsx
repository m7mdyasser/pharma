import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/slice/SliceToCart";
import { addArchive } from "../../../redux/slice/ArchiveSlice";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

export default function MediaCard({ image, productName, price, id, data }) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [savedProduct, setSavedProduct] = useState(false);
  const [added, setAdded] = useState(false);
  const cart = useSelector((state) => state.cart);
  const archive = useSelector((state) => state.archiveData);

  const dispatch = useDispatch();
  const colorcontrast =
    // @ts-ignore
    theme.palette.favColor.contrast;
  const color =
    // @ts-ignore
    theme.palette.favColor.main;

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };



  const handleSaved = async () => {
    try {
      const findProducts = archive.find((item) => item.id === id);
      if (findProducts) {
        setSavedProduct(true);
      } else {
        setSavedProduct(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdded = async () => {
    try {
      const findProduct = cart.find((item) => item.id === id);
      if (findProduct) {
        setAdded(true);
      } else {
        setAdded(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleSaved();
  }, [archive, id]);

  useEffect(() => {
    handleAdded();
  }, [cart, id]);
  
  console.log(archive);
  return (
    <Card
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="card"
      sx={{
        minWidth: 220,
        maxWidth: "220px",
        padding: 1,
        boxShadow: " 3px 3px 15px black",
      }}
    >
      <CardMedia
        sx={{ height: 260, borderRadius: "8px", position: "relative" }}
        title="productImage"
      >
        <img
          src={image} 
          alt="Product" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <CardActions sx={{ width: "100%", height: "100%" }}>
          <Button
            title="save"
            onClick={() => {
              dispatch(addArchive(data));
              handleSaved();
            }}
            sx={{
              display: isHovered ? "inline-flex" : "none",
              position: "absolute",
              top: "10px",
              left: "5px",
              backgroundColor: color,
              "&:hover": { backgroundColor: color },
            }}
          >
            <BookmarkAddOutlinedIcon
              sx={{
                display: savedProduct ? "none" : "inline-flex",
                color: colorcontrast,
              }}
            />
            <BookmarkAddRoundedIcon
              sx={{
                display: savedProduct ? "inline-flex" : "none",
                color: "green",
              }}
            />
          </Button>
          <Button
            title="add to cart"
            onClick={() => {
              dispatch(addItem(data));
              handleAdded();
            }}
            sx={{
              display: isHovered ? "inline-flex" : "none",
              position: "absolute",
              bottom: "10px",
              left: "5px",
              marginLeft: "0 !important",
              color: theme.palette.secondary.main,
              backgroundColor: color,
              "&:hover": { backgroundColor: color },
            }}
          >
            <AddShoppingCartIcon
              sx={{
                color: added ? "green" : colorcontrast,
              }}
            />
          </Button>
        </CardActions>
      </CardMedia>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "10px 4px 0 !important ",
        }}
      >
        <Typography
          title="this is title"
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "16px",
            overflow: "hidden",
            color: theme.palette.secondary.main,
            lineClamp: "2",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          {productName}
        </Typography>
        <Typography variant="body2" component="div">
          {price}
          <Typography
            sx={{
              display: "inline",
              color: theme.palette.primary.main,
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            $
          </Typography>
        </Typography>
        {/* ################################################  الثمن ################################################################## */}
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: theme.palette.primary.main,
          }}
        >
          pharmapro
        </Typography>
      </CardContent>
    </Card>
  );
}
