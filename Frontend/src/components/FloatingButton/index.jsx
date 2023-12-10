import Fab from "@mui/material/Fab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import './style.css'

const FloatingButton = () => {
  return (
    <>
      <Fab color="#ff007a" aria-label="add">
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
    </>
  );
};

export default FloatingButton;
