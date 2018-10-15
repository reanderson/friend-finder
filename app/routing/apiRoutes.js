// import data
const friendData = require("../data/friends")

module.exports = function(app) {
// GET route to send back friendData as JSON
app.get("/api/friends", function(req, res) {
  res.json(friendData)
});

// POST route to receive  data from front end and add it to friendData
app.post("/api/friends", function (req, res) {
  // retrieve sent information
  const newFriend = req.body;

  // add to list of friends
  friendData.push(newFriend)

  res.json(newFriend)
})
}