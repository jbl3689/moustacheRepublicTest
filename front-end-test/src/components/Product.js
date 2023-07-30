import { useState } from "react";
import SizeBox from "./SizeBox";

export default function Product({
  title,
  price,
  description,
  imageURL,
  sizeOptions,
  cart,
  addToCart,
}) {
  const [selectedSize, setSelectedSize] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  function handleSizeClick(label) {
    if (label === selectedSize) setSelectedSize("");
    else setSelectedSize(label);

    setIsSelected(!isSelected);
  }

  function handleAddToCart() {
    if (selectedSize) {
      const newItem = {
        title,
        price,
        description,
        imageURL,
        size: selectedSize,
        count: 1,
      };

      // Check if the item is already in the cart
      const itemIndex = cart.findIndex(
        (item) => item.title === newItem.title && item.size === newItem.size
      );

      if (itemIndex === -1) {
        // If the item is not already in the cart, add it to the cart array
        addToCart(newItem); // Call the addToCart function passed from App.js
      } else {
        // If the item is already in the cart, update its count
        const updatedCart = [...cart];
        updatedCart[itemIndex].count += 1;
      }

      // Clear the selected size after adding to the cart
      setSelectedSize("");
    }
  }

  return (
    <div className="container">
      <div className="image">
        <img className="img" src={imageURL} alt="Tee shirt"></img>
      </div>
      <div className="details">
        <h1>{title}</h1>
        <hr></hr>
        <h3>${price}.00</h3>
        <hr></hr>
        <p className="description">{description}</p>

        <span style={{ color: "#888888" }}>Size</span>
        <span style={{ color: "#C90000" }}>*</span>
        <span style={{ color: "#000000" }}>{selectedSize}</span>

        <div className="boxContainer">
          {sizeOptions !== null ? (
            sizeOptions.map((option) => (
              <SizeBox
                onClick={() => handleSizeClick(option.label)}
                isSelected={selectedSize === option.label}
                label={option.label}
              />
            ))
          ) : (
            <SizeBox isSelected={false} label="M" />
          )}
        </div>
        <button className="button" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
