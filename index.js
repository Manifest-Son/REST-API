import express, { request, response } from "express";
import user from "./data.js";

const app = express()

app.get("/users", getUsers)

function getUsers(req, res){
    res.status(200).json(user)
};

app.listen(3000,() => {
    console.log("Server running on port 3000....")
})