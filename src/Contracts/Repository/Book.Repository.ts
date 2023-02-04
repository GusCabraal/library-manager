import { NewBookInput, Book } from "../Entities/Book";

export interface BookRepository {
  create(data: NewBookInput): Promise<Book>;
  getAll(): Promise<Book[]>;
}
