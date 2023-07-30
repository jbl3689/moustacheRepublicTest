import { useState } from "react";

export default function Cart({ cart }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav class="navLine">
        <div className="dropdown">
          <p class="cartLink" onClick={handleDropdownToggle}>
            My Cart
          </p>
          {dropdownOpen ? (
            <div className="dropdownContent">
              {cart.length > 0 ? (
                <ul>
                  {cart.map((item) => (
                    <li className="dropItem">
                      <div
                        className="dropImage"
                        style={{ backgroundImage: `url(${item.imageURL})` }}
                      ></div>
                      <div className="dropDetails">
                        <div>{item.title}</div>
                        <div>
                          {item.count}x ${item.price}.00
                        </div>
                        <div>Size: {item.size}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>There is nothing in your cart!</div>
              )}
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
