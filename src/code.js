// const fetch = require("node-fetch")
// console.log(fetch)
fetch("https://api.memberstack.com/v1/members", {
  body:
    '{ \n    "email": "vasily@gmail.com",\n    "password": "password",\n    "plan": "5ffe38ec8e513c0004bd14e5"   \n  }',
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "57e5e61efabdf3aec64c7f0f6ecfd1e4",
  },
  method: "POST",
});
