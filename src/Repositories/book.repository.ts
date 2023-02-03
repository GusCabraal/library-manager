import { Book } from "../Contracts/Entities/Book";
import { BookRepository } from "../Contracts/Repository/Book.Repository";
// import { ClientODM } from '../Models/ClientODM';

export class bookRepository implements BookRepository {
  //   private model: ClientODM;

  //   constructor(model: ClientODM) {
  //     this.model = model;
  //   }

  async create(data: Book): Promise<number> {
    return Object.keys(data).length;
  }
}
