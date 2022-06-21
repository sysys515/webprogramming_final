const express = require("express");

const app = express();
const port = 80;

app.use(express.json());
app.use(express.static("public"));

app.listen(port, function () {
  console.log("HTML 서버 시작됨");
});

const getWeather = require("./public/main");
app.get("/weather", getWeather);
