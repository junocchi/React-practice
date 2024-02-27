import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "T-shirts", quantity: 8, packed: false },
  { id: 5, description: "Sunglasses", quantity: 1, packed: false },
  { id: 6, description: "Shampoo", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  function handleSubmit(e) {
    // we use this to avoid page reloading when the user presses the button to submit the form
    e.preventDefault();
  }

  return (
    <form
      className="add-form"
      onSubmit={
        handleSubmit /* we don't call the function here. Instead React, will call the function for us as soon as the onSubmit event happens. */
      }
    >
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (value, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="e.g. t-shirt"></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  const items = initialItems;
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
          // when we get an array of objects, each of these objects should have a key
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  // destructured form of Item(props)
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have 6 items on your list, and you already packed 0 (0%)</em>
    </footer>
  );
}
