import Fab from "@mui/material/Fab";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";

import "./style.css";

const FloatingButton = () => {
  const [transcription, setTranscription] = useState("");
  const recognition = new window.webkitSpeechRecognition();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          transcript += event.results[i][0].transcript;
        } else {
          // For interim results (in-progress transcription)
          transcript += event.results[i][0].transcript;
        }
      }
      setTranscription(transcript);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
    return () => {
      recognition.stop();
    };
  }, []);

  const startRecognition = () => {
    // Start speech recognition
    recognition.start();
  };

  const stopRecognition = () => {
    // Start speech recognition
    recognition.stop();
  };

  const style = {
    position: "absolute",
    width: "35vw",
    height: "65vh",
    top: "54%",
    left: "48%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#17202a",
    border: "1px solid rgb(255 255 255/ 20%)",
    borderRadius: "15px",
    boxShadow: 24,
    p: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    "&::before, &::after": {
      content: '""',
    },
  };

  return (
    <>
      <Fab onClick={handleOpen} color="#ff007a" aria-label="add">
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
      {/* Modal */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FontAwesomeIcon
            style={{
              position: "absolute",
              top: 15,
              right: 17,
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={handleClose}
            icon={faXmark}
          />
          <div className="w-[100%]">
            <h2 className="font-['Cairo'] text-[#ff007a] text-[2rem] text-center">
              Live Transcription
            </h2>
            <Divider sx={{ "border-color": "#313942" }} />
          </div>
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <p className="text-justify p-[2rem]">{transcription}</p>

            <div className="flex justify-center justify-self-end items-center gap-[1.5rem]">
              <button
                className=" font-['Cairo'] py-[0.5rem] text-[1rem] rounded-[10px] bg-[#FF007A] w-[9rem] mx-[auto] mb-[2rem] text-[#000]"
                onClick={startRecognition}
              >
                Start Recording
              </button>
              <button
                className=" font-['Cairo'] py-[0.5rem] text-[1rem] rounded-[10px] bg-[#FF007A] w-[9rem] mx-[auto] mb-[2rem] text-[#000]"
                onClick={stopRecognition}
              >
                Stop Recording
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default FloatingButton;
