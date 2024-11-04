import { useEffect, useState } from "react";
import MediaCard from "../../../components/customer/product/product";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, CircularProgress, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from "../../../redux/slice/ProductSlice";


export default function Shop() {
  // consts
  const theme = useTheme();
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);



  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
    setLoading(false);
  },[])


  useEffect(() => {
    setFilterdProducts(products);
  }, [products]);
  
  useEffect(() => {
    if (products) {
      const filter = products.filter((product) =>
        product.name && product.name.toLowerCase().includes(inputValue)
    );
      setFilterdProducts(filter);
    }
  }, [inputValue, products]);



  const styles = {
    width: "100%",
    fontSize: " 18px",
    padding: " 10px 5px 10px 30px",
    outline: " transparent",
    borderRadius: " 10px",
    border: `1px solid ${theme.palette.secondary.main} `,
  };

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Box
        sx={{
          width: {sx: "300px", md:"450px"},
          margin: " 20px auto 35px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          color: theme.palette.primary.main,
        }}
      >
        <SearchIcon
          sx={{
            position: "absolute",
            top: "50%",
            transform: " translate(0, -50%)",
            left: "5px",
          }}
        />
        <input
          type="text"
          style={styles}
          className="search"
          placeholder="Search"
          onInput={(e) => {
            setInputValue(
              e.target// @ts-ignore
              .value
                .toLowerCase()
            );
          }}
        />
      </Box>
      <Grid
        container
        sx={{
          margin: "auto",
          width: {
            xs: "100%",
            sm: "500px",
            md: "950px",
            lg: "1000px",
            xl: "1250px",
          },
          gap: "20px",
          justifyContent: { xs: "start", sm: "center" },
          overflow: { xs: "auto", sm: "visible" },
          flexWrap: { xs: "nowrap", sm: "wrap" },
        }}
      >
        {filterdProducts && filterdProducts.map((product) => (
          <MediaCard
            key={product.id}
            image={product.photo}
            productName={product.name}
            price={product.price}
            id={product.id}
            data={product}
          />
        ))}
      </Grid>
    </>
  );
}
