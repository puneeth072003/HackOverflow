const { google } = require("googleapis");
const getNotification = require("./notification");
require("dotenv").config();

async function createEvent(
  accessToken,
  calendarId,
  eventSummary,
  eventStart,
  eventEnd,
  eventFollowUps
) {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const event = {
    summary: eventSummary,
    start: {
      dateTime: eventStart,
      timeZone: "UTC",
    },
    end: {
      dateTime: eventEnd,
      timeZone: "UTC",
    },
    description: eventFollowUps,
  };

  try {
    const response = await calendar.events.insert({
      calendarId: calendarId,
      resource: event,
    });

    console.log(`Event created: ${response.data.htmlLink}`);
    getNotification(global.email);
  } catch (error) {
    console.error(`Error creating event: ${error.message}`);
  }
}

module.exports = createEvent;
