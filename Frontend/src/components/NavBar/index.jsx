import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faCalendar,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const NavBar = () => {
  return (
    <div className="flex flex-col justify-center items-center my-[2rem] gap-[1rem]">
      <NavLink
        className="flex justify-start items-center rounded-[14px] px-[2rem] w-[15rem] h-[3rem] bg-[#313942] text-[#fff] text-[1.3rem] font-['Cairo']"
        to="/home"
        end
      >
        <FontAwesomeIcon icon={faCalendar} />
        Schedule
      </NavLink>

      <NavLink
        className="flex justify-start items-center rounded-[14px] px-[2rem] w-[15rem] h-[3rem] bg-[#313942] text-[#fff] text-[1.3rem] font-['Cairo']"
        to="/home/features"
        end
      >
        <FontAwesomeIcon icon={faSquare} />
        Business Cards
      </NavLink>
      <NavLink
        className="flex justify-start items-center rounded-[14px] px-[2rem] w-[15rem] h-[3rem] bg-[#313942] text-[#fff] text-[1.3rem] font-['Cairo']"
        to="/home/more"
        end
      >
        <FontAwesomeIcon icon={faEllipsis} />
        More
      </NavLink>
    </div>
  );
};

export default NavBar;
