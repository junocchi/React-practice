import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  // {
  //   name: "Focaccia",
  //   ingredients: "Bread with italian olive oil and rosemary",
  //   price: 6,
  //   photoName: "pizzas/focaccia.jpg",
  //   soldOut: false,
  // },
  // {
  //   name: "Pizza Margherita",
  //   ingredients: "Tomato and mozzarella",
  //   price: 10,
  //   photoName: "pizzas/margherita.jpg",
  //   soldOut: false,
  // },
  // {
  //   name: "Pizza Spinaci",
  //   ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
  //   price: 12,
  //   photoName: "pizzas/spinaci.jpg",
  //   soldOut: false,
  // },
  // {
  //   name: "Pizza Fungi",
  //   ingredients: "Tomato, mozzarella, mushrooms, and onion",
  //   price: 12,
  //   photoName: "pizzas/fungi.jpg",
  //   soldOut: false,
  // },
  // {
  //   name: "Pizza Salamino",
  //   ingredients: "Tomato, mozzarella, and pepperoni",
  //   price: 15,
  //   photoName: "pizzas/salamino.jpg",
  //   soldOut: true,
  // },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozzarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato, mozzarella, mushrooms, and onion"
        photoName="pizzas/fungi.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozzarella, mushrooms, and onion"
        photoName="pizzas/salamino.jpg"
        price={15}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozzarella, ham, arugula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={18}
      />
    </main>
  );
}

function Footer() {
  const hourNow = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hourNow >= openHour && hourNow <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      We're open from 12:00 to 22:00. Come visit us or order online.<br></br>
      The ⏰ time now is {new Date().toLocaleTimeString()}.
    </footer>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
