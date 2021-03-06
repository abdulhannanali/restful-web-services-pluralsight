var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

var db = mongoose.connect("mongodb://localhost/bookAPI");

var Book = require("./models/bookModel");
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var bookRouter = require("./Routes/bookRoutes")(Book);
// var authorRouter = require("./Routes/authorRoutes")();

app.use("/api/books", bookRouter);
// app.use("/api/authors", authorRouter);

app.listen(8080, function() {
    console.log("Gulp is running my app on PORT " + port);
});
