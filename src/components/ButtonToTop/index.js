import "./button.css";

const ButtonToTop = () => {
  return (
    <div onClick={() => window.scrollTo({ top: 0, behavior:'smooth' })} className="button-to-top">
      <i class="fas fa-arrow-up"></i>
    </div>
  );
};

export default ButtonToTop;
