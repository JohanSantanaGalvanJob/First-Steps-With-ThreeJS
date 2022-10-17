const express = require("express");
// DECOMMENT:
var path = require('path');

const app = express();

// public directory
// DECOMMENT:
app.use(express.static(path.join(__dirname, 'public')));



app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// normal use. Doesn't delete the database data
db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Test application." });
});

require("./routes/test.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
