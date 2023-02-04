import Joi from "joi";

export const newBook = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  publishing: Joi.string().required(),
  releaseYear: Joi.number().required(),
  numberOfPages: Joi.number().required(),
});
export const updateBook = Joi.object({
  name: Joi.string(),
  author: Joi.string(),
  publishing: Joi.string(),
  releaseYear: Joi.number(),
  numberOfPages: Joi.number(),
});
