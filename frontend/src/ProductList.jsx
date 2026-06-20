import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] =
    useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://mini-ecommerce-app-r6td.onrender.com/products"
    )
      .then((res) => res.json())
      .then((data) =>
        setProducts(data)
      );
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price,
    0
  );

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div
          className="product-card"
          key={product.id}
        >
          <h3>{product.name}</h3>

          <p>
            Price: ₹{product.price}
          </p>

          <button
            onClick={() =>
              addToCart(product)
            }
          >
            Add To Cart
          </button>
        </div>
      ))}

      <div className="cart-box">
        <h2>Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price}
            </p>
          ))
        )}

        <h3>Total: ₹{totalPrice}</h3>
      </div>
    </div>
  );
}

export default ProductList;