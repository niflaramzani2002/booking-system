const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simple dummy login check
  if (username === "admin" && password === "1234") {

    const token = jwt.sign(
      { username },
      "mysecretkey",
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
