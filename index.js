const express = require("express")

const app = express();

app.get("/", (req, res) => {
    console.log("THIS IS WORKING FINE")
    res.send("HELLO WORLD from CI/CD project")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})