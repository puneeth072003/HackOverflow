import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Meeting = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Organize Meeting</h1>
        <section>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Meeting;
