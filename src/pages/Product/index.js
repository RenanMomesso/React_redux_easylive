import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import "./product.css";
import { allProductsData } from "../../utils/data";
import { addProduct } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import Popup from "components/Popup";

const Product = () => {
  
  const dispatch = useDispatch();
  const [productObject, setProductObject] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const params = useParams();
  const history = useHistory();

  const returnProductEspecific = () => {
    const filterItens = allProductsData.filter(
      (item) => item.idProduct == params.id
    );
    setProductObject(filterItens[0]);
  };

  const handleCartButton = () => {
    setShowPopup(true);
    dispatch(addProduct(productObject));
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  useEffect(() => {
    
    returnProductEspecific();
    window.scrollTo({ top: 0, behavior: "smooth" });
    
  }, []);

  return (
    <>
      {showPopup && <Popup add message={"Produto adicionado ao carrinho"} />}
      <div className="breadcumb">
        <Link to="/home">Home </Link> /
        <Link to={`/product/${productObject.idProduct}`}>
          {productObject.name}
        </Link>
      </div>
      <main className="main-product">
        <div className="product-image">
          <img src={productObject?.img} className="product-image-main" />
        </div>
        <div className="product-informations">
          {" "}
          <h2>{productObject?.name}</h2>
          <p>{productObject?.description}</p>
          <p>
            <s>R$ {productObject?.priceBefore}</s> por R$ {productObject?.price}
          </p>
          <button className="cart-button-shop" onClick={handleCartButton}>
            Adicionar ao carrinho
          </button>
        </div>
      </main>
    </>
  );
};

export default Product;
