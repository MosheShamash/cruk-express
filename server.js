const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, "client/build")));

// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );
app.use(bodyParser.json());

// An api endpoint that returns a short list of items
app.post("/api/check-in", (req, response) => {
  let checkInObject = JSON.parse(req.body);
  console.log(req.body);
  fetch("https://cancer-uk-app.herokuapp.com/events/check-in", {
    method: "post",
    body: JSON.stringify(checkInObject),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => {
      let value = res.text();
      console.log(value);
      // response.status(res.status).send("יello");
      return value;
    })
    .then(data => {
      response.status(200).send(JSON.stringify({ hello: "123" }));
    });
  // .then(json => console.log(json));
});

app.post("/getStuff", (req, res) => {
  console.log(req.body);
  res.json(JSON.stringify(req.body));
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
