/* eslint-disable import/no-extraneous-dependencies */
import express from "express";
import { serve, setup } from "swagger-ui-express";

import "express-async-errors";
import { handleErrors } from "./Middlewares/handleErrors";
import { bookRoutes } from "./routes/book.routes";
import swaggerDocs from "./swagger.json";

export const app = express();

app.use(express.json());
app.use("/api-docs", serve, setup(swaggerDocs));
app.use("/books", bookRoutes);
app.use(handleErrors);
