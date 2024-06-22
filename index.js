import express, { request, response } from "express";

const app = express()

app.get("/", (request, response) => {
    response.send("You are seeing this in the endpoint")
})

app.get("/users" ,(request, response) => {
    response.send("You will get your users here.")
})

const getSongs = (req,res) => {
    res.send(["Worthy","Oceans","Yesu Wastahili", "Mungu Yupo"])
}

app.get("/songs", getSongs) 

app.listen(3000,() => {
    console.log("Server running on port 3000....")
})