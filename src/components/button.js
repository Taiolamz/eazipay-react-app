import "../styles/button/button.css";

const Button = ({ label, transBtn, width, padding }) => {
  return (
    // style property should be a string
    <div
      className={transBtn ? "trans-btn" : "opaque-btn"}
      style={{ width: width, padding: padding }}
    >
      <p>{label}</p>
    </div>
  );
};

export default Button;
