import { Book, NewBookInput } from "../Contracts/Entities/Book";
import { BookRepository } from "../Contracts/Repository/Book.Repository";
import { BookService } from "../Contracts/Service/Book.Service";
import { NotFoundError } from "../utils/errors/NotFoundError";

export class bookService implements BookService {
  constructor(private bookRepository: BookRepository) {}

  create(data: NewBookInput): Promise<Book> {
    return this.bookRepository.create(data);
  }

  getAll(): Promise<Book[]> {
    return this.bookRepository.getAll();
  }

  async getById(id: string): Promise<Book | void> {
    const book = await this.bookRepository.getById(id);

    if (!book) {
      throw new NotFoundError("Book not found");
    }

    return book;
  }
}
