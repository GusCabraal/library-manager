import { Request, Response } from "express";

import { BookService } from "../Contracts/Service/Book.Service";

export class bookController {
  constructor(private bookService: BookService) {}

  public create = async (req: Request, res: Response) => {
    const newBook = req.body;

    return this.bookService
      .create(newBook)
      .then((bookId) => res.status(201).json({ id: bookId }));
  };
}
