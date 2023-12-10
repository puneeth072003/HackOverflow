require("dotenv").config();
const googleapis = require("googleapis");
const createEvent = require("./writeEvents");

const getHome = async (req, res) => {
  res.send("Hi huddle here");
};

const fetchAccessToken = async (code) => {
  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3500/api/v1/login/callback",
        client_id: process.env.CALENDER_CLIENT_ID,
        client_secret: process.env.CALENDER_CLIENT_SECRET,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Google Calendar access token:", error);
  }
};

const writeEvent=(req,res)=>{
  const data = req.body
  const accessToken = global.access_token_calendar;
  const calendarId = 'primary'; // Use 'primary' for the primary calendar
  const eventSummary = data.eventsName;
  const eventStart = data.startTime; // UTC time
  const eventEnd = data.endTime ; // UTC time
  const eventFollowUps = data.eventDesc ; // UTC time

  createEvent(accessToken, calendarId, eventSummary, eventStart, eventEnd, eventFollowUps);
}

module.exports = { getHome, fetchAccessToken ,writeEvent};
