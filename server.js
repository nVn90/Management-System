const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");

const app = express();

// path of config.env
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 1991;

// log requests
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// change directory of your ejs files
// app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css"))); // css/style.css
app.use("/img", express.static(path.resolve(__dirname, "assets/img"))); // img/style.css
app.use("/js", express.static(path.resolve(__dirname, "assets/js"))); // js/style.css

// load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
