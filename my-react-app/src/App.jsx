import React, { useState } from "react";
import PizzaTable from "./tables/PizzaTable";
import AddPizzaForm from "./forms/AddPizzaForm";
import EditPizzaForm from "./forms/EditPizzaForm";
import "./App.css";

const App = () => {
  // Using actual data from your databaselesson.sql
  const pizzaData = [
    { id: 1, pname: "Áfonyás", categoryname: "king", vegetarian: 0 },
    { id: 2, pname: "Babos", categoryname: "knight", vegetarian: 0 },
    { id: 3, pname: "Csupa sajt", categoryname: "knight", vegetarian: 1 },
    { id: 4, pname: "Gombás", categoryname: "page", vegetarian: 1 }
  ];

  const [pizzas, setPizzas] = useState(pizzaData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, pname: "", categoryname: "", vegetarian: "0" };
  const [currentPizza, setCurrentPizza] = useState(initialFormState);

  const addPizza = pizza => {
    pizza.id = pizzas.length > 0 ? pizzas[pizzas.length - 1].id + 1 : 1;
    setPizzas([...pizzas, pizza]);
  };

  const deletePizza = id => {
    setEditing(false);
    setPizzas(pizzas.filter(pizza => pizza.id !== id));
  };

  const updatePizza = (id, updatedPizza) => {
    setEditing(false);
    setPizzas(pizzas.map(pizza => (pizza.id === id ? updatedPizza : pizza)));
  };

  const editRow = pizza => {
    setEditing(true);
    setCurrentPizza({ id: pizza.id, pname: pizza.pname, categoryname: pizza.categoryname, vegetarian: pizza.vegetarian });
  };

  return (
    <div className="container">
      <h1>React CRUD App (Pizzas Database)</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Pizza</h2>
              <EditPizzaForm
                setEditing={setEditing}
                currentPizza={currentPizza}
                updatePizza={updatePizza}
              />
            </div>
          ) : (
            <div>
              <h2>Add Pizza</h2>
              <AddPizzaForm addPizza={addPizza} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Pizzas</h2>
          <PizzaTable pizzas={pizzas} editRow={editRow} deletePizza={deletePizza} />
        </div>
      </div>
    </div>
  );
};

export default App;