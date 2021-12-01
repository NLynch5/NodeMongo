const connection = require("./db/connection.js");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./utils");

//
const command = process.argv[2];

//create app function to CREATE & UPDATE & DELETE database
const app = async () => {
  if (command === "add") {
    const newMovie = {
      title: process.argv[3],
      actor: process.argv[4],
      rating: process.argv[5],
      id: process.argv[6],
    };
    await connection(addMovie, newMovie);
    console.log("Movie added");
  } else if (command === "list") {
    await connection(listMovies);
    console.log("Movie List");
  } else if (command === "update") {
    const movieUpdate = {
      title: process.argv[3],
      actor: process.argv[4],
      rating: process.argv[5],
      id: process.argv[6],
    };
    await connection(updateMovie, movieUpdate);
  } else if (command === "delete") {
    const movieDelete = {
      title: process.argv[3],
    };
    console.log("Movie deleted");
    await connection(deleteMovie, movieDelete);
  } else {
    console.log("Incorrect Input");
  }
};

//call the function
app();
