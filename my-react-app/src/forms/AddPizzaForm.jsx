import React, { useState } from "react";

const AddPizzaForm = props => {
  const initialFormState = { id: null, pname: "", categoryname: "", vegetarian: "0" };
  const [pizza, setPizza] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPizza({ ...pizza, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!pizza.pname || !pizza.categoryname) return;
        props.addPizza(pizza);
        setPizza(initialFormState);
      }}
    >
      <label>Pizza Name</label>
      <input type="text" name="pname" value={pizza.pname} onChange={handleInputChange} />
      
      <label>Category (king/knight/page/nobleman)</label>
      <input type="text" name="categoryname" value={pizza.categoryname} onChange={handleInputChange} />
      
      <label>Vegetarian (1 for Yes, 0 for No)</label>
      <input type="text" name="vegetarian" value={pizza.vegetarian} onChange={handleInputChange} />
      
      <button>Add new pizza</button>
    </form>
  );
};

export default AddPizzaForm;