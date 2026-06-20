const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Phone",
    price: 20000
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000
  }
];

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/signup", (req, res) => {
    console.log("Signup request:", req.body);
  
    const { email, password } = req.body;
  
    const userExists = users.find(
      (user) => user.email === email
    );
  
    if (userExists) {
      return res.json({
        message: "User already exists"
      });
    }
  
    users.push({ email, password });
  
    console.log("Users:", users);
  
    res.json({
      message: "Signup Successful"
    });
  });

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (user) {
    res.json({
      message: "Login Successful"
    });
  } else {
    res.status(401).json({
      message: "Invalid Credentials"
    });
  }
});

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT =
  process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});