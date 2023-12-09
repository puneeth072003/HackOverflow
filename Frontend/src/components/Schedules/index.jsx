import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BACKEND_URI } from "../../config";

const Schedules = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URI}/api/v1/updateCalendar`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const getDate = dayjs(new Date());

  const today = [];
  const tom = [];

  events.forEach((e) => {
    const str = e.startDateTime.substring(0, 10);
    if (
      str ===
      getDate.year() + "-" + (getDate.month() + 1) + "-" + getDate.date()
    )
      today.push(e);
    if (
      str ===
      getDate.year() + "-" + (getDate.month() + 1) + "-" + (getDate.date() + 1)
    )
      tom.push(e);
  });

  function getDay(i) {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][i];
  }
  function getMonth(i) {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][i];
  }

  const obj = useOutletContext();

  return (
    <>
      <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[2.5rem] py-[1rem] font-[600]">
        Your Schedule
      </h1>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-[#FF007A] font-['Cairo'] text-[1.7rem] font-[200]">
            Today
          </h3>
          <hr
            className="border-[#313942]"
            style={{ width: obj.large ? "38vw" : "55vw" }}
          />
          <div className="flex flex-col justify-center items-end">
            <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
              {getMonth(getDate.month())} {getDate.date()}, {getDate.year()}
            </h3>
            <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
              {getDay(getDate.day() % 7)}
            </h3>
          </div>
        </div>
        <div className="m-[1.5rem] flex justify-start items-start gap-[2rem]">
          <div className="flex flex-col justify-start gap-[1rem] p-[0rem]">
            <h3 className="text-[#FF007A] font-['Cairo'] text-[1.5rem] font-[200]">
              Time
            </h3>
            <h3 className="text-[#FF007A] font-['Cairo'] text-[1.5rem] font-[200]">
              Event
            </h3>
          </div>
          {today.map((elem) => (
            <>
              <div className="flex flex-col justify-start gap-[1rem] p-[0.5rem]">
                <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
                  {elem.startDateTime.substring(11, 16)}
                </h3>
                <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200] cursor-pointer">
                  {elem.eventName}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="mt-[4rem]">
        <div className="flex justify-between items-center">
          <h3 className="text-[#FF007A] font-['Cairo'] text-[1.7rem] font-[200]">
            Tomorrow
          </h3>
          <hr
            // eslint-disable-next-line react/prop-types
            className="border-[#313942]"
            style={{ width: obj.large ? "35vw" : "52vw" }}
          />
          <div className="flex flex-col justify-center items-end">
            <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
              {getMonth(getDate.month())} {getDate.date() + 1}, {getDate.year()}
            </h3>
            <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
              {getDay((getDate.day() + 1) % 7)}
            </h3>
          </div>
        </div>
        <div className="m-[1.5rem] flex justify-start items-start gap-[2rem]">
          <div className="flex flex-col justify-start gap-[1rem] p-[0rem]">
            <h3 className="text-[#FF007A] font-['Cairo'] text-[1.5rem] font-[200]">
              Time
            </h3>
            <h3 className="text-[#FF007A] font-['Cairo'] text-[1.5rem] font-[200]">
              Event
            </h3>
          </div>
          {tom.map((elem) => (
            <>
              <div className="flex flex-col justify-start gap-[1rem] p-[0.5rem]">
                <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
                  {elem.startDateTime.substring(11, 16)}
                </h3>
                <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200] cursor-pointer">
                  {elem.eventName}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedules;
