const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const furnizorSchema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
  cui: Joi.string().required()
});

const productSchema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required(),
  description: Joi.string().optional(),
  furnizorId: Joi.number().integer().required()
});

const reviewSchema = Joi.object({
  content: Joi.string().required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  userId: Joi.number().integer().required(),
  productId: Joi.number().integer().required()
});

module.exports = {
  userSchema,
  furnizorSchema,
  productSchema,
  reviewSchema
};
