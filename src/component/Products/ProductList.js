import React from "react";
import products from "../../prouducts.json";
import { useCart } from "../../Context/CartContex";
import './productList.css'

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="productMain">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>₹ {product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
