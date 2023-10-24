const express = require("express")
const router = express.Router();
const UsersController = require("../controllers/usersController")

router.post("/", UsersController.create);
router.get("/", UsersController.findAll);
router.get("/:id", UsersController.findOne);
router.put("/:id", UsersController.update);
router.delete("/:id", UsersController.destroy)

module.exports = router;