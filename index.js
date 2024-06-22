import express, { request, response } from "express";
import user from "./data.js";

const app = express()

app.get("/users/:users_id", (req, res) => {
    // console.log(req.params)
    const users = user.filter(users => users.id == req.params.users_id)
    if(users.length === 0){
        res.status(404).send("We are unable to find the data you requested.")
    } else {
        res.status(202).send(users)
    }
    
})

app.listen(3000,() => {
    console.log("Server running on port 3000....")
})