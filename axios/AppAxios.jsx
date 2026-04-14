const { useState, useEffect } = React;
const [oldName, setOldName] = useState(""); 

function AppAxios() {
    const [pizzas, setPizzas] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");
    const [editing, setEditing] = useState(false);

    const fetchPizzas = async () => {
        try {
            const res = await axios.get("axios/api.php");
            setPizzas(res.data.readData || []);
        } catch (err) { setMessage("API Connection Error"); }
    };

    useEffect(() => { fetchPizzas(); }, []);

    const handleSubmit = async () => {
        const url = "axios/api.php";
        const data = { name, price,setOldName };
        try {
            const res = editing ? await axios.put(url, data) : await axios.post(url, data);
            setMessage(res.data.status);
            setName(""); setPrice(""); setEditing(false);
            fetchPizzas();
        } catch (err) { setMessage("Error saving data"); }
    };

    const startEdit = (p) => {
        setName(p.cname);
        setPrice(p.price);
        setOldName(p.cname);
        setEditing(true);
    };

    const handleDelete = async (cname) => {
        if (!confirm(`Delete ${cname}?`)) return;
        try {
            const res = await axios.delete("axios/api.php", { data: { name: cname } });
            setMessage(res.data.status);
            fetchPizzas();
        } catch (err) { setMessage("Error deleting"); }
    };

    return (
        <div className="pizza-form">
            <h2>{editing ? "Edit Category" : "Category Management (Axios)"}</h2>
            <p><strong>Status:</strong> {message}</p>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name"  />
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
            <button onClick={handleSubmit}>{editing ? "Update" : "Add"}</button>
            {editing && <button onClick={() => {setEditing(false); setName(""); setPrice("");}}>Cancel</button>}
            <hr />
            <table border="1" width="100%">
                <thead><tr><th>Name</th><th>Price</th><th>Action</th></tr></thead>
                <tbody>
                    {pizzas.map(p => (
                        <tr key={p.cname}>
                            <td>{p.cname}</td><td>{p.price}</td>
                            <td>
                                <button onClick={() => startEdit(p)}>Edit</button>
                                <button onClick={() => handleDelete(p.cname)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}