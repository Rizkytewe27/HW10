const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/moviesController');
const multer = require('multer');
const diskStorage = require('../middlewares/multer');

router.post("/", MoviesController.create);
router.get("/", MoviesController.findAll);
router.get("/:id", MoviesController.findOne);
router.put('/:id', MoviesController.update)
router.put("/upload/:id", multer({storage: diskStorage}).single("image"), MoviesController.uploadImage);
router.delete("/:id", MoviesController.destroy)

module.exports = router;