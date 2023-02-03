import { type Request, type Response, type NextFunction } from "express";

import { newBook } from "./schemas";

export const validateNewBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = newBook.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
};
