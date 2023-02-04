import { NewBookInput, Book } from "../Entities/Book";

export interface BookService {
  create(data: NewBookInput): Promise<Book>;
  getAll(): Promise<Book[]>;
  getById(id: string): Promise<Book | void>;
  updateById(id: string, data: Partial<Book>): Promise<void>;
  deleteById(id: string): Promise<void>;
}
