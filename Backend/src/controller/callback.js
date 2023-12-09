const { fetchAccessToken } = require("./Controller");

require("dotenv").config();

const googleCalendarCallback = async (req, res) => {
  const code = req.query.code;
  try {
    const credentials = await fetchAccessToken(code);

    // Store the Google Calendar access token
    global.access_token_calendar = credentials.access_token;
    global.refresh_token_calendar = credentials.refresh_token;

    // Use the access token to interact with Google Calendar API
    // ... Your logic to read and write calendar data ...

    console.log("Google Calendar access token retrieved successfully.");
  } catch (error) {
    console.error("Error fetching Google Calendar access token:", error);
    res.status(500).json({ error: "Error retrieving access token." });
  }

  res.redirect("http://localhost:5173/home");
};

module.exports = googleCalendarCallback;
