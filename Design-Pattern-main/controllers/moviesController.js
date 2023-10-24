const MovieService = require("../services/moviesService.js")

class MoviesController {
  
  static create = async (req, res, next) => {
    try {
      const data = await MovieService.create(req.body);
      res.status(201).json(data)
    } catch(err) {
      next(err);
    }
  }

  static findAll = async (req, res, next) => {
    try {
      const data = await MovieService.findAll();

      res.status(200).json(data);
    } catch(err) {
      next(err);
    }
  }

  static findOne = async (req, res, next) => {
    try {
      const data = await MovieService.findOne(req.params);

      if(!data) {
        throw {name: "Error Not Found"}
      }
      res.status(200).json(data);
    } catch(err) {
      next(err);
    }
  }

  static uploadImage = async (req, res, next) => {
    try {
      const params = {
        file: req.file,
          id: req.params.id
      }

      const data = await MovieService.uploadImage(params)

      res.status(200).json(data);
    } catch(err) {
      next(err);
    }
}

  static update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const data = await MovieService.update(id, updatedData);

      if(!data) {
        throw {name: "Error Not Found"};
      }

      res.status(200).json(data);
    } catch(err) {
      next(err)
    }
  }

  static destroy = async (req, res, next) => {
    try {
      await MovieService.destroy(req.params);

      res.status(200).json({message: "Delete successfuly"})
    } catch(err) {
      next(err);
    }
  }
}

module.exports = MoviesController;