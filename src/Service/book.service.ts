import { Book, NewBookInput } from "../Contracts/Entities/Book";
import { BookRepository } from "../Contracts/Repository/Book.Repository";
import { BookService } from "../Contracts/Service/Book.Service";
import { ConflictError } from "../utils/errors/ConflitError";
import { NotFoundError } from "../utils/errors/NotFoundError";

const BOOK_NOT_FOUND = "Book not found";

export class bookService implements BookService {
  constructor(private bookRepository: BookRepository) {}

  async create(data: NewBookInput): Promise<Book | void> {
    const hasTheBookInDB = await this.bookRepository.getByName(data.name);

    if (hasTheBookInDB) {
      throw new ConflictError("Book already exists");
    }

    return this.bookRepository.create(data);
  }

  getAll(): Promise<Book[]> {
    return this.bookRepository.getAll();
  }

  async getById(id: string): Promise<Book | void> {
    const book = await this.bookRepository.getById(id);

    if (!book) {
      throw new NotFoundError(BOOK_NOT_FOUND);
    }
    return book;
  }

  async updateById(id: string, data: Partial<Book>): Promise<void> {
    const [hasBookUpdated] = await this.bookRepository.updateById(id, data);
    if (!hasBookUpdated) {
      throw new NotFoundError(BOOK_NOT_FOUND);
    }
  }

  async deleteById(id: string): Promise<void> {
    const hasBookDeleted = await this.bookRepository.deleteById(id);
    if (!hasBookDeleted) {
      throw new NotFoundError(BOOK_NOT_FOUND);
    }
  }
}
