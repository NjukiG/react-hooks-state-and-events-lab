import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)

  function handleClick(){
    setIsAdded(isAdded => !isAdded);
  }

  const classHandler = isAdded ? "in-cart" : "";


  return (
    <li className={classHandler}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isAdded ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
