const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));


// Import routes
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

// API
app.use("/api/users", userRoute)
app.use("/api/pins", pinRoute);

app.listen(5000, () => console.log("Backend server is running"));
