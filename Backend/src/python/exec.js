const { exec } = require("child_process");
const path = require("path");
require("dotenv").config();

const keywords = async (req, res) => {
  const pythonScriptPath = path.resolve(__dirname, "..\\python\\hello.py");

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
    const pythonOutput = await executePythonScript();
    console.log(`Python script output:\n${pythonOutput}`);
    res.send(pythonOutput);
  } catch (error) {
    res.status(500).send("Error occurred");
  }
};

module.exports = keywords;
