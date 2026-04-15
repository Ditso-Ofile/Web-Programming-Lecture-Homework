
const API_URL = "http://localhost/WEB-PROGRAMMING-LECTURE-HOMEWORK/fetchapi/api.php"; 

window.addEventListener("DOMContentLoaded", fetchPizzas);

async function fetchPizzas() {
    try {
        const response = await fetch(API_URL);
        const pizzas = await response.json();
        renderTable(pizzas);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function renderTable(pizzas) {
    const tbody = document.getElementById("pizzaList").getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
    
    pizzas.forEach((pizza) => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = pizza.pizzaName;
        row.insertCell(1).innerHTML = pizza.category;
        
        // Handle null 
        const priceDisplay = pizza.price ? "$" + pizza.price : "N/A";
        row.insertCell(2).innerHTML = priceDisplay;
        
        // Edit/Delete
        row.insertCell(3).innerHTML = `<a onClick="onEdit('${pizza.pizzaName}', '${pizza.category}')">Edit</a> 
                                       <a onClick="onDelete('${pizza.pizzaName}')">Delete</a>`;
    });
}

async function onFormSubmit() {
    if (validate()) {
        const formData = readFormData();
        const originalName = document.getElementById("pizzaId").value;

        if (originalName === "") {
            // CREATE 
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        } else {
            // UPDATE
            formData.originalName = originalName;
            await fetch(API_URL, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        }
        
        resetForm();
        fetchPizzas(); 
    }
}

function readFormData() {
    return {
        "pizzaName": document.getElementById("pizzaName").value,
        "category": document.getElementById("category").value
    };
}


function onEdit(name, category) {
    document.getElementById("pizzaId").value = name;
    document.getElementById("pizzaName").value = name;
    document.getElementById("category").value = category;
    
    const priceInput = document.getElementById("price");
    priceInput.value = "Auto-calculated";
    priceInput.disabled = true;
}

async function onDelete(name) {
    if (confirm('Are you sure you want to delete ' + name + '?')) {
        await fetch(API_URL, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pizzaName: name })
        });
        fetchPizzas();
    }
}

function resetForm() {
    document.getElementById("pizzaId").value = "";
    document.getElementById("pizzaName").value = "";
    document.getElementById("category").value = "";
    
    const priceInput = document.getElementById("price");
    priceInput.value = "";
    priceInput.disabled = false;
    
    document.getElementById("pizzaNameValidationError").classList.add("hide");
}

function validate() {
    if (document.getElementById("pizzaName").value === "") {
        document.getElementById("pizzaNameValidationError").classList.remove("hide");
        return false;
    }
    document.getElementById("pizzaNameValidationError").classList.add("hide");
    return true;
}