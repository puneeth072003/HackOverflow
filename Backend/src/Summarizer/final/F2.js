const { exec } = require("child_process");
const path = require("path");
require("dotenv").config();

//transcribe the audio
const F2 = async () => {
  const pythonScriptPath = path.resolve(__dirname, "..\\final\\P1.py");

  // Wrap the exec function in a Promise
  const executePythonScript = () => {
    return new Promise((resolve, reject) => {
      exec(`python ${pythonScriptPath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing the Python script: ${error}`);
          reject(error); // Reject the Promise in case of an error
        }
        resolve(stdout); // Resolve the Promise with the stdout content
      });
    });
  };
  try {
    // Await the execution of the Python script
    const pythonOutput = await executePythonScript();
    console.log(`Python script output:\n${pythonOutput}`);
    return pythonOutput;
  } catch (error) {
    return error;
  }
};

module.exports = F2;
