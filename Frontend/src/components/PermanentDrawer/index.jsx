import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";
import './style.css'

const drawerWidth = 350;

const calender_style = {
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
  "& button.css-innj4t-MuiPickersYear-yearButton.Mui-selected": {
    "background-color": "#FF007A",
  },
};

const time_style = {
  marginLeft: "1rem",
  marginRight: "1rem",
  marginBottom: "2rem",
  border: "none",
  "input, svg": {
    color: "#fff",
  },
  "input": {
    padding: "16.5px 14px"
  },
  "& button MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
    color: "#FF007A"
  },
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
    {
      "border-color": "#FF007A",
    },
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      "border-color": "#FF007A",
      "border-width": "2px",
    },
  "& .MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline":
    {
      "border-color": "#FF007A",
      "border-width": "2px",
    },
};

export default function PermanentDrawer() {
  const [date, setDate] = useState(dayjs(""));
  const [time, setTime] = useState(dayjs(""));

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={date}
          onChange={(newDate) => setDate(newDate)}
          sx={calender_style}
        />
        <TimePicker
          label=""
          value={time}
          onChange={(newTime) => setTime(newTime)}
          sx={time_style}
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
