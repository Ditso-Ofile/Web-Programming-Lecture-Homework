// Base Class - Handles visual rendering
class PizzaDisplay {
    constructor(src) {
        this.container = document.createElement("div");
        this.container.style.textAlign = "center";
        this.container.style.fontFamily = "Arial, sans-serif";
        
        this.img = document.createElement("img");
        this.img.src = src;
        this.img.style.borderRadius = "50%";
        this.img.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
        this.img.style.transition = "all 0.3s ease";
        
        this.label = document.createElement("div");
        this.label.style.marginTop = "20px";
        this.label.style.padding = "15px";
        this.label.style.border = "1px dashed #999";
        this.label.style.background = "#fff9f0";
        
        this.container.appendChild(this.img);
        this.container.appendChild(this.label);
        
        // Requirement: Append to document/container
        document.getElementById("canvas").appendChild(this.container);
    }

    show() { this.container.style.visibility = "visible"; }
    hide() { this.container.style.visibility = "hidden"; }
}

// Derived Class - Requirement: Inheritance (extends/super)
class PizzaOrder extends PizzaDisplay {
    constructor(src) {
        super(src); // Requirement: Super call
    }

    processOrder(size, addon, type, sides) {
        // Method to adjust visual size
        const sizeMap = { "Small": 150, "Medium": 250, "Large": 350 };
        this.img.width = sizeMap[size];

        // Method to update object data display
        this.label.innerHTML = `
            <h3 style="margin:0 0 10px 0; color: #d32f2f;">Order Summary</h3>
            <p><strong>Pizza:</strong> ${type}</p>
            <p><strong>Size:</strong> ${size}</p>
            <p><strong>Add-ons:</strong> ${addon}</p>
            <p><strong>Sides:</strong> ${sides.length > 0 ? sides.join(", ") : "No sides selected"}</p>
        `;
    }
}

// Global instance variable
let myPizza;

// Initialize when page loads
window.addEventListener("load", () => {
    myPizza = new PizzaOrder("pizza.jpg");
    // Default starting state
    myPizza.processOrder("Medium", "Bacon", "Peperoni", []);
});