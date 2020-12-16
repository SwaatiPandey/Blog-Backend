const fs = require("fs");
const path = require("path");
// const mongoose = require("mongoose");
const Blogs = require("../models/blogs.js");
// const Blog = require("../models/blogSchema.js");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const fileName = path.join(__dirname, "..", "data", "blog.json");
const tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAllBlogs = (req, res, next) => {
  sendResponse(200, "Successful", blogs, req, res);
  Blog.find({})
    .then((allBlogs) => {
      console.log("All Blogs");
      // console.log(allTasks);
      sendResponse(200, "Successful", allBlogs, req, res);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getBlogById = (req, res, next) => {
  sendResponse(200, "Successful", blogs, req, res);
  Blog.find({ id })
    .then((allBlogs) => {
      console.log("All Blogs");
      // console.log(allTasks);
      sendResponse(200, "Successful", allBlogs, req, res);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogById = getBlogById;
