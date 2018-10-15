// import path module
const path = require("path")

// create and export html routes
module.exports = function(app) {
  // home route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  })

  // survey route
  app.get("/find-friend", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  })

  // fallback route (in case other paths hit)
  // for now, just going to set it to take user back to the homepage
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  })
}