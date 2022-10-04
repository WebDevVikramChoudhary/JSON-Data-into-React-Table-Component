import React from "react";
import "./App.css";

let products = [
  {
    id: 1,
    name: "Moto G5",
    quantity: 2,
    price: 13000
  },
  {
    id: 2,
    name: "Racold geyser",
    quantity: 3,
    price: 6000
  },
  {
    id: 3,
    name: "Dell inspiron",
    quantity: 4,
    price: 50000
  }
];

function JsonDataDisplay() {
  const DisplayData = products.map((products) => {
    return (
      <tr>
        <td>{products.id}</td>
        <td>{products.name}</td>
        <td>{products.quantity}</td>
        <td>{products.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Product List</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
