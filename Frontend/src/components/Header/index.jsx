import CustomModal from "../CustomModal";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between content-center flex-wrap w-[95vw]">
        <div>
          <img src={logo} className="w-[10rem]" alt="logo" />
        </div>
        <div className="self-center justify-self-center">
          <CustomModal />
        </div>
      </header>
    </>
  );
};

export default Header;
