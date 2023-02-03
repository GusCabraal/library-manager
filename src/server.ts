import "dotenv/config";
import { app } from "./app";

const PORT = process.env.PORT ?? "3001";

export const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
