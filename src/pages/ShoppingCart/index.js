import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./shopping.css";
import { removeProductCart, clearCartPurchase } from "redux/actions/userAction";
import Popup from "components/Popup";

const ShoppingCart = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const allCartProducts = useSelector((state) => state.user.cart);

  const handleRemoveItem = (item) => {
    setShowPopup(true);
    dispatch(removeProductCart(item));
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo({ top: 5, behavior: "smooth" });
  }, []);

  const handlePurchase = () => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      dispatch(clearCartPurchase())
    },2000)

    //carrinho vai ficar vazio
    //msg compra realizada com sucesso.
    //
  }

  const arrayToSum = allCartProducts.map((item) => item.qt * item.price);
  const totalCart = arrayToSum.reduce((value, index) => value + index, 0);

  if (allCartProducts.length < 1)
    return <div className="no-products">Não há produtos no carrinho!</div>;

    
  return (
    <>
    {loading && <Popup  add message="Compra realizada com sucesso"/>}
      {showPopup && <Popup message="Produto removido do carrinho." />}
      <div className="shopping-main">
        <div className="shopping-products">
          <table className="table">
            <thead>
              <th></th>
              <th>Nome do produto</th>
              <th>Quantidade</th>
              <th>Preço unit.</th>
              <th>Ação</th>
            </thead>
            <tbody>
              {allCartProducts.map((item, index) => (
                <tr>
                  <td>
                    <img src={item.img} className="shopping-product-img" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.qt}</td>
                  <td>R$ {item.price.toFixed(2).replace(".", ",")}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="button-remove-product"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="shopping-total">
          <h3>VALOR TOTAL</h3>
          <h4>R$ {totalCart.toFixed(2).replace(".", ",")}</h4>
          <button className="purchase-button" onClick={handlePurchase}>
            Finalizar compra
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
