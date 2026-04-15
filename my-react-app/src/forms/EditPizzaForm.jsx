import React, { useState, useEffect } from "react";

const EditPizzaForm = props => {
  const [pizza, setPizza] = useState(props.currentPizza);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPizza({ ...pizza, [name]: value });
  };

  useEffect(() => {
    setPizza(props.currentPizza);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updatePizza(pizza.id, pizza);
      }}
    >
      <label>Pizza Name</label>
      <input type="text" name="pname" value={pizza.pname} onChange={handleInputChange} />
      
      <label>Category</label>
      <input type="text" name="categoryname" value={pizza.categoryname} onChange={handleInputChange} />
      
      <label>Vegetarian (1 for Yes, 0 for No)</label>
      <input type="text" name="vegetarian" value={pizza.vegetarian} onChange={handleInputChange} />
      
      <button>Update pizza</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EditPizzaForm;