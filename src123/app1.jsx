function App1() {
    return (
        <div className="pizza-form">
            <h2>Add New Pizza</h2>
            <input type="text" placeholder="Pizza name" />
            <input type="text" placeholder="Price" />
            <button style={{backgroundColor: '#007bff', color: 'white'}}>Add Pizza</button>
        </div>
    );
}