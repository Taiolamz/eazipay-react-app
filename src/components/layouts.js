import "../styles/layout/layout.css";
import Footer from "./footer";
import Header from "./header";

const Layouts = ({ children }) => {
  return (
    <div className="layout-wrap">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layouts;
