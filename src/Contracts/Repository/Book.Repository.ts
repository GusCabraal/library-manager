import { Book } from "../Entities/Book";

export interface BookRepository {
  create(data: Book): Promise<number>;
}
