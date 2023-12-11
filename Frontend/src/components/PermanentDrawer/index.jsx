import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import "./style.css";

import { BACKEND_URI } from "../../config";

const drawerWidth = 350;

export default function PermanentDrawer() {
  const [date, setDate] = useState(dayjs(new Date()));
  const [events, setEvents] = useState([]);
  const [mail, setMail] = useState("");

  const [eventsName, setEventsName] = useState([]);
  const [eventDesc, setEventDesc] = useState([]);

  const [open, setOpen] = useState(false);

  const [startTime, setStartTime] = useState(dayjs(new Date()));
  const [endTime, setEndTime] = useState(dayjs(new Date()));

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleButton = async () => {
    try {
      await fetch(`${BACKEND_URI}/api/v1/user`)
        .then((res) => res.json())
        .then((data) => setMail(data.Email));

      const data = {
        eventsName,
        startTime:
          startTime.year() +
          "-" +
          (startTime.month() + 1) +
          "-" +
          startTime.date() +
          "T" +
          startTime.hour() +
          ":" +
          startTime.minute() +
          ":" +
          startTime.second() +
          "Z",
        endTime:
          endTime.year() +
          "-" +
          (endTime.month() + 1) +
          "-" +
          endTime.date() +
          "T" +
          endTime.hour() +
          ":" +
          endTime.minute() +
          ":" +
          endTime.second() +
          "Z",
        eventDesc,
        eventMail: mail,
      };

      console.log(data)

      await axios
        .post(`${BACKEND_URI}/api/v1/write`, data)
        .then(() => handleClose());

      handleClose();
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  const style = {
    position: "absolute",
    width: "45vw",
    height: "60vh",
    top: "47%",
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

  useEffect(() => {
    fetch(`${BACKEND_URI}/api/v1/updateCalendar`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  let calender_style = {
    "& span, button, div": { color: "#fff" },
    "& button.Mui-selected": { "background-color": "#FF007A" },
    "& button.Mui-selected:hover": {
      "background-color": "#FF007A",
    },
    "& button.MuiPickersDay-today": {
      border: "1px solid #FF007A",
    },
    "& button.css-1u23akw-MuiButtonBase-root-MuiPickersDay-root.Mui-selected:hover":
      {
        "background-color": "#FF007A",
      },
    "& button.css-jgls56-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected":
      {
        "background-color": "#FF007A",
      },
    "& button.css-1u23akw-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected":
      {
        "background-color": "#FF007A",
      },
    "& button.css-1u23akw-MuiButtonBase-root-MuiPickersDay-root:focus": {
      "background-color": "#FF007A",
    },
    "& button.css-innj4t-MuiPickersYear-yearButton.Mui-selected": {
      "background-color": "#FF007A",
    },
    "& .MuiPickersMonth-root.Mui-selected": {
      "background-color": "#FF007A",
    },
    "& .css-bw88rr-MuiPickersMonth-monthButton.Mui-selected": {
      "background-color": "#FF007A",
    },
  };

  const time_style = {
    "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
      color: "#ff007a",
    },
    "& fieldset": {
      border: "2px solid #ff007a",
    },
    "& fieldset:hover": {
      border: "2px solid #ff007a",
    },
    "& fieldset legend span": {
      color: "#ff007a",
    },
    "& label": {
      color: "#ff007a",
    },
    "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        border: "2px solid #ff007a",
      },
    "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "#ff007a",
    },
  };

  events.forEach((e) => {
    const raw = e.startDateTime;
    const date =
      raw.substring(5, 7) +
      "-" +
      raw.substring(8, 10) +
      "-" +
      raw.substring(0, 4);
    const attr = Date.parse(date);
    calender_style[`button.MuiPickersDay-root[data-timestamp="${attr}"]`] = {
      border: "2px solid #fff",
    };
  });
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "65px",
            backgroundColor: "transparent",
            boxShadow: "-2px 0px 3px -1px rgb(255 255 255/ 20%)",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        {/* Header? */}
        <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[1.4rem] pt-[1rem] font-[1000]">
          Calendar
        </h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={date}
            onChange={(newDate) => setDate(newDate)}
            views={["year", "month", "day"]}
            sx={calender_style}
          />
        </LocalizationProvider>
        <Divider sx={{ "border-color": "#313942" }} />
        <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[1.4rem] py-[1rem] font-[1000]">
          Setup your Meeting
        </h1>
        <button
          onClick={handleOpen}
          data-function="post-date-time"
          className="font-['Cairo'] py-[0.5rem] text-[1.2rem] rounded-[14px] bg-[#FF007A] w-[10rem] mx-[auto] mb-[2rem]"
        >
          Create Meeting
        </button>
        <Divider sx={{ "border-color": "#313942" }} />
      </Drawer>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
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
              Meeting Details
            </h2>
            <Divider sx={{ "border-color": "#313942" }} />
          </div>
          <div className="flex flex-col justify-center gap-[1.5rem] items-center">
            <input
              required
              value={eventsName}
              onChange={(event) => setEventsName(event.target.value)}
              type="text"
              name="event"
              data-function="fetch-event"
              placeholder="Enter Event Name..."
              className="mx-[1.5rem] my-[1rem] px-[7px]"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="flex justify-center items-center gap-[1.5rem]">
                <DateTimePicker
                  sx={time_style}
                  label="Pick Meeting Start Time"
                  value={startTime}
                  onChange={(newValue) => setStartTime(newValue)}
                />
                <DateTimePicker
                  sx={time_style}
                  label="Pick Meeting End Time"
                  value={endTime}
                  onChange={(newValue) => setEndTime(newValue)}
                />
              </div>
            </LocalizationProvider>
            <input
              required
              value={eventDesc}
              onChange={(event) => setEventDesc(event.target.value)}
              type="text"
              name="event"
              data-function="fetch-event"
              placeholder="Enter Event Followups..."
              className="mx-[1.5rem] my-[1rem] px-[7px]"
            />
            <button
              onClick={handleButton}
              data-function="post-date-time"
              className="text-[#000] font-['Cairo'] py-[0.5rem] text-[1.2rem] rounded-[14px] bg-[#FF007A] w-[10rem] mx-[auto]"
            >
              Create Meeting
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
