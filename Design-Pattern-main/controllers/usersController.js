const UserService = require("../services/usersService.js")

class UsersController {
  static create = async (req, res, next) => {
    try {
      const data = await UserService.create(req.body);
      res.status(201).json(data)
    } catch(err) {
      next(err);
    }
  }

  static findAll = async (req, res, next) => {
    try {
      const data = await UserService.findAll();

      res.status(200).json(data);
    } catch(err) {
      next(err);
    }
  }

  static findOne = async (req, res, next) => {
    try {
      const data = await UserService.findOne(req.params);

      if(!data) {
        throw {name: "Error Not Found"}
      }
      res.status(200).json(data);
    } catch(err) {
      next(err);
    }
  }

  static update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const data = await UserService.update(id, updatedData);

      if(!data) {
        throw {name: "Error Not Found"};
      }

      res.status(200).json(data);
    } catch(err) {
      next(err)
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
  
      const data = await UserService.destroy(id);
  
      if (!data) {
        throw { name: "Error Not Found" };
      }
  
      res.status(200).json({ message: "Delete successfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UsersController;