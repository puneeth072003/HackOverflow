const { getHome, writeEvent } = require("../controller/Controller");
const express = require("express");
const ConvtoAudio = require("../Summarizer/VidToAudConvertor");
const summarize = require("../Summarizer/TextSummarizer");
const ConvtoText = require("../Summarizer/AudToTextConvertor");
const Final = require("../Summarizer/final/Final");
const { getLogin } = require("../controller/login");
const googleCalendarCallback = require("../controller/callback");
const fetchCalendarEvents = require("../controller/fetchCalendarEvents");
const getNotification = require("../controller/notification");

const router = express.Router();

router.get("/", getHome);
router.get("/ConvtoAudio", ConvtoAudio);
router.get("/ConvtoText", ConvtoText);
router.get("/summarize", summarize);
router.get("/final", Final);
router.get("/login", getLogin);
router.get("/login/callback", googleCalendarCallback);
router.get("/notification",getNotification);

// router.get("/fetchUserInfo", fetchUserInfo);
router.get("/updateCalendar", fetchCalendarEvents);
router.get("/write",writeEvent) //change this later to post

module.exports = router;
