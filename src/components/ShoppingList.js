import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleChange(event){
    if(event.target.value === "All"){
      setSelectedCategory(items)
    }else if(event.target.value === "Produce"){
      setSelectedCategory(items[1])
    }else if(event.target.value === "Dairy"){
      setSelectedCategory(items[2])
    }else{
      setSelectedCategory(items[3])
    }

  }

  // I didnt finish up the above function. Got tired and the filter method 
  // just couldn't click in my mind. 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
