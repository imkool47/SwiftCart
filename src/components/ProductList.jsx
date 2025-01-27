import "../App.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "../assets/loading.gif";

export const ProductList = () => {
  const [url, setUrl] = useState("http://localhost:3000/products");
  const { data: products, loading } = useFetch(url);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:3000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}
        >
          In Stock
        </button>
      </div>

      {/* {loading && (
        <p className="loading">
          {" "}
          <img src={Loading} alt="" />
        </p>
      )} */}

      {loading && <p>Loading Products...</p>}

      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name"> {product.name}</p>
            <p className="info">
              <span>Rs. {product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}>
                {product.in_stock ? "In Stock" : "Unavailable"}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
