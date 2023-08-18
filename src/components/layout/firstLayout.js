import Button from "../button";
import "../../styles/layout/firstLayout.css";
import dashboardImg from "../../assets/dashboard-img.svg";

const FirstLayout = () => {
  // export const appList = [
  //   {
  //     icon: appleIcon,
  //     desc: "Download on the",
  //     store: "Appstore",
  //   },
  //   {
  //     icon: playstoreIcon,
  //     desc: "Get on",
  //     store: "Google Play",
  //   },
  // ];

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
        <Button
          padding={"1.5rem"}
          opaqueBtn
          width={"27.2rem"}
          label={"Start Using Free, Forever"}
        />

        {/* download wrap start */}
        <div className="download-wrap">
          <p className="download-text">Download the Eazipay App</p>
          {/* app store wrap start */}
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
          {/* app store wrap end */}
        </div>
        {/* download wrap end */}
      </div>
      {/* left wrap end */}

      {/* right wrap start */}
      <div className="right-wrap">
        {/* dashboard img wrap start */}
        <figure>
          <img className="img-wrap" src={dashboardImg} alt="dashboard_image" />
          {/* {dashboardImg} */}
        </figure>
        {/* dashboard img wrap end */}
      </div>
      {/* right wrap end */}
    </div>
  );
};
export default FirstLayout;

const appleIcon = (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24.501" r="24" fill="#F2F1F1" />
    <path
      d="M29.0499 32.781C28.0699 33.731 26.9999 33.581 25.9699 33.131C24.8799 32.671 23.8799 32.651 22.7299 33.131C21.2899 33.751 20.5299 33.571 19.6699 32.781C14.7899 27.751 15.5099 20.091 21.0499 19.811C22.3999 19.881 23.3399 20.551 24.1299 20.611C25.3099 20.371 26.4399 19.681 27.6999 19.771C29.2099 19.891 30.3499 20.491 31.0999 21.571C27.9799 23.441 28.7199 27.551 31.5799 28.701C31.0099 30.201 30.2699 31.691 29.0399 32.791L29.0499 32.781ZM24.0299 19.751C23.8799 17.521 25.6899 15.681 27.7699 15.501C28.0599 18.081 25.4299 20.001 24.0299 19.751Z"
      fill="black"
    />
  </svg>
);

const playstoreIcon = (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24.501" r="24" fill="#F2F1F1" />
    <g clip-path="url(#clip0_4_4163)">
      <path
        d="M23.2837 23.9427L13.2349 34.4709C13.3477 34.8708 13.5505 35.2396 13.8277 35.5492C14.105 35.8587 14.4493 36.1007 14.8344 36.2568C15.2195 36.4129 15.6352 36.4788 16.0497 36.4496C16.4642 36.4204 16.8666 36.2968 17.226 36.0882L28.5329 29.6486L23.2837 23.9427Z"
        fill="#EA4335"
      />
      <path
        d="M33.4449 22.1531L28.5555 19.3525L23.0518 24.1822L28.5779 29.6335L33.4301 26.8629C33.86 26.6378 34.22 26.2993 34.4712 25.8842C34.7224 25.4691 34.8552 24.9932 34.8552 24.5079C34.8552 24.0227 34.7224 23.5468 34.4712 23.1317C34.22 22.7165 33.86 22.3781 33.4301 22.153H33.4451L33.4449 22.1531Z"
        fill="#FBBC04"
      />
      <path
        d="M13.2349 14.4929C13.1742 14.7174 13.144 14.9491 13.145 15.1817V33.7819C13.1457 34.0144 13.1759 34.246 13.2349 34.4709L23.6283 24.2123L13.2349 14.4929Z"
        fill="#4285F4"
      />
      <path
        d="M23.3586 24.4819L28.5553 19.3526L17.2635 12.8829C16.8386 12.6341 16.3554 12.5023 15.8631 12.501C14.6413 12.4987 13.5671 13.3096 13.2349 14.4854L23.3586 24.4819Z"
        fill="#34A853"
      />
    </g>
    <defs>
      <clipPath id="clip0_4_4163">
        <rect
          width="21.7102"
          height="24"
          fill="white"
          transform="translate(13.145 12.501)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const appList = [
  {
    icon: appleIcon,
    desc: "Download on the",
    store: "Appstore",
  },
  {
    icon: playstoreIcon,
    desc: "Get on",
    store: "Google Play",
  },
];
