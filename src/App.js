import React from "react";
import "./App.css";
import fetch from "node-fetch";

const apiKey = process.env.REACT_APP_API;
const planKey = process.env.REACT_APP_PLAN;

console.log({ planKey }, { apiKey });

function App() {
  const addMember = (email, password) => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.memberstack.com/v1/members",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apiKey,
        },
        body: JSON.stringify({
          email,
          password,
          plan: planKey,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log("POST DATA: ", data))
      .catch((e) => console.log(e));
  };

  // Working'S GET
  const getMembers = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.memberstack.com/v1/members",
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data.members))
      .catch((e) => console.log(e));
  };

  console.log(getMembers(), addMember())
  return <div className="App">In the try memberstack api</div>;
}
export default App;
