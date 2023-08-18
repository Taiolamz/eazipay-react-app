import { appList } from "./firstLayout";
import smileImg from "../../assets/smile-frame.svg";
import "../../styles/layout/fourthLayout.css";

const FourthLayout = () => {
  const designPattern = (
    <svg
      width="109"
      height="111"
      viewBox="0 0 109 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.81087" cy="5.45528" r="3.26692" fill="#EA4E4B" />
      <circle cx="24.0658" cy="5.45515" r="3.26692" fill="#EA4E4B" />
      <circle cx="44.3206" cy="5.45515" r="3.26692" fill="#EA4E4B" />
      <circle cx="64.5755" cy="5.45515" r="3.26692" fill="#EA4E4B" />
      <circle cx="3.81087" cy="22.4433" r="3.26692" fill="#EA4E4B" />
      <circle cx="24.0658" cy="22.4434" r="3.26692" fill="#EA4E4B" />
      <circle cx="44.3206" cy="22.4434" r="3.26692" fill="#EA4E4B" />
      <circle cx="64.5755" cy="22.4434" r="3.26692" fill="#EA4E4B" />
      <circle cx="3.81087" cy="39.4314" r="3.26692" fill="#EA4E4B" />
      <circle cx="24.0658" cy="39.4312" r="3.26692" fill="#EA4E4B" />
      <circle cx="44.3206" cy="39.4312" r="3.26692" fill="#EA4E4B" />
      <circle cx="64.5755" cy="39.4312" r="3.26692" fill="#EA4E4B" />
      <circle cx="3.81087" cy="56.4193" r="3.26692" fill="#EA4E4B" />
      <circle cx="24.0658" cy="56.4193" r="3.26692" fill="#EA4E4B" />
      <circle cx="44.3206" cy="56.4193" r="3.26692" fill="#EA4E4B" />
      <circle cx="64.5755" cy="56.4193" r="3.26692" fill="#EA4E4B" />
      <circle cx="3.81087" cy="73.4073" r="3.26692" fill="#EA4E4B" />
      <circle cx="24.0658" cy="73.4075" r="3.26692" fill="#EA4E4B" />
      <circle cx="44.3206" cy="73.4075" r="3.26692" fill="#EA4E4B" />
      <circle cx="64.5755" cy="73.4075" r="3.26692" fill="#EA4E4B" />
      <circle cx="3.81087" cy="90.3952" r="3.26692" fill="#EA4E4B" />
      <circle cx="24.0658" cy="90.3951" r="3.26692" fill="#EA4E4B" />
      <circle cx="44.3206" cy="90.3951" r="3.26692" fill="#EA4E4B" />
      <circle cx="64.5755" cy="90.3951" r="3.26692" fill="#EA4E4B" />
      <circle cx="3.81087" cy="107.383" r="3.26692" fill="#EA4E4B" />
      <circle cx="24.0658" cy="107.383" r="3.26692" fill="#EA4E4B" />
      <circle cx="44.3206" cy="107.383" r="3.26692" fill="#EA4E4B" />
      <circle cx="64.5755" cy="107.383" r="3.26692" fill="#EA4E4B" />
    </svg>
  );

  return (
    <div className="fourth-layout-wrap">
      <div className="fourth-layout-box">
        {/* left wrap start */}
        <figure className="pattern">{designPattern}</figure>
        <div className="left-wrap">
          <p className="header-text">
            Free forever
            <p>
              for your <span>salary payment</span>
            </p>
          </p>
          <p className="sub-text">Subscribe to the Eazilife today</p>
          <div className="store-wrap">
            {appList.map((chi, idx) => {
              const { icon, desc, store } = chi;
              return (
                <div className="store-box">
                  <figure>{icon}</figure>
                  <div className="desc-wrap">
                    <p>{desc}</p>
                    <p className="store">{store}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* left wrap stop */}
        {/* right wrap start */}
        <div>
          <figure>
            <img src={smileImg} alt="smile_img" />
          </figure>
        </div>
        {/* right wrap stop */}
      </div>
    </div>
  );
};
export default FourthLayout;
