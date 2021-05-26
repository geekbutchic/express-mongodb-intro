var createError = require("http-errors");
// CATCHES ERRORS
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// DRIVER FOR MONGODB
var mongoose = require("mongoose");

// WHERE MONGOOSE IS LIVING
mongoose
  .connect("mongodb://localhost:27017/express-mongodb-intro", {
    useNewUrlParser: true, // ADD ERRORS MESSAGES
    useUnifiedTopology: true, // REMOVES ERROR MESSAGES
  })
  .then(() => { // PROMISES
    console.log(`MONGODB CONNECTED`);
  })
  .catch(function (e) {
    console.log(e);
  });
// MONGODB ATLAS

var indexRouter = require("./routes/indexRouter");
var usersRouter = require("./routes/users/usersRouter");
var productsRouter = require("./routes/product/productsRouter")

var app = express();

app.use(logger("dev"));
app.use(express.json());
// PARSE INPUT FROM FORMS
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTERS
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/product", productsRouter);

// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function (req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: "error", error: err });
});

module.exports = app;
