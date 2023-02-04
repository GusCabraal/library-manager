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

  public getAll = async (_req: Request, res: Response) => {
    return this.bookService
      .getAll()
      .then((books) => res.status(200).json(books));
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    return this.bookService
      .getById(id)
      .then((book) => res.status(200).json(book));
  };

  public updateById = async (req: Request, res: Response) => {
    const {
      params: { id },
      body,
    } = req;
    return this.bookService
      .updateById(id, body)
      .then(() => res.sendStatus(204));
  };

  public deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    return this.bookService.deleteById(id).then(() => res.sendStatus(204));
  };
}
