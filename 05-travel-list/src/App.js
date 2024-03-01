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
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(e) {
    // we use this to avoid page reloading when the user presses the button to submit the form
    e.preventDefault();

    if (!itemDescription) return;

    const newItemId = initialItems.length + 1;

    const newItem = {
      itemDescription,
      itemQuantity,
      packed: false,
      id: newItemId,
    };
    console.log(newItem);

    // to reset the original form values
    setItemDescription("");
    setItemQuantity(1);
  }

  return (
    <form
      className="add-form"
      onSubmit={
        handleSubmit /* we don't call the function here. Instead React, will call the function for us as soon as the onSubmit event happens. */
      }
    >
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={itemQuantity}
        /* 
        -as well as it happens with <input>, as soon as we add the property value here, React starts to control this element.
        - itemQuantity is set to 1 at the moment, but below we will enable its state change
         */
        onChange={(e) => setItemQuantity(Number(e.target.value))} // this value is coming from "value={num}" below
      >
        {Array.from({ length: 20 }, (value, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="e.g. t-shirt"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        /* this function always receives the event (e). 
        - then, on the event we read "target"
        - and "e.target" is the entire element
        - and "e.target.value" is whatever text the user imputed 
        - we always need the properties "value" and "onChange" because
        - every time the user types in the input field, we re-set the state to the string they typed, which will then re-render this view. So the new state of "description" will get placed as a value. 
        */
      ></input>
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
