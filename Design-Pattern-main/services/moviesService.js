const MovieRepositories = require("../repositories/moviesRepositories.js");

class MovieService {

  static create = async (params) => {
    try {
      const { title, genres, year } = params;
      
      const moviePayload = {
        title, genres, year
      }

      const data = await MovieRepositories.create(moviePayload);
      return data;
    } catch(err) {
      throw(err);
    }
  }

  static findAll = async () => {
    try {
      const data = await MovieRepositories.findAll();
      return data;
    } catch(err) {
      throw err
    }
  }

  static findOne = async (params) => {
    try {
      const { id } = params;
      const data = await MovieRepositories.findOne(id);
      return data;
    } catch(err) {
      throw(err);
    }
  }

  static uploadImage = async (params) => {

    try {
        const {file, id} = params;

        const image_url = `http://localhost:3000/uploads/${file.filename}`
        const payload = {
            image_url
        }
        const data = await MovieRepositories.uploadImage(id, payload);
        return data;
    } catch(err) {
        throw err;
    }
}


  static update = async (params) => {
    try {
      const { id, updatedData } = params;
      const updatedMovie = await MovieRepositories.update(id, updatedData);
  
      return updatedMovie;
    } catch (err) {
      throw err;
    }
  }  

  static destroy = async (params) => {
    try {
      const {id} = params;

      await MovieRepositories.destroy(id);
    } catch(err) {
      throw(err);
    }
  }
}

module.exports = MovieService;