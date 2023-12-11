const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const getNotification = async (meetName, email, date, time) => {
  const pythonScriptPath = path.resolve(__dirname, ".\\notification.py");

  payload = [meetName, email, date, time];
  const pythonProcess = await spawn("python", [pythonScriptPath, payload]);

  pythonProcess.stdout.on("data", (data) => {
    console.error(`Python notification Output: ${data}`);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`Python Error: ${data}`);
  });
};

module.exports = getNotification;
