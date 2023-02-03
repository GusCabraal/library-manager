import Joi from "joi";

export const newBook = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  publishing: Joi.string().required(),
  releaseYear: Joi.number().required(),
  numberOfPages: Joi.number().required(),
});
