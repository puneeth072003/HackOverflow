import { Link } from "react-router-dom";
import logo from "../assets/temp.png";
import "../styles/Header.css";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between content-center px-[1.5rem]">
        <div>
          <img src={logo} className="w-[5rem]" alt="logo" />
        </div>
        <nav className="flex justify-between content-center">
          <ul className="flex justify-center gap-[1.5rem] text-base content-center flex-wrap">
            <li className="text-3xl text-[#FF007A]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-3xl text-[#FF007A]">
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header