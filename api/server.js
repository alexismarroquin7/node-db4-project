const express = require('express');
const recipeRouter = require('./recipies/recipe-router');

const server = express();

server.use(express.json());
server.use(`/api/recipies`, recipeRouter);

module.exports = server;