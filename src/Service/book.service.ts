import { Book, NewBookInput } from "../Contracts/Entities/Book";
import { BookRepository } from "../Contracts/Repository/Book.Repository";
import { BookService } from "../Contracts/Service/Book.Service";

export class bookService implements BookService {
  constructor(private bookRepository: BookRepository) {}

  create(data: NewBookInput): Promise<Book> {
    return this.bookRepository.create(data);
  }
}
