var selectedIndex = null;
var array1 = new Array();


array1.push({"pizzaName":"Margherita", "category":"Vegetarian", "price":"10.99"});
array1.push({"pizzaName":"Pepperoni", "category":"Meat", "price":"12.99"});

window.addEventListener("DOMContentLoaded", () => {
    printArray(); 
});

function printArray(){
    var table = document.getElementById("pizzaList").getElementsByTagName('tbody')[0];
    table.innerHTML="";
    var newRow;
    
    for (var i = 0; i < array1.length; i++) {
        newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = array1[i].pizzaName;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = array1[i].category;
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = "$" + array1[i].price;
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<a onClick="onEdit(${i})">Edit</a> <a onClick="onDelete(${i})">Delete</a>`;
    }
}

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedIndex == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["pizzaName"] = document.getElementById("pizzaName").value;
    formData["category"] = document.getElementById("category").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    array1.push({
        "pizzaName": data.pizzaName,
        "category": data.category,
        "price": data.price
    });
    printArray();
}

function resetForm() {
    document.getElementById("pizzaName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    selectedIndex = null;
}

function onEdit(index) {
    document.getElementById("pizzaName").value = array1[index].pizzaName;
    document.getElementById("category").value = array1[index].category;
    document.getElementById("price").value = array1[index].price;
    selectedIndex = index;
}

function updateRecord(formData) {
    array1[selectedIndex].pizzaName = formData.pizzaName;
    array1[selectedIndex].category = formData.category;
    array1[selectedIndex].price = formData.price;
    printArray();
}

function onDelete(index) {
    if (confirm('Are you sure you want to delete this pizza?')) {
        array1.splice(index, 1); 
        resetForm();
        printArray();
    }
}

function validate() {
    var isValid = true;
    if (document.getElementById("pizzaName").value == "") {
        isValid = false;
        document.getElementById("pizzaNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("pizzaNameValidationError").classList.contains("hide"))
            document.getElementById("pizzaNameValidationError").classList.add("hide");
    }
    return isValid;
}