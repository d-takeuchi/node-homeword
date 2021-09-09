const express = require("express");
const path = require("path");
const layouts = require("express-ejs-layouts");
const router = require("./routes");
const { json, urlencoded } = require("express");

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.set("port", process.env.PORT || 3000);
app.use(layouts);

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`port : ${app.get("port")} listening`);
});
