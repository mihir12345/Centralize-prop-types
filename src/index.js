import React from "react";
import { render } from "react-dom";
import UserDetails from "./UserDetails";

const App = () => {
  const user = {
    id: 1,
    firstName: "John",
    lastName: "House",
    company: "Pluralsight",
    role: "author",
    address: {
      id: 1,
      street: "555 Main St.",
      city: "Kansas City",
      state: "KS",
      postal: 66219
    }
  };

  return (
    <div>
      <UserDetails user={user} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
