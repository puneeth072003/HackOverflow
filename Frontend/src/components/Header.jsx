import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/temp.png";
import "../styles/Header.css";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between content-center px-[1.5rem] flex-wrap">
        <div>
          <img src={logo} className="w-[5rem]" alt="logo" />
        </div>
        <nav className="flex justify-between content-center">
          <ul className="flex justify-center gap-[1.5rem] text-base content-center flex-wrap">
            <li className="text-3xl text-[#fff]">
              <NavLink to={"/"}>
                <FontAwesomeIcon icon={faHome} />
              </NavLink>
            </li>
            <li className="text-3xl text-[#fff]">
              <NavLink to={"/login"}>
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
