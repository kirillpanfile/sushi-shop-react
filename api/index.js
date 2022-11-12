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

app.get("/recommended-sushi", (req, res) => {
	fs.readFile("sushi.json", (err, data) => {
		if (err) {
			throw err;
		}

		const sushi = JSON.parse(data);
		const recommendedSushi = sushi.slice(0, 6).sort((a, b) => a.price - b.price);

		res.send(recommendedSushi);
	});
});

app.get("/categories", (req, res) => {
	fs.readFile("categories.json", (err, data) => {
		if (err) {
			throw err;
		}
		res.send(JSON.parse(data));
	});
});

app.listen(3001, () => {
	console.log("Server running on http://localhost:3001");
});
