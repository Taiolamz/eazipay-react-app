import FirstLayout from "./layout/firstLayout";
import SecondLayout from "./layout/secondLayout";
import ThirdLayer from "./layout/thirdLayer";
import Layouts from "./layouts";

const HomePage = () => {
  return (
    <div>
      <Layouts>
        <FirstLayout />
        <SecondLayout />
        <ThirdLayer />
      </Layouts>
    </div>
  );
};
export default HomePage;
