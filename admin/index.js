var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/movie", {
  useNewUrlParser: true,
//   useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("error", () => console.log("Error in Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

app.post("/addmovie", (req, res) => {
  var Title = req.body.Title;
  var year = req.body.year;
  var rated = req.body.rated;
  var released = req.body.released;
  var runtime = req.body.runtime;
  var genre = req.body.genre;
  var director = req.body.director;
  var actors = req.body.actors;
  var plot = req.body.plot;
  var language = req.body.language;
  var country = req.body.country;
  var awards = req.body.awards;
  var poster = req.body.poster;
  var ratings = req.body.ratings;
  var metascore = req.body.metascore;
  var imdbRating = req.body.imdbRating;
  var imdbVotes = req.body.imdbVotes;
  var imdbID = req.body.imdbID;
  var type = req.body.type;
  var dvd = req.body.dvd;
  var boxOffice = req.body.boxOffice;
  var production = req.body.production;
  var website = req.body.website;

  var data = {
    Title: Title,
    year: year,
    rated: rated,
    released: released,
    runtime: runtime,
    genre: genre,
    director: director,
    actors: actors,
    plot: plot,
    language: language,
    country: country,
    awards: awards,
    poster: poster,
    ratings: ratings,
    metascore: metascore,
    imdbRating: imdbRating,
    imdbVotes: imdbVotes,
    imdbID: imdbID,
    type: type,
    dvd: dvd,
    boxOffice: boxOffice,
    production: production,
    website: website
  };

  db.collection("movieslist").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Inserted Successfully");
    console.log(data);
  });

  return res.redirect("signup_success.html");
});

app.get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
   // res.send("Connected")
    return res.redirect("index.html");
  })
  .listen(5000);

console.log("Listening on PORT 5000");
