import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import UserContext from "../../context/UserContext";
// import ErrorNotice from "../misc/ErrorNotice"
// import Axios from "axios";

import "./App.css";

const apiKey = process.env.API_KEY;
const planKey = process.env.PLAN_KEY;

console.log({ planKey }, { apiKey });

function App() {
  // const addMember = async () => {
  //   const memberPost = await fetch(
  //     "https://cors-anywhere.herokuapp.com/https://api.memberstack.com/v1/members",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Api-Key": "57e5e61efabdf3aec64c7f0f6ecfd1e4",
  //       },
  //       body: JSON.stringify({
  //         email: "vka000ttrrrtt0@gmail.com",
  //         password: "123456789",
  //         plan: "5ffe38ec8e513c0004bd14e5",
  //       }),
  //     }
  //   );
  //   console.log({ memberPost });
  // };


  // Working'S GET
  // const memberList = await fetch(
  //   "https://cors-anywhere.herokuapp.com/https://api.memberstack.com/v1/members",
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Api-Key": "57e5e61efabdf3aec64c7f0f6ecfd1e4",
  //     },
  // body: JSON.stringify({
  //   email: "vka000ttrrrtt0@gmail.com",
  //   password: "123456789",
  //   plan: "5ffe38ec8e513c0004bd14e5",
  // })
  //   }
  // );

  // console.log({ res });
  //fetch('https://api.memberstack.com/v1/members', {
  // headers: {
  //   'X-API-KEY': 'yourapikey'
  // }

  // listMembers();
  // addMember();

  return (
    <div className="App">
      In the try memberstack api
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Rdasdsd
        </a>
      </header> */}
    </div>
  );
}
export default App;
