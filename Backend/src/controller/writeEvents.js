const { google } = require('googleapis');
require("dotenv").config();

async function createEvent(accessToken, calendarId, eventSummary, eventStart, eventEnd) {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  
  const event = {
    summary: eventSummary,
    start: {
      dateTime: eventStart,
      timeZone: 'UTC',
    },
    end: {
      dateTime: eventEnd,
      timeZone: 'UTC',
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: calendarId,
      resource: event,
    });

    console.log(`Event created: ${response.data.htmlLink}`);
  } catch (error) {
    console.error(`Error creating event: ${error.message}`);
  }
}



module.exports=createEvent;