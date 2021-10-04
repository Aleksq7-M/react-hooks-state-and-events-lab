import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function addToCart(){
    setInCart(!inCart);
  }

  const cartCheck = inCart ? 'in-cart' : null

  return (
    <li className={cartCheck}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={inCart ? 'remove' : 'add'}>{inCart ? 'Remove From Cart' : 'Add To Cart'}</button>
    </li>
  );
}

export default Item;
