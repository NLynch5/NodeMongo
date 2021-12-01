//create a function to add and list a movie
//exports.addMovie is instead of having to add a module.exports at the bottom

//CREATE (CRUD)
exports.addMovie = async (collection, dataObj) => {
  try {
    await collection.insertOne(dataObj);
  } catch (error) {
    console.log(error);
  }
};

//READ (CRUD)
exports.listMovies = async (collection) => {
  try {
    const listAll = await collection.find().toArray(); //to.array returns an array of the data
    console.log(listAll);
  } catch (error) {
    console.log(error);
  }
};

// //UPDATE (CRUD)
exports.updateMovie = async (collection, dataObj) => {
  try {
    await collection.updateOne(
      { id: dataObj.id },
      {
        $set: {
          title: dataObj.title,
          actor: dataObj.actor,
          rating: dataObj.rating,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//DELETE (CRUD)
exports.deleteMovie = async (collection, dataObj) => {
  try {
    await collection.deleteOne(dataObj);
  } catch (error) {
    console.log(error);
  }
};
