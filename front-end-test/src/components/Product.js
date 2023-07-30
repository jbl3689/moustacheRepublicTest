export default function Product({ title, price, description, imageURL }) {
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
        <div>
          <span style={{ color: "#888888" }}>Size</span>
          <span style={{ color: "#C90000" }}>*</span>
          <div className="boxContainer">
            <div className="box">S</div>
            <div className="box">M</div>
            <div className="box">L</div>
          </div>
          <button className="button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
