const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const getNotification = (req, res) => {
  const pythonScriptPath = path.resolve(__dirname, ".\\notification.py");


    email=['huddle773@gmail.com'] // Change email here

    const pythonProcess = spawn("python", [pythonScriptPath,email]);

    pythonProcess.stdout.on("data", (data) => {
        console.error(`Python notification Output: ${data}`);
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python Error: ${data}`);
    });

    
  };

module.exports = getNotification ;