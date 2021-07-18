import React from "react";
import Customer from "./components/Customer";

const customer = [
  {
    id: "0",
    name: "simson",
    age: 20,
    image: "https://placeimg.com/64/64/3",
  },
  {
    id: "1",
    name: "risa",
    age: 15,
    image: "https://placeimg.com/64/64/2",
  },
  {
    id: "2",

    name: "jun",
    age: 31,
    image: "https://placeimg.com/64/64/1",
  },
];

function App() {
  return (
    <div>
      {customer.map((c) => {
        return (
          <Customer key={c.id} name={c.name} age={c.age} image={c.image} />
        );
      })}
    </div>
  );
}

export default App;
