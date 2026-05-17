const express = require("express")
const dotenv = require("dotenv")

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    console.log("THIS IS WORKING FINE")
    res.send("HELLO WORLD from CI/CD project")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})