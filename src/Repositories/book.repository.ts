import { Book, NewBookInput } from "../Contracts/Entities/Book";
import { BookRepository } from "../Contracts/Repository/Book.Repository";
import BookModel from "../database/models/Book";
// import { ClientODM } from '../Models/ClientODM';

export class bookRepository implements BookRepository {
  create = async (data: NewBookInput) => {
    return BookModel.create(data, { raw: true });
  };

  getAll = async () => {
    return BookModel.findAll({ raw: true });
  };

  getById = async (id: string) => {
    return BookModel.findByPk(id, { raw: true });
  };

  getByName = async (name: string) => {
    return BookModel.findOne({ where: { name }, raw: true });
  };

  updateById = async (id: string, data: Partial<Book>) => {
    return BookModel.update(data, { where: { id } });
  };

  deleteById = async (id: string) => {
    return BookModel.destroy({ where: { id } });
  };
}
