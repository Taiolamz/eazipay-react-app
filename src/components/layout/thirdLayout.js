import EazipayGif from "../../assets/eazipay-gif.gif";
import gifBg from "../../assets/gif-bg.png";
import "../../styles/layout/thirdLayer.css";
import firstProgressImg from "../../assets/first-progress-img.png";
import secondProgressImg from "../../assets/second-progress-img.png";
import { useState } from "react";

const ThirdLayer = () => {
  const steps = [
    {
      title: "Create your free account",
      text: "Click here to set up your Eazipay account.",
    },
    {
      title: "Add Employee Data.",
      text: "Your employee information is 100% safe and secure.",
    },
    {
      title: "Prepare your Transaction",
      text: "Run payroll: Bulk Salaries and Compliance are done at once!",
    },
  ];


  

  return (
    <div className="third-layer-wrap">
      {/* top wrap start */}
      <div className="top-wrap">
        <p className="header-text">How Eazipay Works</p>
        <p className="sub-text">Get started in 3 simple steps.</p>
      </div>
      {/* top wrap end */}
      {/* bottom layer wrap start */}
      <div className="bottom-wrap">
        {/* left wrap start */}
        <div className="left-wrap">
          <figure className="img-wrap">
            <img src={gifBg} alt="" />
            <img className="img-box" src={EazipayGif} alt="eazipay_gif" />
          </figure>
        </div>
        {/* left wrap end */}
        {/* right wrap start */}
        {/* progress wrap start */}
        <figure className="progress-img">
          <img src={firstProgressImg} alt="" />
          <img src={secondProgressImg} alt="" />
        </figure>
        {/* progress wrap end */}
        <div className="right-wrap">
          {steps.map((chi, idx) => {
            const { title, text } = chi;
            return (
              <div key={idx} className="right-box">
                <p className={`idx-wrap ${idx == 0 && "active-child"} `} >
                  {idx + 1}
                </p>
                <p className="title-right">{title}</p>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        {/* right wrap end */}
      </div>
      {/* bottom layer wrap end */}
    </div>
  );
};
export default ThirdLayer;
