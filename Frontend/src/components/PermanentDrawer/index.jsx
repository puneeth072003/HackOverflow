import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";

const drawerWidth = 350;

const custom_style = {
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

export default function PermanentDrawer() {
  const [value, setValue] = useState(dayjs("2023-12-07"));

  console.log(value);
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
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={custom_style}
        />
      </LocalizationProvider>
      <Divider sx={{ "border-color": "#313942" }} />
      <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[1.4rem] py-[1rem] font-[1000]">
        No Events Yet
      </h1>
    </Drawer>
  );
}
