const express = require("express"), 
	  morgan = require("morgan")
const app = express()

app.use(morgan("combined")) // other options: "short"

app.get("/", (request, response) => {
	console.log("Root route")
	response.send("Hello Root")
})

app.get("/jsonDemo", (request, response) => {
	console.log("Output route")
	let obj = { "id": 1, name: "Pratham" }
	response.json([obj, obj])
})

app.listen(3003, () => {
	console.log("Server is up and running")
})