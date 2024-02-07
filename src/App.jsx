import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [items, setCount] = useState({ name: "Fetching", age: "Fetching" });

  useEffect(() => {
    async function fetchItems() {
      const url = "http://localhost:3000/Leonardo-Silva/31";

      const items = await fetch(url);

      const data = await items.json();

      setCount(data);
    }

    fetchItems();
  }, []);

  console.log(items);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>nome: {items.name}</p>
          <p>idade: {items.age}</p>
        </header>
      </div>
    </>
  );
}

export default App;
