const F1 = require("./F1");
const F2 = require("./F2");
const F3 = require("./F3");

const Final = async (req, res) => {
  const startTime = new Date();
  // const inputFilePath=req.
  WAV_file_Path = await F1("inputFilePath")
    .then((outputFilePath) => {
      // Use the output file path or perform further actions
      console.log("Audio extracted:", outputFilePath);
    })
    .catch((error) => {
      // Handle the error if extraction fails
      console.error("Extraction failed:", error);
    });
  transcribed_file_Path = await F2()
    .then((outputFilePath) => {
      // Use the output file path or perform further actions
      console.log("Audio transcribed:", outputFilePath);
    })
    .catch((error) => {
      // Handle the error if extraction fails
      console.error("transcription failed:", error);
    });
  payload = "";
  Final_Summary = await F3()
    .then((outputFilePath) => {
      // Use the output file path or perform further actions
      payload = outputFilePath;
      console.log("Final Summary:", outputFilePath);
    })
    .catch((error) => {
      // Handle the error if extraction fails
      console.error("Summarization failed:", error);
    });

  const endTime = new Date();
  const executionTime = (endTime - startTime) / (1000 * 60);
  res.json({
    summary: payload,
    executionTime: executionTime + "mins",
  });
};
module.exports = Final;
