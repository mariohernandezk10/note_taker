// Dependencies
// =============================================================
const express = require("express");



const { notStrictEqual } = require("assert");
//const { use } = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//routes
app.use(htmlRoutes);
app.use(apiRoutes);




// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

// app.get("/", function(req, res) {
//   res.send("Proof of concept of storing data");
// });




// app.post("/api/notes", function(req, res) {
//   if (dbJSON) {
//     dbJSON.push(req.body);
//     res.json(true);
//   }
//   else {
//     res.json(false);
//   }
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
