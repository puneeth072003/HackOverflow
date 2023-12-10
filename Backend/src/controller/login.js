require("dotenv").config();

const getLogin = async (req, res) => {
  try {
    const payLoad = new URLSearchParams({
      client_id: process.env.CALENDER_CLIENT_ID, // Replace with your actual client ID
      redirect_uri: "http://localhost:3500/api/v1/login/callback",
      scope:
        "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/gmail.readonly openid email", // Read and write access to calendars
      response_type: "code",
      access_type: "offline", // Allow refresh tokens for long-term access
      prompt: "consent", // Force user consent even if previously granted
    }).toString();
    const loginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${payLoad}`;

    res.json({ redirectUrl: loginUrl });
    // res.redirect(loginUrl);
  } catch (error) {
    global.login = false;
    res.status(500).json(error);
  }
};

module.exports = { getLogin };
