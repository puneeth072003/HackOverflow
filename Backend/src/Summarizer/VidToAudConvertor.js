const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");

const ConvtoAudio = (req, res) => {
  // Input file path
  const inputFilePath = `C:\\Users\\HOME\\Desktop\\Projects\\Hackoverflow\\Backend\\Assets\\input.mp4`; // Replace 'input.mp4' with your input file name and path

  // Output file path
  const outputFilePath = `C:\\Users\\HOME\\Desktop\\Projects\\Hackoverflow\\Backend\\Assets\\ExtractedAudio.wav`; // Replace 'output.mp4' with your desired output file name and path

  // Create a new ffmpeg command
  ffmpeg()
    .input(inputFilePath)
    .output(outputFilePath)
    .format("wav") // Specify the output audio format
    .on("end", () => {
      console.log("Audio extraction finished");
      res.send("Audio extraction finished");
    })
    .on("error", (err) => {
      console.error("Error:", err);
      res.status(500).send("Error during audio extraction");
    })
    .run();
};

module.exports = ConvtoAudio;
