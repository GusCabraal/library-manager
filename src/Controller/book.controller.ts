import { Request, Response } from "express";

import { BookService } from "../Contracts/Service/Book.Service";

export class bookController {
  constructor(private bookService: BookService) {}

  public create = async (req: Request, res: Response) => {
    const bookInput = req.body;

    return this.bookService
      .create(bookInput)
      .then((newBook) => res.status(201).json(newBook));
  };
}
