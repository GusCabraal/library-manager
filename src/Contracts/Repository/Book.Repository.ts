import { NewBookInput, Book } from "../Entities/Book";

export interface BookRepository {
  create(data: NewBookInput): Promise<Book>;
  getAll(): Promise<Book[]>;
  getById(id: string): Promise<Book | null>;
  getByName(name: string): Promise<Book | null>;
  updateById(id: string, data: Partial<Book>): Promise<[number]>;
  deleteById(id: string): Promise<number>;
}
