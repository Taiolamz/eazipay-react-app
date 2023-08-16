import "../styles/button/button.css";

const Button = ({ label, transBtn}) => {
  return (
    <div className={transBtn ? "trans-btn" : "opaque-btn" }>
      <p>{label}</p>
    </div>
  );
};

export default Button;
