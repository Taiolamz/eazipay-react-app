import FifthLayout from "./layout/fifthLayout";
import FirstLayout from "./layout/firstLayout";
import FourthLayout from "./layout/fourthLayout";
import SecondLayout from "./layout/secondLayout";
import ThirdLayer from "./layout/thirdLayout";
import Layouts from "./layouts";

const HomePage = () => {
  return (
    <div>
      <Layouts>
        <FirstLayout />
        <SecondLayout />
        <ThirdLayer />
        <FourthLayout />
        <FifthLayout />
      </Layouts>
    </div>
  );
};
export default HomePage;
