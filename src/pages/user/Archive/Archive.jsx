import MediaCard from "../../../components/customer/product/product";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch, useSelector} from 'react-redux';

const Archive = () => {
    const theme = useTheme();

  
  
  
    const products = useSelector((state) => state.archiveData)
    const dispatch = useDispatch();
  

 
    const styles = {
      width: "100%",
      fontSize: " 18px",
      padding: " 10px 5px 10px 30px",
      outline: " transparent",
      borderRadius: " 10px",
      border: `1px solid ${theme.palette.secondary.main} `,
    };
  

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
        {products && products.map((product) => (
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
    </>  )
}

export default Archive