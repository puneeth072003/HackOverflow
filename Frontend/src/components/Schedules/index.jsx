import dayjs from "dayjs";

// eslint-disable-next-line react/prop-types
const Schedules = ({ large }) => {
  const getDate = dayjs(new Date());

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
            // eslint-disable-next-line react/prop-types
            className="border-[#313942]"
            style={{ width: large ? "38vw" : "55vw" }}
          />
          <div className="flex flex-col justify-center items-end">
            <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
              {getMonth(getDate.month())} {getDate.date()}, {getDate.year()}
            </h3>
            <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
              {getDay((getDate.day())%7)}
            </h3>
          </div>
        </div>
        <div className="h-[30vh]">
          {/* Meeting INFO */}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-[#FF007A] font-['Cairo'] text-[1.7rem] font-[200]">
            Tomorrow
          </h3>
          <hr
            // eslint-disable-next-line react/prop-types
            className="border-[#313942]"
            style={{ width: large ? "35vw" : "52vw" }}
          />
          <div className="flex flex-col justify-center items-end">
            <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
              {getMonth(getDate.month())} {getDate.date()+1}, {getDate.year()}
            </h3>
            <h3 className="text-[#fff] font-['Cairo'] text-[1.2rem] font-[200]">
              {getDay((getDate.day()+1)%7)}
            </h3>
          </div>
        </div>
        <div className="h-[30vh]">
          {/* Meeting INFO */}
        </div>
      </div>
    </>
  );
};

export default Schedules;
