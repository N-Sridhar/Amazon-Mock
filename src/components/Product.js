import React from "react";
import "../styles/Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                🌟
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
