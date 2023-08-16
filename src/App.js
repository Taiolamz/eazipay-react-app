import { Helmet } from "react-helmet";
import "./styles/app.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { landing_page_group_route } from "./routes";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Helmet>
        <title>Eazipay</title>
      </Helmet>

      {/* route group start */}
      <Routes location={location}>
        {landing_page_group_route.map((route, idx) => {
          return <Route key={idx} exact {...route} />;
        })}
        <Route location={location} path="*" />
      </Routes>
      {/* route group end */}

    </div>
  );
}

export default App;
