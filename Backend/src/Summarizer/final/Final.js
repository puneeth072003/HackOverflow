const F1 = require("./F1");
const F2 = require("./F2");
const F3 = require("./F3");

const Final = (req, res) => {
  // const inputFilePath=req.
  //   WAV_file_Path = F1("inputFilePath")
  //     .then((outputFilePath) => {
  //       // Use the output file path or perform further actions
  //       console.log("Audio extracted:", outputFilePath);
  //     })
  //     .catch((error) => {
  //       // Handle the error if extraction fails
  //       console.error("Extraction failed:", error);
  //     });
  transcribed_file_Path = F2()
    .then((outputFilePath) => {
      // Use the output file path or perform further actions
      console.log("Audio transcribed:", outputFilePath);
    })
    .catch((error) => {
      // Handle the error if extraction fails
      console.error("transcription failed:", error);
    });
  Final_Summary = F3()
    .then((outputFilePath) => {
      // Use the output file path or perform further actions
      console.log("Final Summary:", outputFilePath);
    })
    .catch((error) => {
      // Handle the error if extraction fails
      console.error("Summarization failed:", error);
    });
  res.send(Final_Summary);
};
module.exports = Final;
