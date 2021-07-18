import "./home.css";
import Products from "containers/Products";
import { useState } from "react";

const HomeProducts = () => {
  const [textFilter, setTextFilter] = useState("");
  return (
    <>
      <h1 className="title-products">Todos os Produtos</h1>
      <input
        type="text"
        value={textFilter}
        onChange={(e) => setTextFilter(e.target.value)}
        className="product-filter-name"
        placeholder="Procure pelo nome do produto"
      />
      <main className="main-products">
        <Products textFilter={textFilter}/>
      </main>
    </>
  );
};

export default HomeProducts;
