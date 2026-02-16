const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const auth = require("./middleware/auth");
const app = express();
app.use(express.json());
const authMiddleware = require("./middleware/auth");
app.use("/bookings", authMiddleware, require("./routes/bookingroutes"));

app.use("/auth", require("./routes/auth"));
app.use("/bookings", require("./routes/bookingroutes"));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Connection Error:", err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
