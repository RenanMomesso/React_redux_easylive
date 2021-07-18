import "./popup.css";

const Popup = ({ message, add }) => {
  return (
    <div
      className="popup"
      style={
        add
          ? { backgroundColor: "rgb(94, 213, 94)" }
          : { backgroundColor: "tomato" }
      }
    >
      {message ? message : "Adicionado com sucesso."}
    </div>
  );
};

export default Popup;
