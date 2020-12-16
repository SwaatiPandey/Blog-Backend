const express = require("express");
const { getAllTasks } = require("../controllers/blogController");
const router = express.Router();
router.route("/blogs").get(getAllBlogs);
module.exports = router;
