import { NavLink } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[50%] h-[4rem] bg-[red] text-[#fff]">
        <NavLink to="/home">Schedule</NavLink>
      </div>
      <div>
        <NavLink to="/home/features">Features</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
