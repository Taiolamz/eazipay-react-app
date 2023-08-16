import "../styles/button/button.css";

const Button = ({ label, bgColor, labelColor, bxShadow }) => {
  return (
    <div
      className="button-wrap"
      style={{ backgroundColor: bgColor, color: labelColor, boxShadow:bxShadow }}
    >
      <p>{label}</p>
    </div>
  );
};

export default Button;
