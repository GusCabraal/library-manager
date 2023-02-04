export interface Book {
  id: number;
  name: string;
  author: string;
  publishing: string;
  releaseYear: number;
  numberOfPages: number;
}

export type NewBookInput = Omit<Book, "id">;
