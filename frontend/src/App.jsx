import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import Signup from "./Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://mini-ecommerce-app-r6td.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">
        Mini E-Commerce App
      </h1>

      {!loggedIn ? (
        <>
          <div className="form-box">
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button onClick={handleLogin}>
              Login
            </button>
          </div>

          <Signup />
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;