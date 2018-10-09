var path = require('path');


module.exports = function (app) {

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/view.html"));
});

app.get("/drone", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/apps/drone/drone.html"));
});

app.get("/congressional", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/apps/districts/congressional.html"));
});

app.get("/tennessee", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/apps/tennessee/vols.html"));
});

app.get("/ny", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/apps/newYork/NY.html"));
});

app.get("/tariffs", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/apps/tariffs/tariffs.html"));
});

app.get("/scraper", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/apps/newsScraper/index.html"));
  });

app.get("/trivia", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/apps/trivia/index.html"));
  });

};