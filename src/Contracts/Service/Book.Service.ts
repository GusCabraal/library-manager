import { NewBookInput, Book } from "../Entities/Book";

export interface BookService {
  create(data: NewBookInput): Promise<Book>;
  getAll(): Promise<Book[]>;
}
