const { getHome } = require("../controller/Controller");
const express = require("express");
const ConvtoAudio = require("../Summarizer/VidToAudConvertor");
const summarize = require("../Summarizer/TextSummarizer");
const ConvtoText = require("../Summarizer/AudToTextConvertor");
const Final = require("../Summarizer/final/Final");
const router = express.Router();

router.get("/", getHome);
router.get("/ConvtoAudio", ConvtoAudio);
router.get("/ConvtoText", ConvtoText);
router.get("/summarize", summarize);
router.get("/final", Final);

module.exports = router;
