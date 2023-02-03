import { Book } from "../Entities/Book";

export interface BookService {
  create(data: Book): Promise<number>;
}
