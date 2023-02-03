import { Book } from "../Contracts/Entities/Book";
import { BookRepository } from "../Contracts/Repository/Book.Repository";
import { BookService } from "../Contracts/Service/Book.Service";

export class bookService implements BookService {
  constructor(private bookRepository: BookRepository) {}

  create(data: Book): Promise<number> {
    return this.bookRepository.create(data);
  }
}
