import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import "./style.css";

import { BACKEND_URI } from "../../config";

const drawerWidth = 350;

export default function PermanentDrawer() {
  const [date, setDate] = useState(dayjs(new Date()));
  const [events, setEvents] = useState([]);
  const [eventsName, setEventsName] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URI}/api/v1/updateCalendar`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  console.log(events)

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

  events.forEach((e) => {
    const raw = e.startDateTime
    const date = raw.substring(5, 7)+'-'+raw.substring(8, 10)+'-'+raw.substring(0, 4) // Add 2023-12-11T20:30:00Z -> [Month]-[Date]-[Year]
    console.log(date)
    const attr = Date.parse(date)
    console.log(attr)
    calender_style[`button.MuiPickersDay-root[data-timestamp="${attr}"]`] = {
      border: "2px solid #288BEE",
    }
    
  });
  return (
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
      <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[1.4rem] py-[1rem] font-[1000]">
        Setup your Meeting
      </h1>
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
        <DateCalendar
          value={date}
          onChange={(newDate) => setDate(newDate)}
          views={["year", "month", "day"]}
          sx={calender_style}
        />
      </LocalizationProvider>
      <button
        // onClick={postData}
        data-function="post-date-time"
        className="font-['Cairo'] py-[0.5rem] text-[1.2rem] rounded-[14px] bg-[#FF007A] w-[10rem] mx-[auto] mb-[2rem]"
      >
        Create Meeting
      </button>
      <Divider sx={{ "border-color": "#313942" }} />
    </Drawer>
  );
}
