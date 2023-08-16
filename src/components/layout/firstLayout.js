import Button from "../button";
import "../../styles/layout/firstLayout.css";
import dashboardImg from "../../assets/dashboard-img.svg";

const FirstLayout = () => {
  return (
    <div className="first-layout-wrap">
      {/* left wrap start */}
      <div className="left-wrap">
        <p className="header-text">
          Run your <span>payroll</span>
          <span> easily</span> in
          <span> seconds</span>
        </p>
        <p className="description">
          We’ve built an all-inclusive simple solution for individual and
          businesses to manage staff, pay salaries, bills, and relevant taxes
          all at once.
        </p>
        <Button className="btn-wrap" label={"Start Using Free, Forever"} />
      </div>
      {/* left wrap end */}

      {/* right wrap start */}
      <div>
        {/* dashboard img wrap start */}
        <figure>
          <img src={dashboardImg} alt="dashboard_image" />
        </figure>
        {/* dashboard img wrap end */}
      </div>
      {/* right wrap end */}
    </div>
  );
};
export default FirstLayout;
