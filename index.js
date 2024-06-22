import express, { request, response } from "express";

const app = express()

app.get("/", (request, response) => {
    response.send("You are seeing this in the endpoint")
})

app.listen(3000,() => {
    console.log("Server running on port 3000....")
})