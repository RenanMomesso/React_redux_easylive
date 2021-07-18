import "./products.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { allProductsData } from "utils/data";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/actions/userAction";
import Popup from "components/Popup";

const Products = ({ textFilter }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddCart = (e, item) => {
    e.preventDefault();
    setShowPopup(true);
    dispatch(addProduct(item));
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const filterItens = () => {
    const filterName = allProductsData.filter((item) =>
      item.name.toLocaleLowerCase().includes(textFilter)
    );
    return filterName;
  };

  if (filterItens().length < 1) return <div className="no-products">Nenhum produto encontrado</div>;
  return (
    <>
      {showPopup && <Popup add message={"Produto adicionado ao carrinho"} />}
      {filterItens().map((item, index) => (
        <Link
          to={`/product/${item.idProduct}`}
          className="link-product"
          key={index}
        >
          <div className="products">
            <img src={item.img} className="img-product" />
            <p>{item.name}</p>
            <div className="product-price">
              de <small>R$ {item.priceBefore}</small> por{" "}
              <span> R$ {item.price.toFixed(2).replace(".", ",")}</span>
            </div>
            <button
              className="cart-button"
              onClick={(e) => handleAddCart(e, item)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;
