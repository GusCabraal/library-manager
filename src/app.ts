import express from "express";

import "express-async-errors";
import { handleErrors } from "./Middlewares/handleErrors";
import { bookRoutes } from "./routes/book.routes";

export const app = express();

app.use(express.json());
app.use("/books", bookRoutes);
app.use(handleErrors);
