require("dotenv").config();
const googleapis = require("googleapis");

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

const fetchUserInfo = async (req, res) => {
  try {
    const peopleApi = googleapis.people({
      version: "v1",
      auth: global.access_token_calendar,
    });
    const response = await peopleApi.people.get({
      resourceName: "people/me",
      personFields: "names,emailAddresses",
    });

    const username = response.data.names[0].displayName;
    const email = response.data.emailAddresses[0].value;

    res.json({ username: username, email: email });
  } catch (error) {
    console.error("Error fetching user information:", error);
    res.send(error);
  }
};

module.exports = { getHome, fetchAccessToken };
