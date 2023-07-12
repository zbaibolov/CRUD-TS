import express, { Express, NextFunction, Request, Response } from "express";
import userRoutes from "./users/user.routes";

const app: Express = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: "An unexpected error occurred!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
