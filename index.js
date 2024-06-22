import express, { request, response } from "express";
import user from "./data.js";

const app = express()

app.get("/users/:users_id", (req, res) => {
    // console.log(req.params)
    const users = user.filter(users => users.id == req.params.users_id)
    res.send(users)
})

app.listen(3000,() => {
    console.log("Server running on port 3000....")
})