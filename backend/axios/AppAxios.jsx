const { useState, useEffect } = React;

function AppAxios() {
    const [pizzas, setPizzas] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");

    const fetchPizzas = async () => {
        try {
            const res = await axios.get("axios/api.php");
            setPizzas(res.data.readData || []);
            setMessage(res.data.status);
        } catch (err) {
            setMessage("API Error");
        }
    };

    useEffect(() => { fetchPizzas(); }, []);

    const addPizza = async () => {
        const res = await axios.post("axios/api.php", { name, price });
        setMessage(res.data.status);
        setName(""); setPrice("");
        fetchPizzas();
    };

    const deletePizza = async (cname) => {
        if (!confirm(`Delete category: ${cname}?`)) return;
        // Pass the name as the identifier for the DELETE request
        const res = await axios.delete("axios/api.php", { data: { name: cname } });
        setMessage(res.data.status);
        fetchPizzas();
    };

    return (
        <div className="pizza-form">
            <h2>Category Management (Axios)</h2>
            <p><strong>Status:</strong> {message}</p>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Category Name" />
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
            <button onClick={addPizza}>Add Category</button>
            <hr />
            <table border="1" width="100%">
                <thead><tr><th>Category Name</th><th>Price</th><th>Action</th></tr></thead>
                <tbody>
                    {pizzas.map(p => (
                        <tr key={p.cname}>
                            <td>{p.cname}</td>
                            <td>{p.price}</td>
                            <td><button onClick={() => deletePizza(p.cname)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}