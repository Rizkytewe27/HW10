const { Movies } = require("../models");

class MovieRepositories {

  static async create(params) {
    try {
      const data = await Movies.create(params, { returning: true });
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async findAll() {
    try {
      const data = await Movies.findAll();
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async findOne(id) {
    try {
      const data = await Movies.findOne({
        where: { id }
      });
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async update(id, updatedData) {
    try {
      const [rowsUpdated, [updatedMovie]] = await Movies.update(updatedData, {
        where: { id },
        returning: true,
      });

      if (rowsUpdated === 0) {
        return null;
      }

      return updatedMovie;
    } catch (err) {
      throw err;
    }
  }

  static uploadImage = async (id, payload) => {
    try {
        const foundMovie = await Movies.findOne({
            where: {
                id
            }
        })

        if(!foundMovie) {
            throw {name: "ErrorNotFound"}
        }

        await foundMovie.update(payload)
        return foundMovie
    } catch(err) {
        throw err;
    }
  }

  static async destroy(id) {
    try {
      const foundMovie = await Movies.findOne({
        where: { id },
      });

      if (!foundMovie) {
        throw { name: "ErrorNotFound" };
      }

      await foundMovie.destroy();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = MovieRepositories;