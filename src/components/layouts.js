import "../styles/layout/layout.css"
import Header from "./header";

const Layouts = ({ children }) => {
  return (
    <div className="layout-wrap">
      <Header />
      {children}
    </div>
  );
};
export default Layouts;
