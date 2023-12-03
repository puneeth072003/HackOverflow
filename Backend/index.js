const express = require("express");
// const cors = require("cors");
const router = require("./src/Router/Route");
const app = express();

// const corsOptions = {
//   origin: "http://localhost:5173",
//   credentials: true,
// };

// app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/v1/", router);

app.listen(3500, () => {
  console.log("Server listening to port 3500, ENJOY");
});
//
