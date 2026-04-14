const { useState } = React;

function App() {
    const [menu, setMenu] = useState("app1");

    return (
        <div>
            <h2>React SPA example</h2>
            <div className="spa-buttons">
                <button onClick={() => setMenu("app1")}>App1 (Add)</button>
                <button onClick={() => setMenu("app2")}>App2 (View)</button>
            </div>
            <hr />
            {menu === "app1" && <App1 />}
            {menu === "app2" && <App2 />}
        </div>
    );
}