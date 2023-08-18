import "../../styles/layout/secondLayer.css";

const SecondLayout = () => {
  const cardItems = [
    {
      title: "Tamper-proof Payroll for Life",
      text: [
        "Your staff payroll history is kept in one place forever.",
        "No more excel sheet or manual records.",
        "Download your payroll history anytime you need it.",
      ],
    },
    {
      title: "All Payroll, Anytime Anywhere",
      text: [
        "Wherever you are Eazipay has got you covered on ALL your Payroll tasks.",
        "Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!",
      ],
    },
    {
      title: "Payroll in Seconds",
      text: [
        "Never again wil you spend more than 2 minutes on payroll.",
        "Just click on your staff annd bulk-pay them at once.",
        "Payment is done permanently.",
      ],
    },
  ];
  return (
    <div className="second-layer-wrap">
      <p className="heading-text">For Individuals and Businesses</p>
      <p>Join 200+ businesses using Eazipay's easy solution.</p>
      {/*card wrap start  */}
      <div className="card-items-wrap">
        {cardItems.map((chi, idx) => {
          const { title, text } = chi;
          return (
            <div key={idx} className="card-box">
              <div className="card-details">
                <p className="title">{title}</p>
                {text.map((chi) => (
                  <p>{chi}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/*card wrap end  */}
      {/* sub-text wrap start */}
      <div className="sub-text">
        <p>We are happy to answer your queries. Please, reach us at</p>
        <p>
          <span className="mail">hello@myeazipay.com </span>
          and expect our response shortly after.
        </p>
      </div>
      {/* sub-text wrap end */}
    </div>
  );
};
export default SecondLayout;
