import "../App.css";
import MainForm from "./MainForm";
import SelectForm from "./SelectForm";

const Header = () => {
  return (
    <div className="">
      <div className="bg-no-repeat bg-center header-img"></div>
      <div className="header-img__mask"></div>
      <div className="booking__form ">
        <MainForm />
        <SelectForm />
      </div>
    </div>
  );
};

export default Header;
