const fs = require("fs");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");

// convt video to Audio
const F1 = (inputFilePath) => {
  return new Promise((resolve, reject) => {
    // Input file path comment below this one later
    const inputFilePath = `C:\\Users\\HOME\\Desktop\\Projects\\Hackoverflow\\Backend\\Assets\\input.mp4`; // Replace 'input.mp4' with your input file name and path

    // Output file path
    const outputFilePath = `C:\\Users\\HOME\\Desktop\\Projects\\Hackoverflow\\Backend\\Assets\\ExtractedAudio.wav`;

    // Create a new ffmpeg command
    ffmpeg()
      .input(inputFilePath)
      .output(outputFilePath)
      .format("wav") // Specify the output audio format
      .on("end", () => {
        console.log(
          "Audio extraction finished....Continuing with further process"
        );
        resolve(outputFilePath); // Resolve the Promise with the output file path
      })
      .on("error", (err) => {
        console.error("Error:", err);
        reject("Error in F1"); // Reject the Promise with an error message
      })
      .run();
  });
};

module.exports = F1;
