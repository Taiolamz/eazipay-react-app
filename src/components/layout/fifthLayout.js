import { useState } from "react";
import Button from "../button";
import "../../styles/layout/fifthLayout.css";
import patternOne from "../../assets/fifth-layer-pattern.png";
import DotPattern from "../../assets/fifth-layer-pattern-dot.png"

const FifthLayout = () => {
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    job_title: "",
    company_size: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const data = { ...details, [name]: value };
    setDetails(data);
  };

  const formList = [
    {
      label: "First Name",
      value: details?.first_name,
      id: "first_name",
      type: "text",
      name: "first_name",
    },
    {
      label: "Last Name",
      value: details?.last_name,
      id: "last_name",
      type: "text",
      name: "last_name",
    },
    {
      label: "Email",
      value: details?.email,
      id: "email",
      type: "email",
      name: "email",
    },
    {
      label: "Job Title",
      value: details?.job_title,
      id: "job_title",
      type: "text",
      name: "job_title",
    },
    {
      label: "Company Size",
      value: details?.company_size,
      id: "company_size",
      type: "text",
      name: "company_size",
    },
  ];

  const [activeState, setActiveState] = useState({ one: true, two: false });
  return (
    <div className="fifth-layout-wrap">
      {/* pattern start */}
      <img className="pattern-one" src={patternOne} alt="pattern" />
      <img className="pattern-two" src={DotPattern} alt="pattern" />
      {/* pattern end */}
      {/* left wrap start */}
      <div className="left-wrap">
        <p className="header-text">Get an Exclusive Demo of Eazipay</p>
        <p>
          Our greatest priority is to put you and your business first. Let’s
          show you how we can help.
        </p>
      </div>
      {/* left wrap end */}

      {/* right wrap start */}
      <div className="right-wrap">
        <div className="top-wrap">
          <p className="top-text">First thing first</p>
          <p className="span-text">
            We want to serve you better. Tell us a bit about yourself or company
          </p>
          <div className="user-holder-wrap">
            <p
              className={activeState.one && "active"}
              onClick={() => {
                setActiveState((prev) => {
                  return { ...prev, one: true, two: false };
                });
              }}
            >
              Individual
            </p>
            <p
              className={activeState.two && "active"}
              onClick={() => {
                setActiveState((prev) => {
                  return { ...prev, one: false, two: true };
                });
              }}
            >
              Company
            </p>
          </div>
        </div>
        {/* form wrap start */}
        <form className="form-wrap">
          {formList.map((chi, idx) => {
            const { label, value, id, type, name } = chi;
            return (
              <div key={idx}>
                <input
                  autoComplete="off"
                  className="input-field"
                  type={type}
                  id={id}
                  value={value}
                  placeholder={label}
                  name={name}
                  onChange={handleChange}
                />
                <span className="hover-txt">{label}</span>
              </div>
            );
          })}
          <Button width={"100%"} label={"Request Demo"} />
          {/* <Button label={"Request Demo"} /> */}
        </form>
        {/* form wrap end */}
      </div>
      {/* right wrap end */}
    </div>
  );
};
export default FifthLayout;
