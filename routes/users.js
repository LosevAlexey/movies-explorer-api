const routerUsers = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  updateUser,
  getUserInfo,
} = require('../controllers/users');

routerUsers.get('/users/me', getUserInfo);

routerUsers.patch('/users/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
}), updateUser);

module.exports = routerUsers;
