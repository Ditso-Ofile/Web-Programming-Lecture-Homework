import React from "react";

const PizzaTable = props => (
  <table>
    <thead>
      <tr>
        <th>Pizza Name</th>
        <th>Category</th>
        <th>Vegetarian?</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.pizzas.length > 0 ? (
        props.pizzas.map(pizza => (
          <tr key={pizza.id}>
            <td>{pizza.pname}</td>
            <td>{pizza.categoryname}</td>
            <td>{pizza.vegetarian == 1 ? "Yes (1)" : "No (0)"}</td>
            <td>
              <button onClick={() => { props.editRow(pizza); }}>Edit</button>
              <button onClick={() => props.deletePizza(pizza.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No pizzas found</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default PizzaTable;