/* eslint-disable import/no-extraneous-dependencies */
import { Model, DataTypes } from "sequelize";

import database from ".";

class Book extends Model {
  public id!: number;

  public name!: string;

  public author!: string;

  public publishing!: string;

  public releaseYear!: number;

  public numberOfPages!: number;
}

Book.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    publishing: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    releaseYear: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    numberOfPages: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
  },
  {
    sequelize: database, // isso é obrigatorio
    tableName: "books",
    timestamps: false,
  }
);

export default Book;
