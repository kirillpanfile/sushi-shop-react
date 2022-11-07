const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/all-sushi", (req, res) => {
  fs.readFile("sushi.json", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
