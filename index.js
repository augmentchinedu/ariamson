const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan("tiny"));

app.use(express.static(path.join(__dirname, "client")));

app.listen(process.env.PORT || 3000);
