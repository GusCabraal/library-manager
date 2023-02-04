import { Router } from "express";

import { bookController } from "../Controller/book.controller";
import {
  validateNewBook,
  validateUpdateBook,
} from "../Middlewares/validateBook";
import { bookRepository } from "../Repositories/book.repository";
import { bookService } from "../Service/book.service";

const repository = new bookRepository();
const service = new bookService(repository);
const controller = new bookController(service);

export const bookRoutes = Router();

bookRoutes.post("/", validateNewBook, controller.create);
bookRoutes.get("/", controller.getAll);
bookRoutes.get("/:id", controller.getById);
bookRoutes.put("/:id", validateUpdateBook, controller.updateById);
bookRoutes.delete("/:id", controller.deleteById);
