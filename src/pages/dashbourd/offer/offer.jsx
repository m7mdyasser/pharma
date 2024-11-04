import OfferProduct from "../../../components/dashbourd/product/offer.product";
import { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";


const Offer = () => {
  const theme = useTheme();
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [makeOffer, setMakeOffer] = useState("none");
  const [offerdProduct , setOfferdProduct] =useState(null)
  const [products, setProducts] = useState([]);

  const offerRef = useRef()

  const onSubmit = async (data) => {
    try {
      let res = await axios.post(
        "https://pharmapro.somee.com/api/Product/AddOffer",
        data
      );
      if(res.status === 201){
        
        window.location.reload();
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const submitOffer = () => {
    if (typeof parseInt(offerRef.current.value) == "number" && parseInt(offerRef.current.value)  > 0 && parseInt(offerRef.current.value) < 100 ) {
    console.log(parseInt(offerRef.current.value))
    offerdProduct.discount = offerRef.current.value
    offerdProduct.offer = true
    offerRef.current.value = "";
    setMakeOffer("none");
    console.log(offerdProduct.price);
    
    onSubmit()
    
    }
}

  useEffect(() => {
    fetch("https://pharmapro.somee.com/api/Product/GetProductList")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  useEffect(() => {
    setFilterdProducts(products);
  }, [products]);

  useEffect(() => {
    const filter = products.filter((products) =>
      products.name.toLowerCase().includes(inputValue)
    );
    setFilterdProducts(filter);
  }, [inputValue]);
  // style
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
          width: { sx: "300px", md: "450px" },
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
        {filterdProducts.map((product, index) => (
          <div key={index} onClick={() => {
            setMakeOffer("block");
            setOfferdProduct(product);
          }}>
            <OfferProduct
              key={product.id}
              image={product.photo}
              productName={product.name}
              price={product.price}
              id={product.id}
              discount={product.discount}
              offer={product.offer}
              data={product}
            />
          </div>
        ))}
        {/* the offer */}
        <div style={{ display: makeOffer }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              left: "0",
              top: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",

            }}
          >
            <div
              onClick={() => {
                setMakeOffer("none");
              }}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "rgb(0,0,0,80%)",
                left: "0",
                top: "0",
              }}>
            </div>
            <div style={{
              width: "400px",
              height: "400px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
              borderRadius: "20px",
              zIndex: "3"
            }}>
              {" "}
              <h2 style={{ fontWeight: "400", width: "200px" }}>
                Enter the discount{" "}
              </h2>
              <div style={{ width: "200px", }}>
                {" "}
                <input type="text" style={{ width: "200px", outline: "none" }} ref={offerRef} onKeyDown={(event) => {
                  if(event.key === "Enter"){
                  submitOffer();
                  }
                }} />
              </div>{" "}
              <input type="submit" value="submit" onClick={() => submitOffer()} />
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default Offer;