const router = require("express").Router();
const path = require("path");
const dbJSON = require("./db.json");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

// you need to read the file (fs)readfile and then return saved results
// fs.readFile(__dirname + "/db.json", function(err, data) {
//     console.log("this works");
//     return this;
// });

router.get("/api/notes", function (req, res) {
    res.json(dbJSON);
    console.log(dbJSON);
});


router.post("/api/notes", function (req, res) {
    console.log(req.body);
    // Validate request body
    if (!req.body.title) {
        return res.json({
            error: "Missing required title"
        });
    }

    // Copy request body and generate ID
    const note = {
        ...req.body,
        id: uuidv4()
    }

    // Push note to dbJSON array - saves data in memory
    dbJSON.push(note);

    // Saves data to file by persisting in memory variable dbJSON to db.json file.
    // This is needed because when we turn off server we loose all memory data like pbJSON variable.
    // Saving to file allows us to read previous notes (before server was shutdown) from file.
    fs.writeFile(path.join(__dirname, "db.json"), JSON.stringify(dbJSON), (err) => {
        if (err) {
            return res.json({
                error: "Error writing to file"
            });
        }

        return res.json(note);
    });
});

router.delete("/api/notes/:id", function (req, res) {
    res.json("Note deleted");
});

module.exports = router



/* 

user - computer - app
front - || - back

req = read, create, update, delete
.get = read
.post = create
.put = update
.delete = delete


when ? path
what ? data
where ? to user
*/