/** @format */
import { useState } from "react";
import "../styles/all.scss";
import MainForm from "./MainForm";
import SelectForm from "./SelectForm";

const Home = () => {
  const [isButtonSubmitHidden] = useState<boolean>(false);

  return (
    <div className="">
      <div className="bg-no-repeat bg-center header-img"></div>
      <div className="header-img__mask"></div>
      <div className="booking__form ">
        <MainForm isButtonSubmitHidden={isButtonSubmitHidden} />
        <SelectForm />
      </div>
    </div>
  );
};

export default Home;
