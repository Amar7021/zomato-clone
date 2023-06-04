const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const auth = require("./routes/auth")

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 8800
const DB_URI = process.env.MONGO_URI

mongoose.connect(DB_URI).then(() => {
  console.log("DB Connection Successful!")
})

app.use("/api", auth)

app.listen(PORT, () => {
  console.log(`Zomato server is running on port ${PORT}`)
})
