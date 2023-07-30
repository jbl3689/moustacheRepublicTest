import React, { useEffect } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [productDetails, setProductDetails] = React.useState(null);
  const [productTitle, setProductTitle] = React.useState("");

  useEffect(() => {
    async function getProductDetails() {
      try {
        const response = await fetch(
          "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
        );
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }
    getProductDetails();
  }, []);

  return (
    <div className="App">
      <Cart></Cart>
      {productDetails ? (
        <Product
          title={productDetails.title}
          price={productDetails.price}
          description={productDetails.description}
          imageURL={productDetails.imageURL}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
