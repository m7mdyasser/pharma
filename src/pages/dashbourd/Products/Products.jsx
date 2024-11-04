import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorytData } from "../../../redux/slice/categoryDataSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.CategoryData.categories);
  useEffect(() => {
    dispatch(fetchCategorytData());
  }, []);

  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-around"}>
        {category &&
          category.map((item) => <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/public/image/pngegg.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/dashboard/products/categoryProduct">
            <Button size="medium"  sx={{textTransform: "capitalize", color: ""}}>
              show product
            </Button>
            </Link>
          </CardActions>
        </Card>)}
      </Stack>
    </Box>
  );
};

export default Products;
