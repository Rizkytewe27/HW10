const { Users } = require("../models");

class UserRepositories {

  static async create(params) {
    try {
      const data = await Users.create(params, { returning: true });
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async findAll() {
    try {
      const data = await Users.findAll();
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async findOne(id) {
    try {
      const data = await Users.findOne({
        where: { id }
      });
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async update(id, updatedUsers) {
    try {
      const [rowsUpdated, [updatedUser]] = await Users.update(updatedUsers, {
        where: { id },
        returning: true,
      });

      if (rowsUpdated === 0) {
        return null;
      }

      return updatedUser;
    } catch (err) {
      throw err;
    }
  }

  static async destroy(id) {
    try {
      const existingUser = await UserRepositories.findOne(id);

      if (!existingUser) {
        return null;
      }

      await Users.destroy({
        where: { id },
      });

      return existingUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserRepositories;
