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

app.get("/songs", getSongs) ;

app.post("/users", (req, res) => {
    res.send("The user name will be added in the database")
})

app.patch("/users", (req, res) => {
    res.send("The users list will be updated")
})

app.delete("/users", (req, res) => {
    res.send("The user details is deleted")
})
app.listen(3000,() => {
    console.log("Server running on port 3000....")
})