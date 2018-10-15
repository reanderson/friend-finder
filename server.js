// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express middleware
// =============================================================
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Route files
// =============================================================
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

// Turn on Server
// =============================================================
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})