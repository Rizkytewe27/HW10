const UserRepositories = require("../repositories/usersRepositories.js")

class UserService {

  static create = async (params) => {
    try {
      const { email, gender, password, role } = params;
        const payload = {
          email, gender, password, role
        }
        const data = await UserRepositories.create(payload)
        return data;
    } catch(err) {
      throw err
    }
  }

  static findAll = async () => {
    try {
      const data = await UserRepositories.findAll();
      return data;
    } catch(err) {
      throw err
    }
  }

  static findOne = async ({id}) => {
    try {
      const data = await UserRepositories.findOne(id)
      return data;
    } catch(err) {
      throw err
    }
  }

  static update = async (id, updatedData) => {
    try {
      const data = await UserRepositories.update(id, updatedData);
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async destroy(id) {
    try {
      const data = await UserRepositories.destroy(id);
      return data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;