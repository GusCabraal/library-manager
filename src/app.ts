import express from "express";

import "express-async-errors";
import { bookRoutes } from "./routes/book.routes";

export const app = express();

app.use(express.json());
app.use("/books", bookRoutes);
