import { Navbar } from "./components/Navbar";
import { ShoppingList } from "./components/ShoppingList";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <ShoppingList />
      </div>
    </React.Fragment>
  );
}

export default App;
