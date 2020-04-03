const express = require("express");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();

app.use("/.netlify/functions/api", router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Acceess-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

router.get("/", (req, res) => {
  res.json({
    "Man Man": "hi",
    "Hello again": "AGAIN?"
  });
});

module.exports.handler = serverless(app);

// Testing cors origin
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Acceess-Control-Allow-Headers", "*");

//     if (req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//     next();
//   });
